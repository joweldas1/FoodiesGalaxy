import React from "react";
import { Link } from "react-router-dom";

const SingleCustomerDataShow = ({ data , idx}) => {
    const {foodName,prices,quantity,startDate,status,_id} = data
  console.log(_id);
  return (
    <tr className="text-base">
    <th>{idx+1}</th>
    <td>{foodName}</td>
    <td>{new Date(startDate).toLocaleString()}</td>
    <td>{prices}</td>
    <td>{quantity}</td>
    <td>{status}</td>
    <td>{prices * quantity}</td>
    <td>
        <Link to={`/updateQty/${_id}`}><button  className="text-sm bg-blue-500 p-1 text-white rounded-md"> update purchase Qty </button></Link>
    </td>
  </tr>
  );
};

export default SingleCustomerDataShow;
