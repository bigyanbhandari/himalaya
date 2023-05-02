import React from "react";
import school2 from "../assests/school2.jpg";
import school3 from "../assests/school3.jpg";
import school1 from "../assests/school1.jpg";
import goal from "../assests/goal.jpg";
import mission from "../assests/mission.JPG";
const Home = () => {
  return (
    <div className="m-3.5 p-0.5">
      <div>
        <img src={school2} className="h-[450px] w-full object-cover" />
      </div>
      <div className="text-justify">
        <span className="text-3xl font-bold text-gray-800 flex justify-center p-4 m-2">
          {" "}
          INTRODUCTION
        </span>
        <p className=" w-[90%] ml-9">
          Himalaya Waldorf School was established in 2018. It began with a group
          of parents who wanted a balance between modernization and spiritual
          life. Their goal was to educate the mind, body and spirit. Parents
          found that the traditional education system was mainly focused on
          gathering information and intellectual analysis and that it lacked a
          focus on self-control and life skills. Though the traditional system
          talks about holistic education, there are a number of gaps in these
          areas and that is why himalaya waldorf school was established. It is a
          school where teachers, guardians, parents and children can learn and
          grow together. It fulfills the needs of our parents and students for
          holistic development, not only in early childhood, but for adolescents
          through grade 12 as well.
          <br />
          <span className="">
            It is a school where we all work together for quality learning and
            holistic education. Education with respect and reverence to the
            children who come to us in this world. It is our privilege to
            accompany these children in their development.
          </span>
        </p>
      </div>
      <div>
        <div className="mt-4 flex gap-7">
          <div className="w-[60%] mt-4">
            <span className="text-3xl font-bold text-gray-800 p-4 m-4">
              MESSAGE FROM THE PRINCIPAL
            </span>
            <p className="text-justify p-4 m-4">
              Himalaya Waldorf School has a unique approach to education that
              focuses on developing well-rounded individuals with skills in
              their head, heart, and hands. They believe in preparing students
              for life rather than just a career, and prioritize ethical and
              happy living over monetary gain. The school's emphasis on
              collaborative learning ensures that everyone involved grows and
              learns together.
              <br />
              <br /> At Himalaya Waldorf School, students learn about diversity,
              honesty, karma, and the importance of individuality. They are
              encouraged to find their own path and understand the value of both
              winning and losing. The school's focus on experimental learning
              and holistic development helps students to become empathetic and
              humble individuals who are ready to face life's challenges with
              confidence and without pressure. Thank you !
            </p>
          </div>
          <img src={school3} className="h-[300px] w-[450px] object-cover " />
        </div>
      </div>
      <div className="mt-4 flex gap-7">
        <img
          src={school1}
          className="h-[400px] w-[450px] object-cover   p-4 m-6 "
        />
        <div className="w-[60%] mt-4">
          <span className="text-3xl font-bold text-gray-800 p-4 m-4">
            MESSAGE FROM THE FOUNDER
          </span>
          <p className="text-justify p-4 m-4">
            At Himalaya Waldorf School, creating a safe and comfortable
            environment for children is a top priority. The school is committed
            to helping each child develop their unique potential beyond
            academics. The caretakers work closely with parents and teachers to
            identify strengths and challenges. The goal is to guide each child
            towards reaching their full potential, a task taken seriously at the
            school.
            <br />
            <br />
            In our school we focus on cooperation instead of competition, we
            focus on creativity, critical thinking and no child is called as a
            number but as a true personality.
            <br />
            Visitors of our school share with us that they see open children who
            are really curious to learn, open for conversation and happy to find
            out new things of life. And these are the best compliments that we
            can get!
            <br />
            <br />
            We continuous keep learning and developing new and modern ways to
            approach the children. Everything based on finding balance between
            Head, Heart and Hands: Academic well being, Emotional well being and
            Active learning, in a holistic way. All woven between the beautiful
            festivals we celebrate deeply and enjoy together. So again I like to
            say: Welcome to our school!
          </p>
        </div>
      </div>
       <div className="flex justify-around mt-9">
          <div className="">
            <span className="text-3xl font-bold text-gray-800 p-4 m-4 ">
              MISSION
            </span>
            <p className="text-justify p-4 m-4">
              We believe that addressing the various needs of children is
              crucial for their healthy development. Our goal is to help them
              become physically, emotionally, and mentally healthy individuals,
              by nurturing all aspects of their being from an early age. We
              prioritize holistic development, while also striving for academic
              excellence. By focusing on the best interests of the children, we
              hope to raise empowered individuals who can make positive
              contributions to their families, communities, and society.
            </p>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-800 p-4 m-4 ">
              VISION
            </span>
            <p className="text-justify p-4 m-4">
              We understand that children have varied learning needs, including
              intellectual, emotional, and physical development, and we
              prioritize all these aspects equally. We also strongly believe in
              educating children with respect to their local environment and
              cultural heritage, while instilling in them a strong sense of
              identity.
            </p>
          </div>

          <div>
            <span className="text-3xl font-bold text-gray-800 p-4 m-4 ">
              GOALS
            </span>
            <p className="text-justify p-4 m-4">
              Our school prioritizes a secure, nurturing environment that
              fosters a love of learning and builds resilience. We prioritize
              academic excellence using modern, creative and artistic teaching
              methods. Our approach prepares students for success in a global
              society while maintaining connections to Nepali culture. We
              believe every child in Kathmandu deserves this education,
              regardless of background. We strive for collaboration among
              teachers, parents, and students to create a supportive community.
            </p>
          </div>
        </div>
        <div className="flex">
            <img src={goal} className="h-[400px] w-full object-contain rounded-lg"/>
            <img src={mission} className="h-[400px] w-full object-contain rounded-lg"/>
        </div>
    </div>
  );
};

export default Home;
