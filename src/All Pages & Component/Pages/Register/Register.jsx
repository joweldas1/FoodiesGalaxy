import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import UseAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FaEye ,FaEyeSlash} from "react-icons/fa";
import { ErrorMessage } from "@hookform/error-message"


const Register = () => {
  const [visible,setVisible] = useState(true) 
    const {createUser,updateUser,setUser} = UseAuth()
    const { register, handleSubmit, setError,watch, formState: { errors } } = useForm({criteriaMode:'all'});

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
        <div className="hero loginContainer min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center ">
            <h1 className="text-5xl whitespace-nowrap font-bold">Register Now</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
                <input type="text" placeholder="Enter Your Name" {...register("name" ,)} name='name' className="input input-bordered" required />
              </div>

            <div className="form-control">
                <input type="text" placeholder="image url" {...register("imgUrl")} name='imgUrl' className="input input-bordered" required />
              </div>


              <div className="form-control">
                <input type="email" placeholder="email" {...register("email")} name='email' className="input input-bordered" required />
              </div>

              <div className='relative'>
               <input type={visible?"password":"text"} {...register('password',
                {
                  required: "This is required.",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                    message: "Contains at least one special character ,"
                  },
                  maxLength: {
                    value: 20,
                    message: "Password can not set more than 20 words"
                  }
                }
               ) } name='password' placeholder="password" className="input input-bordered w-full" required  /> 

<ErrorMessage
        errors={errors}
        name="password"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className='text-red-600' key={type}>{message}</p>
          ))
        }
      />




           <div onClick={()=>setVisible(!visible)}>
           {
                visible?<FaEyeSlash  className='absolute top-4 right-2'></FaEyeSlash>:
                <FaEye className='absolute top-4 right-2'></FaEye>

               }
           </div>
           </div>



              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <h2 className='text-center text-black py-2'>Already Have an account ,Please <Link to='/login' className='text-blue-600 font-bold'> Login</Link> </h2>

            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;