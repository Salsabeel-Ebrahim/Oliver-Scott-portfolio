import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";


export default function Home() {
  return (
    <>
    <section  className=" Home w-full h-screen bg- flex items-center flex-col justify-center">

<div className="mt-6 animation w-80 h-80
 flex justify-center items-center ">
      <Lottie animationData={animationData} loop={true} />
    </div>
<h1 className="text-white text-lg mb-4">Hey All!</h1>

<p className="text-white max-w-2xl mx-auto px-4 text-center">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem nemo unde sunt, eum blanditiis facere accusamus placeat officiis vel veritatis sed rerum maxime! Repudiandae porro impedit doloribus a voluptates.
</p>
  </section>
    
    </>
  )
}



