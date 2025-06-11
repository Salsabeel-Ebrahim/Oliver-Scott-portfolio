import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1749061879472 (1).json";

export default function About() {
  return (
    <>
       <section  className=" Home w-full h-screen bg- flex items-center flex-col justify-center">
<div className=" animation w-50 h-50
 flex justify-start items-center ">
      <Lottie animationData={animationData} loop={true} />
    </div>

<div class="about-container">
  <h2 class="text-2xl font-bold relative inline-block text-white ">
    About Me
    <span class="absolute left-0 -bottom-3 w-24 h-[3px] bg-wheat"></span>
  </h2>
</div>

< div className=" mt-4 
grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl mx-auto px-4 sm:px-6 text-white ">
 <p className="text-lg leading-relaxed  ">
         I'm a web developer specialized in building modern and user-friendly interfaces.
        I enjoy creating applications that solve real problems and provide smooth user experiences.
      </p>

 <p className="text-lg leading-relaxed  ">
        I have experience with React, Tailwind CSS, and Vite, and I'm always improving my skills.
        My goal is to deliver projects with excellent performance and elegant design.
      </p>
      </div>
</section>

    </>
  )
}


