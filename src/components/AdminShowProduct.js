// http://localhost:3000/show           
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

export default function ShowHero() {
  const [heroData, setHeroData] = useState([])
  const navigate = useNavigate()

  const selectedId = []

  useEffect(() => {
    const getData = async () => {
      await axios.get('/api/v1/products').then(res => {
        console.table(res.data.products)
        setHeroData(res.data.products)
        console.log("hello ji kya hal shal ")
      }).catch(err => { console.log(err) });
    }
    getData()
  }, [])

  const del = async () => {
    const formData = {
      s_id: JSON.stringify(selectedId)
    }
    const result = await axios.delete(`/api/v1/admin/product/${selectedId[0]}`, formData)
    alert('Successfully Deleted')
    navigate('/')
    console.table('hello world' ,result)
  }

  const editbtn = (item) => {
    navigate('/edit', { state: item })
    console.table(item)
  }

  const setId = (e, id) => {
    if (e.target.checked) {
      // console.log("kuch to check hua ")
      selectedId.push(e.target.value)
      console.log("selected id ", selectedId)
    } else {
      const index = selectedId.indexOf(id);
      selectedId.splice(index, 1)
      console.log("selected id ", selectedId)
    }
  }

  return (
    <div className='flex justify-center flex-col '>
      <Header  />
      <div className='bg-fuchsia-700 py-6 px-8 text-white mt-20 mx-28 space-x-24 flex '>
        <p>CHECK</p>
        <p className='ml-10'>PRODUCT NAME</p>
        <p>PRODUCT PRICE</p>
        <p>PRODUCT SELLER</p>
        <p>CREATION DATE</p>
        <p>CATEGORY</p>
        <button onClick={() => del()} className='bg-fuchsia-500 rounded mx-28  px-2'>Delete</button>

      </div>
      {heroData.map((item, index) => {
        return <HeroView item={item} editbtn={editbtn} key={item._id} setId={setId} />
      })}
      <Footer />
    </div>

  )
}
// key={props.item._id}
const HeroView = (props) => {
  return (

    <div className='bg-fuchsia-600 py-2  text-white mx-28 my-1 '>
      <table class="table-fixed"  >

        <tr className='flex flex-row justify-between  px-5'>

          <td className=''>
            <input type='checkbox' value={props.item._id} onChange={(e) => props.setId(e, props.item._id)} /></td>

          <div className=' w-80 text-left mx-1 flex-row pl-20 '>
            <td>{props.item.name}</td>
          </div>

          <div className=' w-24 text-align:left mx-0 '>
            <td className='px-5'>{props.item.price}</td>
          </div>

          <div className=' w-64 text-left ml-24 flex-row '>
            <td className=''>{props.item.seller}</td>
          </div>

          <div className=' w-60 text-left ml-2 flex-row '>
            <td className=''>{props.item.createdAt}</td>
          </div>
          
          <div className=' w-48 text-left ml-0 flex-row '>
            <td className=''>{props.item.category}</td>
          </div>

          <td className=''><button className='bg-fuchsia-400 px-5 rounded-xl ' onClick={() => props.editbtn(props.item)}>edit</button></td>


        </tr>
      </table>
    </div>)
}
