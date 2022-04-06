import React from 'react'
import styled from 'styled-components'
import { FormStepTwo} from '../components'
// extra imports
 
 
 

const StepTwoCheckout = () => {
  // const {cart} = useCartContext()
  return (<main>
    {/* <PageHero title="checkout" /> */}
    <Wrapper className='page'>
     
      <FormStepTwo/>
       
    </Wrapper>

     </main>)
}
const Wrapper = styled.div`
display:flex;
align-items: center;
justify-content:center;
.empty {
  text-align: center;
}`
export default StepTwoCheckout 
