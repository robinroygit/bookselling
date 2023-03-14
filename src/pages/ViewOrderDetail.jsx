import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/FirebaseContext";

const ViewOrderDetail = () => {
  const params = useParams();
  const firebase = useFirebase();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.getOrders(params.bookId).then((orders) => setOrders(orders.docs));
  }, [firebase,params.bookId]);

  return (
    <div className="container w-50 ">
        <h1>Orders</h1>
      {orders.map((order,index) => {
        const data = order.data();

        return (
          <div key={data.userID} className="mt-3 p-2 w-25 border-dark " style={{border:"1px solid gray"}}> 
            <Button style={{borderRadius:"45%"}} >{index+1}</Button>
            <h5>Order By:{data.displayName}</h5>
            <h5>Qty: {data.qty}</h5>
            <h5>Email : {data.userEmail}</h5>
            <h5>Order Date: {data.time}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default ViewOrderDetail;
