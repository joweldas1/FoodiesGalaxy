import React, { useRef, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye ,FaEyeSlash} from "react-icons/fa";
import { Helmet } from 'react-helmet-async';



const Login = () => {
  const [visible,setVisible] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const {login , googleLogin} =UseAuth()
  const [logError,setLogError]=useState(false)



  const from = location.state||'/'


  console.log(logError);

  const handleOnSubmit=e=>{
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;


      login(email , password)
      .then(res=>{
        if(res){
          toast.success("Login Success")
          return navigate(from || '/') 
        }
      })
      .catch(err=>{if(err)setLogError(true)})

  }

  const handleGoogleLogin = () =>{
       googleLogin()
       .then((result) => {
        if(result.user){
          toast.success("Login Success")
          return navigate(from)
        }
        
       }).catch((err) => {
        if(err)setLogError(true)
        console.log(err);
        
       });
  }

    return (
      
        <div className="hero min-h-screen bg-base-200">
          <Helmet><title>FoodiesGalaxy | User login form</title></Helmet>

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            <div>
            <button onClick={handleGoogleLogin} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
            <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
            </svg>
            Sign in with Google
            </button>
            </div>


          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleOnSubmit} className="card-body">


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
               <div className='relative'>
               <input type={visible?"password":"text"} name='password' placeholder="password" className="input input-bordered w-full" required  /> 
           <div onClick={()=>setVisible(!visible)}>
           {
                visible?<FaEyeSlash  className='absolute top-4 right-2'></FaEyeSlash>:
                <FaEye className='absolute top-4 right-2'></FaEye>

               }
           </div>
           {
            logError===true?<> <span className='text-red-600 text-md font-semibold'>Invalid email or password</span> </>: " "
           }
               </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>


              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <h2 className='text-center  py-2'>Dont't Have an account ,Please <Link to='/register' className='text-blue-600 font-bold'> Register</Link> </h2>

            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;