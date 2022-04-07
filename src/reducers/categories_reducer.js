import {
    GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_SINGLE_CATEGORY_BEGIN,
  GET_SINGLE_CATEGORY_SUCCESS,
  GET_SINGLE_CATEGORY_ERROR,
  } from '../actions'
  
  const categories_reducer = (state, action) => { 
  
    if(action.type === GET_CATEGORIES_BEGIN){
      return {...state,categories_loading:true}
    }
  
    if(action.type === GET_CATEGORIES_SUCCESS){
    
      return {
        ...state,
        products_loading: false,
        categories: action.payload
       
      }
    }
  
    if(action.type === GET_CATEGORIES_ERROR) {
      return { ...state, categories_loading: false, categories_error: true}
    }
  
    if(action.type === GET_SINGLE_CATEGORY_BEGIN){
      return {...state,single_category_loading: true, single_category_error: false,}
    }
  
    if(action.type === GET_SINGLE_CATEGORY_SUCCESS){
      return {...state,single_category_loading: false, single_category:action.payload}
    }
  
    if(action.type === GET_SINGLE_CATEGORY_ERROR){
      return {...state,single_category_loading: false, single_category_error: true,}
    }
  
    // return state
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default categories_reducer