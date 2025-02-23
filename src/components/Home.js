import React, { useEffect } from 'react'

import Header from './Header'
import Footer from './Footer'
import AbraCaDabra from './AbraCaDabra'
import MainHeader from './MainHeader'


// import {useDispatch,useSelector} from 'react-redux'
// import { getProducts } from '../actions/productActions'
export default function Home() { 
  // const dispatch = useDispatch();

  // const {loading,products,error }= useSelector(state=>state.products)
  // useEffect(()=>{
  //   dispatch(getProducts());
  // }, [dispatch])
  return (
    <div className='container form mt-5'>
        <MainHeader/>
        {/* <AbraCaDabra/> */}
        {/* <Main/> */}
        <Footer/>
    </div>
  )
}
