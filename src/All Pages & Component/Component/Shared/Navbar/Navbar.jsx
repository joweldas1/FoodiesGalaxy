import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import debounce from "lodash.debounce"

const Navbar = () => {
    const [show,setShow] = useState(false)
    const {user,setUser} = UseAuth()
    const {logOut} = UseAuth()

    const userName = user?.displayName;
    const userImage = user?.photoURL;
    const userEmail = user?.email;

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
    const handleNav=()=>{
      setShow(true)
      setTimeout(() => {
      setShow(false)    
      }, 3000);
    }
    window.addEventListener("scroll",debounce(()=>{
      
    window.addEventListener("scroll",()=>{
      const nav= document.getElementById('nav')
      if(window.scrollY>50){
        nav.classList.add('hiddenNav')
      }else nav.classList.remove("hiddenNav")
         
    })

    },10))


    const nav = 
    <>
    <li><NavLink to='/myOrder'>My Order</NavLink></li>
    <li><NavLink to='/user-post'>Create Post</NavLink></li>
    <li><NavLink to={`/user-uploaded/${userEmail}`}>My Posts</NavLink></li>
    <li className='lg:hidden'> <NavLink to='/all-items'> All Items </NavLink> </li>
    <li className='lg:hidden'> <NavLink to='/foodTours'> Foodies Tour </NavLink> </li>
    <li><NavLink to='/ourService'>Cook Room</NavLink></li>
    <li><NavLink to='/allOrdered'>Order Collection</NavLink></li>
    <p className='text-center'>User : {userName}</p>
    <li><button onClick={handleLogOut} className="btn">Logout</button></li>
    </>

    const navTwo = <>
    <ul className=' flex  space-x-3 text-[11px] lg:text-base lg:space-x-10 mr-5 z-40 font-bold  '>
      <li><NavLink className="navText " to='/'>Home</NavLink></li>
      <li> <NavLink className="navText" to='/all-items'> All Items </NavLink> </li>
      <li> <NavLink className="navText" to='/foodTours'> Foodies Tour </NavLink> </li>
    </ul>
    </>

    return (

        <div id='nav' className="navbar text-lato  orangeGlossy font-semibold fixed bg-transparent z-30 mx-auto max-w-7xl ">
        <div className="flex-1">
          <h2 className=' text-lg lg:text-3xl  font-lato '>FoodiesGalaxy</h2>
        </div>
        <div className=''>
          {navTwo}
        </div>
        {
              user?
              <>
              <div className="flex-none gap-2">
         
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="" onClick={handleNav} src={userImage} />
              </div>
            </div>
         

         {
          show?<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-center rounded-box w-52">
            {nav}
          </ul>:''
         }
            

          </div>
        </div>
              </>
              :
              <>
              <Link className='text-[13px] font-bold lg:text-base' to="/login">Login</Link>
              </>
            }
      </div>
    );
};

export default Navbar;