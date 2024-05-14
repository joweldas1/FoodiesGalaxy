import AOS from "aos";
import "aos/dist/aos.css";


const useAOS=()=>{

  return  AOS.init({
    once: false ,
    disable: "phone",
    duration: 1100,
    delay: 100,
    offset:10, 

    })
}

export default useAOS