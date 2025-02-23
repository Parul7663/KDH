import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-info">
            <h3>Kapoor Di Hatti</h3>
            <p>
              Street No. 143 , Chandni Chown <br />
              Troop New Bazar
              <br />
              <br />
              <strong>Phone:</strong> (011)41532620
              <br />
              <strong>Email:</strong> kapoordihatti@gmail.com
              <br />
            </p>
            <div class="social-links mt-3">
          <a href="#" class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="#" class="facebook"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
          <a href="#" class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="#" class="google-plus"><i class="fa fa-google-plus" aria-hidden="true"></i> </a>
          <a href="#" class="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#">Home</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#">All Products</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <a href="#">Fresh Goods</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />{" "}
              <a href="#">Terms of service</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />{" "}
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>For good stuff</p>
          <form action="" method="post">
            <input type="email" name="email" />
            <input type="submit" defaultValue="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      © Copyright{" "}
      <strong>
        <span>Kapoor Di Hatti</span>
      </strong>
      . All Rights Reserved
    </div>
  </div>
</footer>

    </div>
  )
}
