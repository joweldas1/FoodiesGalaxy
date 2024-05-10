import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
  const {user,setUser} = UseAuth()
  const {logOut} = UseAuth()

  const userName = user?.displayName;
  const userImage = user?.photoURL;

  const handleLogOut = ()=>{
    logOut()
    .then(() => {
    setUser(null)
    return toast.success("Logout Done")
    })
    .catch((err) => {
      console.log(err);
    });
  }


    const nav = 
    <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/ourService'>Cook Room</NavLink></li>
    <p className='text-center'>User : {userName}</p>
    <li><button onClick={handleLogOut} className="btn">Logout</button></li>
    </>

    return (
        <div className="navbar bg-lime-300 absolute z-20 mx-auto max-w-7xl ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">FoodiesGalaxy</a>
        </div>
        {
              user?
              <>
              <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={userImage} />
              </div>
            </div>
         
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-center rounded-box w-52">
            {nav}
            </ul>

          </div>
        </div>
              </>
              :
              <>
              <button className='btn btn-primary'><Link to="/login">Login</Link></button>
              </>
            }
      </div>
    );
};

export default Navbar;