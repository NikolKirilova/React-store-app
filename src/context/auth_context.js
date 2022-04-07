import React, {useState, useEffect, useCallback} from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    email: null,
    // localId: '',
    // displayName: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
}

const retrieveStoredToken =  () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime')
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime
    }
}

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();
    let initialToken;
    if (tokenData) {
        initialToken = tokenData.token;
    }
     
    const [token, setToken] = useState(initialToken);
    // const [token, setToken] = useState();
    const [email, setEmail] = useState();
    // const [userId, setUserId] = useState();
    // const [userName, setUserName] = useState();


    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('email');

    },[]);


    const loginHandler = (token, expirationTime, email) => {
    // const loginHandler = (token, email) => {

        setToken(token);
        setEmail(email);
    
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime)
        localStorage.setItem('email', email);
        console.log(email)
        console.log(token);
       



        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }

        const remainingTime = calculateRemainingTime(expirationTime);

        // setTimeout(logoutHandler, 3000)
        logoutTimer = setTimeout(logoutHandler, remainingTime)

    };

    useEffect(() => {
        if(tokenData) {
            console.log(tokenData.duration)
        logoutTimer = setTimeout(logoutHandler, tokenData.duration)
        }
    }, [tokenData, logoutHandler] );

  
    const contextValue = {
        token: token,
        email: email,      
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
        {props.children}
        </AuthContext.Provider>
    )  
}

export default AuthContext;