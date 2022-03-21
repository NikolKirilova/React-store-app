import React, {useState, useEffect, useCallback} from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    user: null,
    localId: '',
    displayName: '',
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
    const [user, setUser] = useState();
    const [userId, setUserId] = useState();
    const [userName, setUserName] = useState();


    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('localId');

    },[]);


    const loginHandler = (token, expirationTime, user,localId,displayName) => {
        setToken(token);
        setUser(user);
        setUserId(localId);
        setUserName(displayName);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime)
        localStorage.setItem('localId', localId);
        localStorage.setItem('user',user)
        console.log(user)
        console.log(localId);
        console.log(displayName);



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
        user: user,
        localId:userId,
        displayName:userName,
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