import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const useAOS = () => {

  
  AOS.init({
    // once: false ,
    disable: "phone",
    duration: 700,
    offset:-100,
    delay: 400,
    easing: "ease-out-back",
  });
  



  return AOS
};

export default useAOS;
