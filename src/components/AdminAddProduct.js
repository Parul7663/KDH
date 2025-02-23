import React,{useRef} from 'react'
import axios from "axios";
import Header from './Header';
import Footer from './Footer';

export default function AddAdminProduct() {
    const name = useRef(null)
    const price = useRef(null)
    const description = useRef(null)
    const category = useRef(null)
    const rating = useRef(null)
    const imglink = useRef(null)
    const imgpid = useRef(null)
    const seller = useRef(null)
    const stock = useRef(null)

    // const [params,setParams] = useState({})
    
    const formSubmit =(e) =>{ 
      console.log("inside method")
      e.preventDefault()
      let formData = {
        name:name.current.value,
        price:price.current.value,
        description:description.current.value,
        category:category.current.value,
        rating:rating.current.value,
        images:[{ public_id : `${imgpid.current.value}`,url : `${imglink.current.value}` }],
        seller:seller.current.value,
        stock:stock.current.value,
        reviews:'[]'
      }
      //IMAGE SENT AS AN EMPTY ARRAY
      // console.log(formData)
      const response = axios.post('/api/v1/admin/products/new',formData) //2000 is our server
      response.then(res=>{
        console.log(res.data)}).catch(err =>{console.log(err)})
      }
  return (
   
    <div className='bg-rgb(111 114 185) flex justify-center  py-10'>
        <Header />
        <div className='bg-fuchsia-500 flex flex-col   w-5/6 py-10'>
        <br/>
            <form onSubmit={formSubmit} className='flex-col flex'>
              <div className='flex w-6/12 self-center flex-col '>   
                <label className='self-center text-white'>PRODUCT NAME</label>
                <input type ='text' className='rounded-md' ref={name}/>
                <p style ="background-color="></p>
              </div>
            
<br/>
              <div className='flex w-6/12 self-center flex-col'>
                <label className='self-center text-white'>PRODUCT PRICE</label>
                <input type ='text' className='rounded-md' ref={price}/>
              </div>
              <br/>    

              <div className='flex w-6/12 self-center flex-col'>
                <label className='self-center text-white'>PROD-DESCRIPTION</label>
                <textarea rows="10" className='rounded-md' ref={description}/>
                {/* <input type ='textarea' className='rounded-md' ref={price}/> */}
              </div>
              <br/>

              <div className='flex w-6/12 self-center flex-col'>
                <label className='self-center text-white'>PRODUCT CATEGORY</label>
                <input type ='text' className='rounded-md' ref={category}/>
              </div>   
              <br/>

              <div className='flex w-6/12 self-center flex-col'>
                <label className='self-center text-white'>PRODUCT RATING</label>
                <input type ='text' className='rounded-md' ref={rating}/>
              </div>
              <br/>

              <div className='flex w-6/12 self-center flex-col'>
                <label className='self-center text-white'>IMAGE LINK</label>
                <input type ='text' className='rounded-md' ref={imglink}/>
              </div> 
              <br/>

              <div className='flex w-6/12 self-center flex-col'>
                <label className='self-center text-white'>IMAGE PUBLIC ID</label>
                <input type ='text' className='rounded-md' ref={imgpid}/>
              </div> 
              <br/>

              <div className='flex w-6/12 self-center flex-col'>
                <label className='self-center text-white'>PRODUCT SELLER</label>
                <input type ='text' className='rounded-md' ref={seller}/>
              </div> 
              <br/>

              <div className='flex w-6/12 self-center flex-col'>
                <label className='self-center text-white'>PRODUCT STOCK</label>
                <input type ='text' className='rounded-md' ref={stock}/>
              </div>         
              <br/>
                <button type = "submit" className='bg-fuchsia-400 text-white px-10 py-1 rounded-xl w-48 self-center my-5' >ADD PRODUCT</button>
        </form>
        <Footer/>
        </div>
    </div>
  )

  }