import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <div> 
      <Navbar />
      <div className="container my-3 py-3" >
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">

        Welcome to Shoppily, where passion meets innovation. Established with a commitment to redefine your shopping experience, we pride ourselves on offering a curated selection of high-quality products. Our journey began with a simple idea: to create a space where customers can discover unique items that blend style, functionality, and affordability.At Shoppily, we believe in the power of exceptional service and are dedicated to ensuring your satisfaction. Our team is driven by a shared enthusiasm for bringing you the latest trends and timeless classics. From fashion-forward apparel to cutting-edge gadgets, every item is handpicked to meet our stringent standards.Explore our diverse range and enjoy a seamless shopping journey with secure transactions and prompt deliveries. Thank you for choosing Shoppily — your go-to destination for a delightful blend of style and substance. Join us on this exciting adventure, and let's redefine shopping together!
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage