import axios from "axios"
import UseAuth from "./UseAuth"


const axiosUrl = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true
})


const UseAxios = () =>{
    const logOut = UseAuth()
  



    axiosUrl.interceptors.response.use(
        (res)  => res,
        async (err) =>{
            console.log(err);
        if(err.response.status===401 || err.response.status===403){
            try {
                // await logOut()
                console.log("user logout due to handle access");
            } catch (error) {
                console.log(error);
            }
        
        }
        return Promise.reject(err)
   
    })

    return axiosUrl
}

export default UseAxios;