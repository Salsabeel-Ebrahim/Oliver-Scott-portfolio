import { useState } from 'react';
import poert1 from "../../assets/images/poert1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";
import Modal from '../Modal/Modal.jsx';

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <>
      <section className="flex items-center pt-20 sm:pt-10 w-full min-h-screen Home mt-10 pb-9">
        <div className="container protofolio mx-auto px-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 sm:gap-5 lg:gap-3 justify-items-center">
            <img src={poert1} alt="Portfolio 1" className="w-full max-w-xs h-auto rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow" onClick={() => handleImageClick(poert1)} />
            <img src={port2} alt="Portfolio 2" className="w-full max-w-xs h-auto rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow" onClick={() => handleImageClick(port2)} />
            <img src={port3} alt="Portfolio 3" className="w-full max-w-xs h-auto rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow" onClick={() => handleImageClick(port3)} />
            <img src={poert1} alt="Portfolio 4" className="w-full max-w-xs h-auto rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow" onClick={() => handleImageClick(poert1)} />
            <img src={port3} alt="Portfolio 5" className="w-full max-w-xs h-auto rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow" onClick={() => handleImageClick(port3)} />
            <img src={port2} alt="Portfolio 6" className="w-full max-w-xs h-auto rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow" onClick={() => handleImageClick(port2)} />
          </div>
        </div>
      </section>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {selectedImage && <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg" />}
      </Modal>
    </>
  );
}