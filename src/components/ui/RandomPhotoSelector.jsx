import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";

const RandomPhotoSelector = forwardRef(({ files }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [selected, setSelected] = useState(null);
    const intervalRef = useRef(null);

    // Dışarıya tetikleme fonksiyonu ver
    useImperativeHandle(ref, () => ({
        handleToggle,
    }));

    const handleToggle = () => {
        if (files.length === 0) return;

        if (!isRunning) {
            // Başlat
            setIsRunning(true);
            setSelected(null);
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % files.length);
            }, 100); // 100ms = 0.1 saniyede bir değişim
        } else {
            // Durdur
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
            setSelected(files[currentIndex]);
        }
    };

    return (
        <div className="flex flex-col items-center gap-6 mt-10">
            {/* Fotoğraf Gösterim Çerçevesi */}
            <div className="w-24 h-16 sm:w-56 sm:h-56 md:w-[32vh] md:h-[40vh] bg-gray-800 border-3 border-green-700 rounded-xl flex items-center justify-center overflow-hidden shadow-xl">
                {files.length > 0 && (
                    <img
                        src={files[currentIndex]?.url}
                        alt="preview"
                        className="w-full h-full object-cover transition-all duration-200 ease-in-out"
                    />
                )}
            </div>

            {/* Seçilen Kişi */}
            {selected && (
                <div className="text-center mt-4 text-white">
                    <p className="text-3xl font-extrabold">{selected.fullName}</p>
                </div>
            )}
        </div>
    );
});

export default RandomPhotoSelector;