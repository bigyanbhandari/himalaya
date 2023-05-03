import React from "react";
import why1 from "../assests/why1.png";
import why2 from "../assests/why2.png";
import why3 from "../assests/why3.png";
import why4 from "../assests/why4.jpg";
import f1 from "../assests/f1.JPG";
import f2 from "../assests/f2.jpg";
import f3 from "../assests/f3.jpeg";
import f4 from "../assests/f4.jpeg";
import f5 from "../assests/f5.JPG";
import f6 from "../assests/f6.jpg";
import f7 from "../assests/f7.jpeg";
import f8 from "../assests/f8.JPG";
import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";

const AboutUs = () => {
  return (
    <div className="m-3.5 p-0.5">
      <div className="flex flex-col justify-center">
        <span className="text-3xl font-bold text-gray-800 p-4 m-4 flex justify-center">
          What is Waldorf Education?
        </span>
        <p className=" text-justify p-4 m-4  ml-9 ">
          Rudolf steiner (1861- 1925), an austrian philosopher developed waldorf
          education. His educational methods provide a more holistic approach to
          a child’s education, balancing their intellectual, emotional and
          physical needs.
          <br />
          Waldorf education encourages equal growth in these areas, allowing
          children to develop into emotionally healthy, well-rounded
          individuals. Waldorf educates the whole child body, mind and spirit-
          through music, arts, handwork, sculpture stories and movement. It
          educates the chills mind, nourishes their soul and meets their spirit
          at developmentally appropriate stages.
          <br />
          <br />
          This innovative curriculum has already proven itself in many different
          countries for over 100 years. Today there are more than 1,100 waldorf
          schools and more than 2000 pre-schools across the world.
          <br />
          “Waldorf education is not a pedagogical system but an art- the art of
          awakening what is actually there within the human being.”
          <br />
          <strong className="mt-2">- Rudolf Steiner</strong>
        </p>
        
        <div className="flex gap-3 border-8 border-indigo-500/75 w-[50%] ml-[350px] rounded-full   ">
          
          <img  src={img1} dir="ltr" className="h-[250px] w-[250px] object-cover border  rounded-s-full  "/>
          <img src={img2} className="h-[250px] w-[250px] object-cover "/>
          <img src={img3} dir="rtl" className="h-[250px] w-[250px] object-cover  rounded-s-full"/>
        </div>
        
        <div>
          <span className="text-3xl font-bold text-gray-800 p-4 m-4 flex justify-center">
            Why Himalaya Waldorf School?
          </span>
          <p className=" text-justify p-4 m-4  flex justify-center gap-2 flex">
            <ul className="list-disc">
              <li>To provide our children with a world- class education</li>
              <li>To impart education according to each student’s needs.</li>
              <li>To prepare well-rounded individuals for the future</li>
              <li>
                To prepare human beings that make positive contributions to
                society
              </li>
              <li>To be part of a healthy society for our nation.</li>
            </ul>
          </p>
          <div className="mt-[120px]">
            <div className="flex justify-center absolute mt-[-100px] ml-[27rem]">
              <img src={why1} className="rounded-full h-[200px] w-[200px]" />
              <img src={why2} className="rounded-full h-[200px] w-[200px]" />
              <img src={why3} className="rounded-full h-[200px] w-[200px]" />
            </div>
            <img
              src={why4}
              className="h-[350px] w-[700px] ml-[390px] rounded-2xl "
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="">
            <span className="text-3xl font-bold text-gray-800 p-4 m-4 flex ">
              VALUES
            </span>
            <ul className="list-disc text-justify p-4 m-4  ml-9  ">
              <li>Respect childhood and each individual</li>
              <li>Imagination to be a human being</li>
              <li>Creative and innovative ways of learning</li>
              <li>Value community and social responsibility</li>
              <li>Interdependence</li>
            </ul>
          </div>
          <div className="w-[60%]">
            <span className="text-3xl font-bold text-gray-800 p-4 m-4 flex justify-center">
              APPROACHES TO LEARNING
            </span>
            <p className="text-justify p-4 m-4">
              Himalaya waldorf school offers a holistic education to our
              children. We want our children to grow into physically,
              emotionally and mentally healthy individuals.
              <br />
              We believe that children need to grow and learn in diverse ways.
              Himalaya Waldorf school focuses equally equally on a children’s
              intellectual, emotional and physical needs. Moreover, we deeply
              believe in educating children in relation to their environment and
              heritage to provide them with a strong sense of identity. By
              addressing the multifaceted needs of our children, we aim to raise
              empowered human beings who are better equipped to give back to
              their families, communities and society. Our curriculum integrates
              the principles of Waldorf education- founded in Europe- with the
              diverse culture and traditions of the Himalayan region to create
              an experience that is unique, meaningful and relevant for our
              children.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[40%] ">
            <span className="text-3xl font-bold text-gray-800 p-4 m-4 ">
              FACILITIES
            </span>
            <p className="text-justify p-4 m-4">
              <strong> Library: </strong>We have a well-stocked library with all
              of the necessary texts and a wide range of books.There is a
              library that meets the needs of each grade.
              <br /> <br />
              <strong>ECA and CCA:</strong> Our school provides holistic
              education, prioritizing both ECA and CCA activities equally. We
              organize athletics, cultural programs, and other activities for
              our students.
              <br /> <br />
              <strong>Transportation :</strong> Transportation for students is
              provided from important pick up points. Cafeteria : Our school's
              cafeteria serves three healthy meals in a clean environment,
              ensuring students have access to healthy food choices.
              <br /> <br />
              <strong>Outside play ground : </strong> Himalaya waldorf Waldorf
              School has a spacious playground where children get all the
              opportunities for developing their goals, motoric, social and
              physical skills.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4 mt-12">
              <img
                src={f1}
                className="h-[200px] w-[200px] object-cover rounded-lg"
              />
              <img
                src={f2}
                className="h-[200px] w-[200px] object-cover rounded-lg"
              />

              <img
                src={f3}
                className="h-[200px] w-[200px] object-cover rounded-lg"
              />
              <img
                src={f4}
                className="h-[200px] w-[200px] object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-4 mt-5">
              <img
                src={f5}
                className="h-[200px] w-[200px] object-cover rounded-lg"
              />

              <img
                src={f6}
                className="h-[200px] w-[200px] object-cover rounded-lg"
              />
              <img
                src={f7}
                className="h-[200px] w-[200px] object-cover rounded-lg"
              />
              <img
                src={f8}
                className="h-[200px] w-[200px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="flex justify-around">
        <div >
        <span className="text-3xl font-bold text-gray-800 p-4 m-4 ">
          FEATURES
        </span> 
        <ul className="list-disc text-justify p-4 m-4   ">
          <li>
            Focus on the holistic (physical, emotional, social, intellectual,
            spiritual) development of children.
          </li>
          <li>Committed and qualified teachers</li>
          <li>Collaboration between family and institution</li>
          <li>Social and athletic training</li>
          <li>Focus on behavioral attitude</li>
          <li>Conducive learning environment</li>
          <li>Relate all learning to the real world</li>
          <li>Focus on conceptual clarity and creativity, not memorization</li>
        </ul>
        </div>
        <div className="w-[400px]">
        <span className="text-3xl font-bold text-gray-800 p-4 m-4 ">
          ASSESSMENT
        </span> 
        <p className="text-justify p-4 m-4">
        We assess our students in a variety of ways.We have a continuous, informal assessment 
system that is used for periodic evaluation and improvement of our children. We evaluate a range of different areas of development such as behavioural, emotional and intellectual aspects of our students.

        </p>
        </div>
        <div className="w-[400px]">
        <span className="text-3xl font-bold text-gray-800 p-4 m-4 ">
         SCHOOL TIME
        </span> 
        <p className="text-justify p-4 m-4">
        We are open from 9.00 AM to 3.30 PM. Additional time will be provided for children if necessary.

        </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
