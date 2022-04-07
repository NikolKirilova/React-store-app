import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useCategoriesContext } from '../context/categories_context'
import { single_category_url as url } from '../utils/constants'
 
import {
  Loading,
  Error,  
  // ListView,
  GridView, 
  // Breadcrumbs 
} from '../components'
import styled from 'styled-components'

const SingleCategoryPage = () => {
  const {id} = useParams();
  const history = useHistory();
  const {
    single_category_loading:loading, 
    single_category_error:error, 
    single_category:category, 
    fetchSingleCategory
  } = useCategoriesContext()

  useEffect(() => {
    fetchSingleCategory(`${url}${id}/product`);
    console.log(category);
// eslint-disable-next-line
  },[id])

  useEffect(() => {
    if(error){
      setTimeout(() => {
        history.push('/')
      },300000)
      console.log(error)
    }// eslint-disable-next-line
  },[error])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  // const {name,price,id:sku,company,images} = product;
  
  return <Wrapper>
 
    <div className="section-center products">
      {/* <Link to="/products" className='btn'>
        back to products
      </Link> */}
      <div className=" ">
        <div className=" ">
        {/* <Breadcrumbs title={name} products/> */}
        
        </div>
         
          
        <div  >

        <GridView products={category} />
        </div>
        </div>

    </div>
  </Wrapper>
}

const Wrapper = styled.main`
.products {
  
  margin: 4rem auto;
}

 
@media (min-width: 768px) {
  .products {
    grid-template-columns: 200px 1fr;
  }
}
`

export default SingleCategoryPage
