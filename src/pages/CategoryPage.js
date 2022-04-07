import React from "react";
import styled from "styled-components";
import { CategoriesList, PageHero } from "../components";
 

const CategoryPage = () => {
     
    return (
      <main>
        <PageHero title="categories" />
        <Wrapper className="page">
          <div className="section-center products">
          <CategoriesList />
            </div>
            </Wrapper>
            </main>)
}
const Wrapper = styled.div`
  .categories {
  
    margin: 4rem auto;
  }

 
 
  @media (min-width: 768px) {
    .categories {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default CategoryPage;