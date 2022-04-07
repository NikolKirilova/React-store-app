import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/categories_reducer'
import { categories_url as url } from '../utils/constants'
import {  
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_SINGLE_CATEGORY_BEGIN,
  GET_SINGLE_CATEGORY_SUCCESS,
  GET_SINGLE_CATEGORY_ERROR,
} from '../actions'

const initialState = {
  categories_loading:false,
  categories_error:false,
  categories:[],
//   featured_products:[],
  single_category_loading:false,
  single_category:[],
  single_category_error:false,
}

const CategoriesContext = React.createContext()

export const CategoriesProvider = ({ children }) => {
  const [state, dispatch]= useReducer(reducer, initialState)


  const fetchCategories = async (url) => {
  dispatch({type:GET_CATEGORIES_BEGIN})
  try{
    const response = await axios.get(url)
  

    const categories = response.data
    console.log(categories);
    dispatch({type:GET_CATEGORIES_SUCCESS, payload: categories})
  } catch (error){
    dispatch({type:GET_CATEGORIES_ERROR})
  }
  // console.log(response)  
}

const fetchSingleCategory = async (url) => {
  dispatch({type: GET_SINGLE_CATEGORY_BEGIN});
  try {
    const response = await axios.get(url)
    const singleCategory = response.data
    dispatch({type:GET_SINGLE_CATEGORY_SUCCESS, payload:singleCategory})
  }catch (error) {
    dispatch({type:GET_SINGLE_CATEGORY_ERROR})
  }
}


useEffect(() => {
    fetchCategories(url)
},[])
 
  return (
    <CategoriesContext.Provider value={{...state, fetchSingleCategory}}>
      {children}
    </CategoriesContext.Provider>
  )
}
// make sure use
export const useCategoriesContext = () => {
  return useContext(CategoriesContext)
}
