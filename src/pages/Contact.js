import React from "react";
import { GoLocation } from "react-icons/go";
import { TbMessageShare } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import reading from "../assests/reading.jpg";

const Contact = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex flex-col">
          <span className="text-5xl font-bold  p-4 m-4 ">Contact Us</span>
          <span className="p-4 m-4 text-xl text-justify text-gray-800">
            Himalaya Waldorf School is here to provide you with more
            information,
            <br />
            answer any inquiry. For any inquiries, please contact to the given
            number below and <br />
            we will endeavor to respond as quickly as possible.
          </span>
        </div>
        <div>
          <img src={reading} className="h-[300px]" />
        </div>
      </div>
      <div>
        <ul className="  p-4 m-4  ml-[800px] text-gray-500">
          <li className="flex items-center gap-4 text-xl  ">
            <GoLocation size={30} />
            Nagarjun, Kathmandu, Nepal
          </li>
          <li className="flex items-center gap-4 text-xl">
            {" "}
            <TbMessageShare size={30} />
            himalayawaldorf@gmail.com
          </li>
          <li className="flex items-center gap-4 text-xl">
            {" "}
            <IoIosCall size={30} />
            9851109795
          </li>
          <li className="flex items-center gap-4 text-xl">
            {" "}
            <IoIosCall size={30} />
            985-1141885
          </li>
        </ul>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.298879495522!2d85.28575217534767!3d27.738925976164545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e1826d298f%3A0x4112951b5e244b94!2sHimalaya%20Waldorf%20School!5e0!3m2!1sen!2snp!4v1683103416749!5m2!1sen!2snp"
          width="900"
          height="450"
          
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="ml-[250px] p-6 "
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
