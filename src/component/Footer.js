import React from "react";

const Footer = () => {
  return (
    <section className="bg-greey h-[420px]  px-16 p-[70px]">
      <div className=" flex justify-between ">
        <div>
          <h4 className="text-blackish text-8xl font-custom  ">Bright</h4>
          <p className="text-base text-blackish font-montserrat text-start w-[348px] h-[87px] mt-2">
            BRIGHT, an e-learning platform revolutionizes learning with
            interactive education and gamification, making it easier and more
            entertaining.
          </p>
        </div>
        <div className="text-xl flex justify-between  w-2/5  ">
          <div>
            <h5 className="text-blackish font-montserrat font-semibold">
              Site map
            </h5>
            <div className="opacity-[.800000011920929]">
              <p>Home</p>
              <p>Courses</p>
              <p>Sign up</p>
              <p>Sign in</p>
              <p>Profile</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <h5 className="text-blackish font-montserrat font-semibold ">
              Social media
            </h5>
            <div className="opacity-[.800000011920929]">
              <p>Facebool</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Instagram</p>
            </div>
          </div>

          <div>
            <h5 className="text-blackish font-montserrat font-semibold">
              Product
            </h5>
            <div className="opacity-[.800000011920929]">
              <p>Pricing</p>
              <p>Partnership</p>
              <p>Sponsors</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-blackish font-montserrat font-medium text-base flex justify-between mt-20">
        <p >
          Copyright 2023 “Bright” All rights reserved
        </p>
        <p>Powered by Dark Matter</p>
        <p >
        Terms and conditions
        </p>
        <p >
        Privacy policy
        </p>
      </div>
    </section>
  );
};

export default Footer;
