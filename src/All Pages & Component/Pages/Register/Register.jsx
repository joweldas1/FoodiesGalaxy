import React from 'react';
import { useForm } from "react-hook-form";
import UseAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Register = () => {
    const {createUser,updateUser,setUser} = UseAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>{ 
      const userName = data.name
      const email = data.email
      const password = data.password
      const img = data.imgUrl
  
        createUser(email , password)
        .then(res=>{

         if(res.user){
          setUser({...res?.user,displayName:userName,photoURL:img})
          updateUser(userName, img)
          .then(()=>{toast.success("Account Create done")})
          .catch((err)=>console.log(err))
         }
        })
        .catch(err=>console.log(err))

    console.log(data)
    
    };

    console.log(errors);


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
                <input type="text" placeholder="Enter Your Name" {...register("name")} name='name' className="input input-bordered" required />
              </div>

            <div className="form-control">
                <input type="text" placeholder="image url" {...register("imgUrl")} name='imgUrl' className="input input-bordered" required />
              </div>


              <div className="form-control">
                <input type="email" placeholder="email" {...register("email")} name='email' className="input input-bordered" required />
              </div>


              <div className="form-control">
                <input type="password" placeholder="password" {...register("password")} name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>



              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <h2 className='text-center py-2'>Already Have an account ,Please <Link to='/register' className='text-blue-600'> Login</Link> </h2>
          </div>
        </div>
      </div>
    );
};

export default Register;