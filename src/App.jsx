import { useState, useRef } from "react"

import Header from "./layouts/main-layout/Header"
import PressButton from "./components/common/button/PressButton"
import LoadImageModal from "./components/ui/LoadImageModal";
import RandomPhotoSelector from "./components/ui/RandomPhotoSelector";

function App() {

  const [openLoadImageModal, setOpenLoadImageModal] = useState(false);
  const [images, setImages] = useState([]);
  const selectorRef = useRef();

  const handleExternalStart = () => {
    if (selectorRef.current && images.length > 0) {
      selectorRef.current.handleToggle(); // 🔥 dışarıdan başlat!
    } else {
      setOpenLoadImageModal(true); // 🔥 resim yükleme modalını aç
    }
  };

  const handleImageUpload = (uploadedImages) => {
    setImages(uploadedImages);
    setOpenLoadImageModal(false);
  }

  return (
        <div className="bg-[#181818] h-screen overflow-y-auto w-full">
            <Header />
            <main className="w-full">
                <div className="flex flex-col items-center justify-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">

                    { images.length === 0 && (
                      <>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-8">Rando Meet</h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 animate-pulse">Press the button to start a random meeting!</p>
                      </>
                    )}

                    { images.length > 0 && (
                      <div className="my-12">
                        <RandomPhotoSelector files={images} ref={selectorRef} />
                      </div>
                    )}

                    <PressButton onClick={handleExternalStart} />

                </div>

                {/* LoadImageModal component can be used here */}
                { openLoadImageModal && (
                    <LoadImageModal 
                        open={openLoadImageModal}
                        setOpen={setOpenLoadImageModal}
                        onUpload={handleImageUpload}
                      /> 
                    )
                }
            </main>

        </div>
  )
}

export default App
