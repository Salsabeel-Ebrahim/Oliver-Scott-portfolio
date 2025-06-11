import Lottie from "lottie-react";
import animationData from "../../assets/Animation -contact.json";

export default function Contact() {
  return (
    <>
    <section  className="  Contact w-full h-screen bg- flex items-center flex-col justify-center">
<div className=" animation w-36 h-36 mt-5 flex justify-start items-center ">
      <Lottie animationData={animationData} loop={true} />
    </div>


< div className=" flex flex-col gap-3 about-container ">

<input type="text" placeholder="UserName" className=" w-full pb-2  border-0 border-b border-white border-solid focus:outline-none focus:border-white" />


<input type="text" placeholder="UserAge" className=" w-full pb-2 border-0 border-b border-white border-solid focus:outline-none focus:border-white " />


<input type="text" placeholder="UserEmail" className=" w-full pb-2 border-0 border-b border-white border-solid focus:outline-none focus:border-white " />


<input type="text" placeholder="UserPassword" className=" w-full pb-2 border-0 border-b border-white border-solid focus:outline-none focus:border-white " />

<button className="bg-white w-fit py-1 px-3 rounded-md mx-auto mt-4">Send Message</button>
 </div>
</section>
    </>
  )
}
