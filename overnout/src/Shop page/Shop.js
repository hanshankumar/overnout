import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Modal, Button, Form } from 'react-bootstrap';

import Bat from '../images/bat.jpg'
import Ball from '../images/ball.jpg'
import Gloves from '../images/gloves.webp'
import Helmet from '../images/helmet.jpg'
import Pads from '../images/pads.jpg'
import Shoes from '../images/shoes.jpg'
import J1 from '../images/jersey1.avif'
import J2 from '../images/jersey2.webp'
import J3 from '../images/jersey3.webp'

const Shop = () => {
  const [products] = useState([
    { id: 1, name: 'Bat', brand: 'WillCraft', price: 150, image: Bat },
    { id: 2, name: 'Ball', brand: 'Etsy', price: 50, image: Ball },
    { id: 3, name: 'Batting Gloves', brand: 'Whitedot', price: 250, image: Gloves },
    { id: 4, name: 'Helmet', brand: 'SportsWing', price: 180, image: Helmet },
    { id: 5, name: 'Pads', brand: 'Whitedot', price: 270, image: Pads },
    { id: 6, name: 'Shoes', brand: 'Adidas', price: 100, image:Shoes },
  ]);

  const [jerseys] = useState([
    { id: 7, name: 'Indian Jersey', brand: 'Adidas', price: 175, image: J1 },
    { id: 8, name: 'England Jersey', brand: 'Bat Ball Wicket', price: 150, image: J2 },
    { id: 9, name: 'South African Jersey', brand: 'SportsQVest', price: 165, image: J3 },
  ]);

  const [cart, setCart] = useState([]);
  const [showJerseys, setShowJerseys] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    address: '',
    contact: '',
    deliveryDate: '',
  });
  const [paymentMethod, setPaymentMethod] = useState(null);

  const [selectedSize, setSelectedSize] = useState({});

  const handleSizeChange = (e, id) => {
    setSelectedSize({ ...selectedSize, [id]: e.target.value });
  };

  const addToCart = (product, size) => {
    setCart([...cart, { ...product, size: size, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const toggleView = () => {
    setShowJerseys(!showJerseys);
  };

  const handleBuy = () => {
    if (cart.length === 0) {
      window.alert('Please select an item to buy.');
    } else {
      setShowBuyModal(true);
    }
  };

  const handleProceedToPay = () => {
    setShowBuyModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
    if (method === 'gpay') {
      window.alert('Opening GPay...');
      setCart([]);
      setShowPaymentModal(false);
    }
  };

  const handleCashOnDelivery = () => {
    window.alert('Cash on Delivery selected. Thank you for your purchase!');
    setCart([]);
    setShowPaymentModal(false);
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Our Products</h1>

      <div className="d-flex justify-content-between mb-3">
        <h2>{showJerseys ? 'Jerseys' : 'Equipment'}</h2>
        <button className="btn btn-primary" onClick={toggleView}>
          {showJerseys ? 'Show Equipment' : 'Show Jerseys'}
        </button>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {!showJerseys ? (
              products.map((product) => (
                <div key={product.id} className="col">
                  <div
                    className="card h-100"
                    style={{
                      backgroundColor: '#3A6D8C',
                      color: 'white',
                      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                      transition: '0.3s',
                    }}
                  >
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">Brand : {product.brand}</p>
                      <p className="card-text">₹{product.price}</p>
                      <button onClick={() => addToCart(product)} className="btn btn-success">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              jerseys.map((jersey) => (
                <div key={jersey.id} className="col">
                  <div
                    className="card h-100"
                    style={{
                      backgroundColor: '#3A6D8C',
                      color: 'white',
                      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                      transition: '0.3s',
                    }}
                  >
                    <img
                      src={jersey.image}
                      className="card-img-top"
                      alt={jersey.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{jersey.name}</h5>
                      <p className="card-text">Brand : {jersey.brand}</p>
                      <p className="card-text">₹{jersey.price}</p>

                      <Form.Group controlId={`size-${jersey.id}`}>
                        <Form.Label>Select Size</Form.Label>
                        <Form.Control 
                          as="select" 
                          value={selectedSize[jersey.id] || ''} 
                          onChange={(e) => handleSizeChange(e, jersey.id)}
                        >
                          <option value="">Select size</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </Form.Control>
                      </Form.Group>

                      <button
                        onClick={() => addToCart(jersey, selectedSize[jersey.id])}
                        className="btn btn-success mt-3"
                        disabled={!selectedSize[jersey.id]} 
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="col-md-4">
          <div className="card" style={{ border: '2px solid black', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <div className="card-header">
              <h5 className="mb-0"><i className="bi bi-cart me-2"></i>Cart ({cart.length})</h5>
            </div>
            <ul className="list-group list-group-flush">
              {cart.map((item) => (
                <li key={item.cartId} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name} - ₹{item.price} {item.size ? `(Size: ${item.size})` : ''}
                  <button onClick={() => removeFromCart(item.cartId)} className="btn btn-danger btn-sm">Remove</button>
                </li>
              ))}
            </ul>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <strong>Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}</strong>
              <button className="btn btn-primary" onClick={handleBuy}>Buy</button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showBuyModal} onHide={() => setShowBuyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Billing Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="name" value={billingDetails.name} onChange={handleBillingChange} />
              </Form.Group>
  
              <Form.Group controlId="address" className="mt-3">
                <Form.Label>Billing Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" name="address" value={billingDetails.address} onChange={handleBillingChange} />
              </Form.Group>
  
              <Form.Group controlId="contact" className="mt-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your contact number" name="contact" value={billingDetails.contact} onChange={handleBillingChange} />
              </Form.Group>
  
              <Form.Group controlId="deliveryDate" className="mt-3">
                <Form.Label>Desired Delivery Date</Form.Label>
                <Form.Control type="date" name="deliveryDate" value={billingDetails.deliveryDate} onChange={handleBillingChange} />
              </Form.Group>
  
              <hr />
              <h5>Selected Items:</h5>
              <ul className="list-group">
                {cart.map(item => (
                  <li key={item.cartId} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.name} - ${item.price} {item.size ? `(Size: ${item.size})` : ''}
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-right">
                <strong>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</strong>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowBuyModal(false)}>Close</Button>
            <Button variant="primary" onClick={handleProceedToPay}>Proceed to Pay</Button>
          </Modal.Footer>
        </Modal>
  
        {/* Payment Modal */}
        <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Select Payment Method</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-around">
              <Button variant="outline-primary" onClick={() => handlePaymentMethod('gpay')}>GPay</Button>
              <Button variant="outline-secondary" onClick={() => handlePaymentMethod('cod')}>Cash on Delivery</Button>
            </div>
            {paymentMethod === 'cod' && (
              <div className="mt-3 text-center">
                <Button variant="success" onClick={handleCashOnDelivery}>Pay (Cash on Delivery)</Button>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowPaymentModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
  
  export default Shop;
  