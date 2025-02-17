import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { renderCart } from "../redux/userSlice"; 

const FinalPurchaseForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartProducts } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    dispatch(renderCart());
  }, [dispatch]);

  useEffect(() => {
    const total = cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotalAmount(total);
  }, [cartProducts]);

  if (cartProducts.length === 0) {
    navigate("/cart");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address) {
      alert("Please fill in both your name and address.");
      return;
    }

    const purchaseDetails = {
      name,
      address,
      cartProducts,
      totalAmount,
    };

    const users = JSON.parse(localStorage.getItem("Users")) || [];
    const loggedInUserEmail = sessionStorage.getItem("login_user");
    const userIndex = users.findIndex((user) => user.email === loggedInUserEmail);
    if (userIndex !== -1) {
      users[userIndex].cart = [];
      users[userIndex].purchaseHistory = users[userIndex].purchaseHistory || [];
      users[userIndex].purchaseHistory.push(purchaseDetails);
      localStorage.setItem("Users", JSON.stringify(users));
    }

    navigate("/order-confirmation");
  };

  return (
    <div className="purchase-form-container">
      <h1>Final Purchase Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Delivery Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Enter your delivery address"
          />
        </div>
        
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <tr key={product.index}>
                <td>{product.title}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{(product.price * product.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-amount">
          <strong>Total Amount: </strong>
          <span>{totalAmount.toFixed(2)}</span>
        </div>

        <button type="submit" className="submit-button">Confirm Purchase</button>
      </form>
    </div>
  );
};

export default FinalPurchaseForm;
