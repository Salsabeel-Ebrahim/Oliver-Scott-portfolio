
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
      <footer className="bg-neutral text-neutral-content w-full p-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="text-center  text-white">
            <h2 className="font-bold text-2xl mb-2">Location</h2>
            <p>2215 John Daniel Drive<br/>Clark, MO 65243</p>
          </div>

          <div className="text-center text-white">
            <h2 className="font-bold text-2xl mb-4 ">Around the web</h2>    
            <div className="flex justify-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 p-4 border-white hover:bg-blue-500 hover:border-none cursor-pointer transition-all duration-300">
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-lg" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 p-4 border-white hover:bg-sky-400  hover:border-none  cursor-pointer transition-all duration-300">
                <FontAwesomeIcon icon={faTwitter} className="text-white text-lg" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 p-4 border-white hover:bg-blue-600  hover:border-none  cursor-pointer transition-all duration-300">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-lg" />
              </div>
           
            </div>
          </div>

          <div className="text-center  text-white text-center">
            <h2 className="font-bold text-2xl mb-2">About Freelancer</h2>
            <p className='max-w-60 mx-auto'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route.</p>
          </div>
        </div>
      </footer>

      <div className="w-full py-4 copy-right py-6 ">
        <p className="text-center text-white">Copyright © Your Website 2025</p>
      </div>
    </>
  )
}