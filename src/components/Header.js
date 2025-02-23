
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function Header() {

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
              <li><Link class="nav-link scrollto" to="/show " >Admin Edit</Link></li>
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
    </div>
  )
}
