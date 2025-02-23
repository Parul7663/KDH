import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import Header from './Header';
import Footer from './Footer';

import { useNavigate } from 'react-router-dom';

export default function EditHero() {
  const location = useLocation()
  //location ke state me hamara data aya adminShowPoduct se jo ki hamne navigate se /edit pe bheja tha or yaha uselocation se location variable ke andar lia 
  
  const navigate = useNavigate(); 

  const[_id,setId] = useState(location.state._id)
  const[name,setName]= useState(location.state.name)
  const[price,setPrice]= useState(location.state.price)
  const[description,setDescription]= useState(location.state.description)
  const[category,setCategory]= useState(location.state.category)
  const[ratings,setRating]= useState(location.state.ratings)
  const[imglink,setImgLink]= useState(location.state.images[0].url)
  const[imgpid,setImgPid]= useState(location.state.images[0].public_id)
  const[seller,setSeller] = useState(location.state.seller)
  const[stock,setStock] = useState(location.state.stock)
  const reviews =[]
   
  console.log('1111111111111')
  console.log(location.state)


  

  const formSubmit = async (e) =>{
      e.preventDefault()
       
      // let formData = {
      //   name:name.current.value,
      //   price:price.current.value,
      //   description:description.current.value,
      //   category:category.current.value,
      //   ratings:ratings.current.value,
      //   images:[{ public_id : `${imgpid.current.value}`,url : `${imglink.current.value}` }],
      //   seller:seller.current.value,
      //   stock:stock.current.value,
      //   reviews:'[]'
      // }
      let formData = {
        name:name,
        price:price,
        description:description,
        category:category,
        ratings:ratings,
        images:[{ public_id : `${imgpid}`,url : `${imglink}` }],
        seller:seller,
        stock:stock,
        reviews:'[]'
      }
      
      const response = axios.put(`/api/v1/admin/product/${_id}`,formData) //2000 is our server
      response.then((data)=>{
        console.log("datas",data);
        alert("Product added/updated successfully");
        navigate('/show')
      }).catch((err)=>{console.log("error", err)});
      // alert("status = ",response.message)
    }

   
    
   

  return (
    <div className='bg-rgb(111 114 185) flex justify-center  py-10'>
    <Header />
    <div className='bg-fuchsia-600 flex flex-col   w-5/6 py-10'>
    <br/>
    <form onSubmit={formSubmit} className='flex-col flex'>
          
          <div className='flex w-6/12 self-center flex-col '>   
          <label className='self-center text-white'>PRODUCT NAME</label>
            <input type ='text' className='w-30 rounded-md' value={name}  onChange = {(e)=> setName(e.target.value)}/>
          </div>
          <br/>

          <div className='flex w-6/12 self-center flex-col '> 
          <label className='self-center text-white'>PRODUCT PRICE</label>
            <input type ='text' className='rounded-md' value={price} onChange = {(e)=> setPrice(e.target.value)}/>
          </div>
          <br/>
          
          <div className='flex w-6/12 self-center flex-col '> 
          <label className='self-center text-white'>PROD-DESCRIPTION</label>
            <textarea rows="7" className='rounded-md' value={description} onChange = {(e)=> setDescription(e.target.value)}/>
          </div>
          <br/>

          <div className='flex w-6/12 self-center flex-col '> 
           <label className='self-center text-white'>PRODUCT CATEGORY</label>
            <input type ='text' className='rounded-md' value={category} onChange = {(e)=> setCategory(e.target.value)}/>
          </div>
          <br/>

          <div className='flex w-6/12 self-center flex-col '> 
           <label className='self-center text-white'>PRODUCT RATING</label>
            <input type ='text' className='rounded-md' value={ratings} onChange = {(e)=> setRating(e.target.value)}/>
          </div>
          <br/>

          <div className='flex w-6/12 self-center flex-col '> 
           <label className='self-center text-white'>IMAGE LINK</label>
            <input type ='text' className='rounded-md' value={imglink} onChange = {(e)=> setImgLink(e.target.value)}/>
          </div>
          <br/>

          <div className='flex w-6/12 self-center flex-col '> 
           <label className='self-center text-white'>IMAGE PUBLIC ID</label>
            <input type ='text' className='rounded-md' value={imgpid} onChange = {(e)=> setImgPid(e.target.value)}/>
          </div>
          <br/>

          <div className='flex w-6/12 self-center flex-col '> 
           <label className='self-center text-white'>PRODUCT SELLER</label>
            <input type ='text' className='rounded-md' value={seller} onChange = {(e)=> setSeller(e.target.value)}/>
          </div>
          <br/>

          <div className='flex w-6/12 self-center flex-col '> 
           <label className='self-center text-white'>PRODUCT STOCK</label>
            <input type ='text' className='rounded-md' value={stock} onChange = {(e)=> setStock(e.target.value)}/>
          </div>
          <br/>

<button type = "submit" className='bg-fuchsia-400 text-white px-10 py-1 rounded-xl w-48 self-center my-5'>SUBMIT CHANGES</button>
    </form>
    <Footer/>
    </div>
</div>
  )
}