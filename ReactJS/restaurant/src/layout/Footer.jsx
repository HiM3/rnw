import React from 'react'
// import '../pages/whole.css'
import burgerImage from '../image/—Pngtree—3d double smash burger_17419161 1.png';
const Footer = () => {
  return (
    <>
    <footer className="border mt-5 bg-black text-white">
      <div className="d-flex justify-content-evenly flex-wrap py-4">
        <div>
          <h3>Our Menu</h3>
          <ul className="list-unstyled">
            <li>Salade de Chèvre Chaud</li>
            <li>Gratin Dauphinois</li>
            <li>Mousse au Chocolat</li>
            <li>Fruits au Sirop</li>
          </ul>
        </div>

        <div>
          <h3>Full Links</h3>
          <ul className="list-unstyled">
            <li>About Us</li>
            <li>Restaurant</li>
            <li>Our Chefs</li>
            <li>Testimonials</li>
            <li>Blogs</li>
            <li>FAQ's</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3>Special Offer</h3>
          <ul className="list-unstyled">
            <li>
              <a href="./mypro4.html" className="text-warning text-decoration-none">
                Special Combo Offer
              </a>
            </li>
            <li>
              <a href="www.google.com" className="text-warning text-decoration-none">Special Fit Meal</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Follow Us</h3>
          <ul className="list-unstyled d-flex gap-3 fs-4">
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-linkedin"></i></li>
            <li><i className="fa-brands fa-youtube"></i></li>
          </ul>
        </div>

        <div>
          <img src={burgerImage} alt="Special Offer" className="img-fluid" />
        </div>
      </div>

      <div className="text-center py-3">
        <h3>About</h3>
        <p>
          Green Vally, born out of a passion for health and taste, aims to provide
          customers with a seamless experience by offering healthy, tasty food in a
          friendly ambiance, wonderful service.
        </p>
      </div>
    </footer>
    </>

  )
}

export default Footer