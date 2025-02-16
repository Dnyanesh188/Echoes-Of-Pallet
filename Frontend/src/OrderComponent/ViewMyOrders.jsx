import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
const ViewMyOrders = () => {
  let user = JSON.parse(sessionStorage.getItem("active-customer"));

  const [orders, setOrders] = useState([]);

  const customer_jwtToken = sessionStorage.getItem("customer-jwtToken");

  useEffect(() => {
    const getAllOrders = async () => {
      const allOrders = await retrieveCart();
      if (allOrders) {
        setOrders(allOrders.orders);
      }
    };

    getAllOrders();
  }, []);

  const retrieveCart = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/order/fetch/user-wise?userId=" + user.id,
      {
        headers: {
          Authorization: "Bearer " + customer_jwtToken, // Replace with your actual JWT token
        },
      }
    );
    console.log(response.data);
    return response.data;
  };

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString(); // Adjust the format as needed

    return formattedDate;
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg shadow-lg"
        style={{
          height: "40rem",
        }}
      >
        <div
          className="card-header custom-bg-text text-center bg-color"
          style={{
            borderRadius: "1em",
            height: "50px",
          }}
        >
          <h2>My Orders</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Product</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Seller</th>
                  <th scope="col">Win Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Order Status</th>
                  <th scope="col">Delivery Person</th>
                  <th scope="col">Delivery Contact</th>
                  <th scope="col">Delivery Time</th>
                  <th scope="col">Order Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  return (
                    <tr>
                      <td>
                        <b>{order.orderId}</b>
                      </td>
                      <td>
                        <img
                          src={
                            "http://localhost:8080/api/product/" +
                            order.product.image1
                          }
                          class="img-fluid"
                          alt="product_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        <b>{order.product.name}</b>
                      </td>
                      <td>
                        <b>{order.product.category.name}</b>
                      </td>
                      <td>
                        <b>{order.product.seller.firstName}</b>
                      </td>
                      <td>
                        <b>{order.productOffer.amount}</b>
                      </td>
                      <td>
                        <b>{order.quantity}</b>
                      </td>
                      <td>
                        <b>{order.status}</b>
                      </td>
                      <td>
                        {(() => {
                          if (order.deliveryPerson) {
                            return <b>{order.deliveryPerson.firstName}</b>;
                          } else {
                            return <b className="text-danger">Pending</b>;
                          }
                        })()}
                      </td>
                      <td>
                        {(() => {
                          if (order.deliveryPerson) {
                            return <b>{order.deliveryPerson.phoneNo}</b>;
                          } else {
                            return <b className="text-danger">Pending</b>;
                          }
                        })()}
                      </td>
                      <td>
                        {(() => {
                          if (order.deliveryDate) {
                            return (
                              <b>
                                {order.deliveryDate + " " + order.deliveryTime}
                              </b>
                            );
                          } else {
                            return <b className="text-danger">Pending</b>;
                          }
                        })()}
                      </td>
                      <td>
                        {(() => {
                          if (order.status) {
                            return <b>{order.status}</b>;
                          } else {
                            return <b className="text-danger">Pending</b>;
                          }
                        })()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMyOrders;
