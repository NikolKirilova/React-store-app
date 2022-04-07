import React from 'react'
import styled from 'styled-components'
import Category from './Category'

const CategoryView = ({categories}) => {
  return <Wrapper>
    <div className="categories-container">
      {categories.map((category) => {
        return <Category key={category.id} {...category} />
      })}
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  img {
    height: 310px;
  }

  .categories-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .categories-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .categories-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default CategoryView
