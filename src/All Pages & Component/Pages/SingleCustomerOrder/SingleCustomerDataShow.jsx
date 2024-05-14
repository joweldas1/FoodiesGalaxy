import React from "react";
import { Link } from "react-router-dom";

const SingleCustomerDataShow = ({ data , idx}) => {
    const {foodName,prices,quantity,startDate,status,_id} = data
    console.log(status);


  return (
    <tr className="text-lg ">
    <th>{idx+1}</th>
    <td>{foodName}</td>
    <td className="">{new Date(startDate).toLocaleString()}</td>
    <td>{prices}</td>
    <td>{quantity}</td>
    <td>
    <p className={` text-sm p-1 rounded-xl text-center h-7 bg-opacity-80 text-opacity-100
          ${status==="confirmed" && 'text-white bg-blue-800' }
          ${status==="cancel" && 'text-white bg-red-600 backdrop-blur-2xl' }
          ${status==="cooking" && 'text-white  bg-green-600 backdrop-blur-3xl bg-opacity-95 bg-blend-drawer-overlay' }
          ${status==="pending" && 'text-white backdrop-blur-xl bg-violet-600' }
          `}>
          {status}
          </p>
    </td>
    <td>{prices * quantity}</td>
    <td>

      {
        status==="cooking" || status==="cancel" || status==="confirmed" ? 
        <><p className="text-center bg-[rgba(255,165,0)] bg-opacity-75 text-white backdrop-blur-2xl bg-blend-saturation rounded-xl text-sm "> Not possible </p></> 
        :   
        
        <Link to={`/updateQty/${_id}`}><button  className="text-sm bg-blue-500 py-[5px] px-[2px] text-white rounded-md"> update purchase </button></Link>
      }
    </td>
  </tr>
  );
};

export default SingleCustomerDataShow;
