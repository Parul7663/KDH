import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getProducts } from '../actions/productActions'
import AbraCaDabra from './AbraCaDabra';

export default function Main() {
  const dispatch = useDispatch();


  var productList = []
  const addProduct = (data) => {
    localStorage.clear()
    if (productList != null) {
      productList.push(data);
      localStorage.setItem('cartItems', JSON.stringify(productList))
      // localStorage.setItem('cartItemsArray', productList)
    }
  }

  const { loading, products, error } = useSelector(state => state.products)
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const vegnfruits = products.filter(product => product.category === "Vegetables and Fruits");
  const organic = products.filter(product => product.category === "Organic and Gourmet");
  const bakery = products.filter(product => product.category === "Bakery and Biscuits");
  const ard = products.filter(product => product.category === "Atta, Rice & Daal");
  const babycare = products.filter(product => product.category === "Baby Care");
  const cleaning = products.filter(product => product.category === "Cleaning Essentials");
  const dairy = products.filter(product => product.category === "Dairy Bread and Eggs");
  const masala = products.filter(product => product.category === "Masala , Oil and More");
  const sweettooth = products.filter(product => product.category === "Sweet Tooth");
  const juices = products.filter(product => product.category === "Juices");

  return (

    <div>
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex justify-content-between">

          <div class="logo">
            <h1><a href="/">Kapoor Di Hatti</a></h1>

          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="/">Home</a></li>
              {/* <li><a class="nav-link scrollto" href="#FarmFresh">Farm Fresh</a></li>
              <li><a class="nav-link scrollto" href="#Juices">Juices</a></li> */}
              {/* <li><a class="nav-link scrollto" href="#SelfCare">Self-Care</a></li> */}
              {/* <li><a class="nav-link scrolto" href="#team">HouseHold</a></li> */}
              <li><a class="nav-link scrollto" href="/cart">Cart</a></li>
              <li><a class="nav-link scrollto" href="/login">Login</a></li>
              <li><a class="nav-link scrollto" href="/register">Register</a></li>
              {/* <li><a class="nav-link scrollto" href="/adminlogin">Admin</a></li> */}
              <li><a class="nav-link scrollto" href="/adminlogin">Admin Login</a></li>
              <li><Link class="nav-link scrollto" to="/show " >Admin Function</Link></li>
              <li class="dropdown"><a href="#"><span>All Products</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a class="nav-link scrollto" href="#FarmFresh">Vegetables and Fruits</a></li>
                  <li><a class="nav-link scrollto" href="#Juices">Juices</a></li>
                  <li><a class="nav-link scrollto" href="#dairy">Dairy</a></li>
                  <li class="dropdown"><a href="#"><span>Self care</span> <i class="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a class="nav-link scrollto" href="#cleaning">Cleaning Essentials</a></li>
                      <li><a class="nav-link scrollto" href="#sweetTooth">Sweet Tooth</a></li>
                    </ul>
                  </li>
                 
                  <li><a class="nav-link scrollto" href="#SelfCare">Organic and Gourmet</a></li>
                  <li><a class="nav-link scrollto" href="#bakery">Bakery and Biscuits</a></li>
                  <li><a class="nav-link scrollto" href="#ard">Atta, Rice & Daal</a></li>

                </ul>
              </li>
              <li><a class="nav-link scrollto" href="#contact"></a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <AbraCaDabra />
      <main id="main">

        {/* juices */}
        <section id="Juices" className="section-products">
          <div className="container">
            <div className="row justify-content-center text-center"
              data-aos="fade-up">
              <div className="col-md-8 col-lg-6">
                <div className="header">
                  <h3>Featured Product</h3>
                  <h2>FRESH JUICES</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* {products && products.map(product => ( */}
            {juices.map(product => (

              <div key={product._id} className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-1" class="single-product">
                  <div className="part-1">
                    <img className="part-1" src={product.images[0].url} />
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="part-2">
                    <h3 className="product-title">{product.name}</h3>
                    <h4 className="product-old-price">₹79.99</h4>
                    <h4 className="product-price">₹{product.price}</h4>
                    <div className="product-title">ratings : {product.ratings}⭐</div>
                    {/* <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a> */}
                    <button type="button" class="btn btn-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                    {/* <button type="button" class="btn btn-dark" onClick={productList.push(product)}>Add to Cart</button> */}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* vegetables and fruits */}
        <section id="FarmFresh" className="section-products">
          <div className="container">
            <div className="row justify-content-center text-center"
              data-aos="fade-up">
              <div className="col-md-8 col-lg-6">
                <div className="header">
                  <h2>Vegetables And Fruits</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* {products && products.map(product => ( */}
            {vegnfruits.map(product => (

              <div key={product._id} className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-1" class="single-product">
                  <div className="part-1">
                    <img className="part-1" src={product.images[0].url} />
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="part-2">
                    <h3 className="product-title">{product.name}</h3>
                    <h4 className="product-old-price">₹79.99</h4>
                    <h4 className="product-price">₹{product.price}</h4>
                    <div>ratings : {product.ratings}⭐</div>
                    {/* <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a> */}
                    <button type="button" class="btn btn-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* selfcare */}
        <section id="SelfCare" className="section-products">
        {/* <section id="SelfCare" className="section-products"> */}
          <div className="container">
            <div className="row justify-content-center text-center" data-aos="fade-up">
              <div className="col-md-8 col-lg-6">
                <div className="header">
                  <h2>Organic</h2>
                </div>
              </div>
            </div>
            {/* organic */}
            <div className="row">
              {organic.map(product => (
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div id="product-1" className="single-product">
                    <div className="part-1">
                      <img className="part-1" src={product.images[0].url} />
                      <span className="discount">15% off</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="part-2">
                      <h3 className="product-title">{product.name}</h3>
                      <h4 className="product-old-price">₹79.99</h4>
                      <h4 className="product-price">₹{product.price}</h4>
                      <div>ratings : {product.ratings}⭐</div>
                      {/* <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a> */}
                      <button type="button" class="btn btn-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
              <br />
              <br />
              <div id = "bakery" className="header">
                <h2>Bakery and Biscuits</h2>
              </div>
              {bakery.map(product => (
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div id="product-4" className="single-product">
                    <div className="part-1">
                      <img className="part-1" src={product.images[0].url} />
                      <span className="new">new</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="part-2">
                      <h3 className="product-title">{product.name}</h3>
                      <h4 className="product-old-price">₹79.99</h4>
                      <h4 className="product-price">₹{product.price}</h4>
                      <div>ratings : {product.ratings}⭐</div>
                      {/* <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a> */}
                      <button type="button" class="btn btn-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
              <div id = "dairy"className="header">
                <h2>Dairy</h2>
              </div>
              {dairy.map(product => (
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div id="product-4" className="single-product">
                    <div className="part-1">
                      <img className="part-1" src={product.images[0].url} />
                      <span className="new">new</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="part-2">
                      <h3 className="product-title">{product.name}</h3>
                      <h4 className="product-old-price">₹79.99</h4>
                      <h4 className="product-price">₹{product.price}</h4>
                      <div>ratings : {product.ratings}⭐</div>
                      {/* <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a> */}
                      <button type="button" class="btn btn-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="header">
                <h2>Masala and More</h2>
              </div>
              {masala.map(product => (
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div id="product-4" className="single-product">
                    <div className="part-1">
                      <img className="part-1" src={product.images[0].url} />
                      <span className="new">new</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="part-2">
                      <h3 className="product-title">{product.name}</h3>
                      <h4 className="product-old-price">₹79.99</h4>
                      <h4 className="product-price">₹{product.price}</h4>
                      <div>ratings : {product.ratings}⭐</div>
                      {/* <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a> */}
                      <button type="button" class="btn btn-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
              <div id = "sweetTooth" className="header">
                <h2>Sweet Tooth</h2>
              </div>
              {sweettooth.map(product => (
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div id="product-4" className="single-product">
                    <div className="part-1">
                      <img className="part-1" src={product.images[0].url} />
                      <span className="new">new</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="part-2">
                      <h3 className="product-title">{product.name}</h3>
                      <h4 className="product-old-price">₹79.99</h4>
                      <h4 className="product-price">₹{product.price}</h4>
                      <div>ratings : {product.ratings}⭐</div>
                      {/* <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a> */}
                      <button type="button" class="btn btn-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
              <br />
              <div id = "ard" className="header">
                <h2>Atta , Rice and Daal</h2>
              </div>
              {ard.map(product => (
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div id="product-4" className="single-product">
                    <div className="part-1">
                      <img className="part-1" src={product.images[0].url} />
                      <span className="new">new</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="part-2">
                      <h3 className="product-title">{product.name}</h3>
                      <h4 className="product-old-price">₹79.99</h4>
                      <h4 className="product-price">₹{product.price}</h4>
                      <div>ratings : {product.ratings}⭐</div>
                      {/* <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a> */}
                      <button type="button" class="btn btn-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
              <div  id = "cleaning" className="header">
                <h2>Cleaning</h2>
              </div>
              {cleaning.map(product => (
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div id="product-4" className="single-product">
                    <div className="part-1">
                      <img className="part-1" src={product.images[0].url} />
                      <span className="new">new</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="part-2">
                      <h3 className="product-title">{product.name}</h3>
                      <h4 className="product-old-price">₹79.99</h4>
                      <h4 className="product-price">₹{product.price}</h4>
                      <div>ratings : {product.ratings}⭐</div>
                      {/* <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a> */}
                      <button type="button" class="btn btn-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* organic */}


      </main>
    </div>
  )
}
