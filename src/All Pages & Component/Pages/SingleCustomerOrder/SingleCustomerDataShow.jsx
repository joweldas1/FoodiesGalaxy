import React from "react";
import { Link } from "react-router-dom";

const SingleCustomerDataShow = ({ data , idx}) => {
    const {foodName,prices,quantity,startDate,status,_id} = data


  return (
    <tr className="text-base">
    <th>{idx+1}</th>
    <td>{foodName}</td>
    <td>{new Date(startDate).toLocaleString()}</td>
    <td>{prices}</td>
    <td>{quantity}</td>
    <td>
    <p className={` text-xs p-1 rounded-xl text-center h-7 bg-opacity-80 text-opacity-100
          ${status==="confirmed" && 'text-white bg-blue-800' }
          ${status==="cancel" && 'text-white bg-red-600' }
          ${status==="cooking" && 'text-white bg-green-600' }
          `}>
          {status}
          </p>
    </td>
    <td>{prices * quantity}</td>
    <td>
        <Link to={`/updateQty/${_id}`}><button  className="text-sm bg-blue-500 p-1 text-white rounded-md"> update purchase Qty </button></Link>
    </td>
  </tr>
  );
};

export default SingleCustomerDataShow;
