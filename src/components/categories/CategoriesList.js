import React from "react";
import { useCategoriesContext } from "../../context/categories_context";
import CategoryView from "./CategoryView";
 

const CategoriesList = () => {
  const { categories} = useCategoriesContext();
  
   if(categories.length < 1){
     return (
     <h5 style={{textTransform:'none'}}>
       Sorry, no products matched your search...
     </h5>
     )
   }
   
     return <CategoryView categories={categories}/>
   
  
};

export default CategoriesList;