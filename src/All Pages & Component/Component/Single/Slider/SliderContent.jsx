import React from 'react';

const SliderContent = ({img,heading,heading2,title}) => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${img})`}}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content mt-16 text-center text-neutral-content">
          <div className="max-w-2xl  ">
            <h1 className="mb-5 text-5xl lg:text-6xl  font-bold">{heading}</h1>
            {/* <h1 className="mb-5 mt-10  text-3xl lg:text-4xl font-bold">{heading2}</h1> */}
            <p className="mb-5 font-semibold">{title}</p>
            <button className="orangeGlossyBg softGreyText text-lato p-2 font-semibold rounded-lg  shadow-lg bg-opacity-10">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default SliderContent;