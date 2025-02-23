import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// const nodemailer = require('nodemailer');
var quantity = 1;

const generateBill = () => {
  let data = JSON.parse(localStorage.getItem('user'))

  

  let cartItems = JSON.stringify(localStorage.getItem('cartItems'));
  // let cartItemstemp = JSON.parse(localStorage.getItem('cartItems'));
  // alert(cartItemstemp)
  // alert(JSON.parse(cartItems))
  // let data1= [data];   //string
  // data1.push(JSON.parse(cartItems))
  
  let data1 = {
    "email" : data.email , 
    "password" : data.password,
    "cartItems" : cartItems
  }
  // data.push(cartItems)
  // alert(cartItems) //object
  // alert(JSON.stringify(data1))


  // let cartItems= JSON.parse(localStorage.getItem('cartItems'));

  axios.post('api/v1/generateBill',data1)
  alert("Bill Mail Generated Successfully")
}

export default function Cart() {
  let totalAmt = 0
  const navigate = useNavigate();

  const total = (amt) => {
    totalAmt = totalAmt + amt + 13
    return totalAmt
  }

  let data = JSON.parse(localStorage.getItem('cartItems'))
  let orderDetails = []
  // data.map((item) => {orderDetails.push(item.name, item.price,item.id)})

  const check = () =>{
    console.log(localStorage.getItem('cartItems'))
  }
  const emptyCart = () => {
    alert('Cart is empty')
    localStorage.removeItem('cartItems');
    localStorage.removeItem('cartItemsArray');
    navigate('/')
  }

  const [quantity, setQuantity] = useState(1)

  if (quantity < 1) {
    setQuantity(1)
  }
  else if (quantity > 10) {
    alert('MAXIMUM QUANTITY REACHED')
    setQuantity(10)
  }

  // const setQuantity = (operation) =>{
  //   if(operation.type === 'increment'){
  //     quantity = quantity+1
  //   }
  //   else if (operation.type === 'decrement'){
  //     quantity = quantity-1
  //   }
  //   return quantity
  // }

  const currentOrder = {}
  const order = () => {
    console.log(orderDetails)
  }


  // const displayQuantity = () =>{
  //   return quantity
  // }
  return (
    <div><>
      <Header />
      <main id="main">
        <section className="breadcrumbs">
        </section>
        <div className="px-4 px-lg-0">
          {/* For demo purpose */}
          <div className="container text-white py-5 text-center">
            <h1 className="display-4">CART</h1>
            <p />
            {check()}
          </div>
          {/* End */}
          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                  {/* Shopping cart table */}
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">Product</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Price</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Quantity</div>
                          </th>

                        </tr>
                      </thead>
                      <tbody>
                        {data.map(product => (

                          <tr>

                            <th scope="row" className="border-0">
                              <div className="p-2">
                                <img
                                  src={product.images[0].url}
                                  width={70}
                                  className="img-fluid rounded shadow-sm"
                                />
                                <div className="ml-3 d-inline-block align-middle">
                                  <h5 className="mb-0">
                                    {" "}
                                    <a
                                      href="#"
                                      className="text-dark d-inline-block align-middle"
                                    >
                                      {product.name}
                                    </a>
                                  </h5>
                                  <span className="text-muted font-weight-normal font-italic d-block">
                                    Category: {product.category}
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td className="border-0 align-middle" onChange={total(product.price * quantity)}>
                              <strong>₹{product.price * quantity}</strong>

                            </td>
                            <td className="border-0 align-middle">
                              <strong>


                                <button type="buton" class="btn btn-outline-dark" onClick={() => setQuantity(quantity - 1)}> - </button>
                                &nbsp;&nbsp;{quantity}&nbsp;&nbsp;
                                <button type="buton" class="btn btn-outline-dark" onClick={() => setQuantity(quantity + 1)}> + </button>

                                {/* <button type="buton" class="btn btn-outline-dark" onClick={() => setQuantity("increment")}> - </button>
                                &nbsp;&nbsp;{quantity}&nbsp;&nbsp;
                                <button type="buton" class="btn btn-outline-dark" onClick={() => setQuantity("decrement")}> + </button>❌ */}

                                {/* <button type="buton" class="btn btn-outline-dark" onClick={quantity += 1} onChange={() => displayQuantity}>- </button>
                                &nbsp;&nbsp;{quantity}&nbsp;&nbsp;
                                <button type="buton" class="btn btn-outline-dark" onClick={quantity -= 1}> + </button> ❌ */}

                              </strong>
                            </td>
                            <td className="border-0 align-middle">
                              {/* <i className="fa fa-trash" onClick={del(product._id)} /> */}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* End */}
                  <div className="py-4 flex justify-center ">
                    <button type="button" class="btn btn-dark rounded-full pl-48 pr-48 bg-slate-700" onClick={() => emptyCart()}>EMPTY CART</button>
                  </div>
                </div>
              </div>
              <div className="row py-5 p-4 bg-white rounded shadow-sm">
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Coupon code
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      If you have a coupon code, please enter it in the box below
                    </p>
                    <div className="input-group mb-4 border rounded-pill p-2">
                      <input
                        type="text"
                        placeholder="Apply coupon"
                        aria-describedby="button-addon3"
                        className="form-control border-0"
                      />
                      <div className="input-group-append border-0">
                        <button
                          id="button-addon3"
                          type="button"
                          className="btn btn-dark px-4 rounded-pill bg-slate-700"

                        >
                          <i className="fa fa-gift mr-2" />
                          Apply coupon
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Instructions for seller
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      If you have some information for the seller you can leave them
                      in the box below
                    </p>
                    <textarea
                      name=""
                      cols={30}
                      rows={5}
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Order summary{" "}
                  </div>

                  <div className="p-4">
                    <p className="font-italic mb-4">
                      Shipping and additional costs are calculated based on values
                      you have entered.
                    </p>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Order Subtotal </strong>
                        <strong>₹{totalAmt}</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">
                          Shipping and handling
                        </strong>
                        <strong>₹10.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Tax</strong>
                        <strong>₹3.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Total</strong>
                        <h5 className="font-weight-bold">₹{totalAmt + 13}</h5>
                      </li>
                    </ul>
                    {/* <a
                      href="#"
                      className="btn btn-dark rounded-pill py-2 btn-block"
                    >
                      Procceed to checkout
                    </a> */}
                    <div className="py-4 flex justify-center ">
                      {/* <button type="button" class="btn btn-dark rounded-full pl-48 pr-48" onClick={()=>order()} > Proceed to checkout</button> */}
                    </div>
                    <div className="py-4 flex justify-center ">
                      <button type="button" class="btn btn-dark bg-slate-700 rounded-full pl-48 pr-48" onClick={() => generateBill()}>Generate Bill</button>
                      {/* <button type="button" class="btn btn-dark"  onClick={()=> emptyCart()}>Order Now</button> */}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </main>


      <div className='flex justify-center' >
        <a
          href="#"
          className="back-to-top d-flex align-items-middle justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
        <ol className="border-l border-gray-300">
          <li>
            <div className="flex flex-start items-center pt-3">
              <div className="bg-white w-2 h-2 rounded-full -ml-1 mr-3" />
              <p className="text-white text-sm">1st</p>
            </div>
            <div className="mt-0.5 ml-4 mb-6">
              <h4 className="text-white font-semibold text-xl mb-1.5">
                Order
              </h4>
              <p className="text-white mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas
                placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-start items-center pt-2">
              <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3" />
              <p className="text-white text-sm">2nd</p>
            </div>
            <div className="mt-0.5 ml-4 mb-6">
              <h4 className="text-white font-semibold text-xl mb-1.5">
                Pay
              </h4>
              <p className="text-white mb-3">
                Libero expedita explicabo eius fugiat quia aspernatur autem laudantium
                error architecto recusandae natus sapiente sit nam eaque, consectetur
                porro molestiae ipsam an deleniti.
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-start items-center pt-2">
              <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3" />
              <p className="text-white text-sm">3rd</p>
            </div>
            <div className="mt-0.5 ml-4 pb-5">
              <h4 className="text-white font-semibold text-xl mb-1.5">
                Recieve
              </h4>
              <p className="text-white mb-3">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus
                libero sit doloremque, laborum molestias rerum pariatur quam ipsam
                necessitatibus incidunt, explicabo.
              </p>
            </div>
          </li>
        </ol>
      </div>
      <Footer />
    </>
    </div>
  )
}
