import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";

const RandomPhotoSelector = forwardRef(({ files }, ref) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [selected, setSelected] = useState(null);
    const timeoutRef = useRef(null);

    const dingSound = new Audio("/sounds/ding.mp3");

    // İstersen varsayılan volume ayarlayabilirsin:
    dingSound.volume = 0.6;

    // Dışarıya tetikleme fonksiyonu ver
    useImperativeHandle(ref, () => ({
        handleStart,
    }));

    const handleStart = () => {
        if (files.length === 0 || isRunning) return;

        const randomSteps = Math.floor(Math.random() * 20) + 30;
        setIsRunning(true);
        setSelected(null);
        runAnimation(randomSteps);
    };

    const runAnimation = (steps) => {

        let i = 0;
        let finalIndex = currentIndex;

        const animate = () => {
            if (i >= steps) {
                setSelected(files[finalIndex]);
                dingSound.play();
                setIsRunning(false);
                return;
            }

            finalIndex = (finalIndex + 1) % files.length;
            setCurrentIndex(finalIndex);

            const delay = 50 + (i * i) * 0.5;
            timeoutRef.current = setTimeout(animate, delay);
            i++;
        };

        animate();
    };

    return (
            <div className="flex flex-col items-center gap-6 mt-10">
            
            {/* Fotoğraf Gösterim Çerçevesi */}
            <div className="w-24 h-24 sm:w-56 sm:h-56 md:w-[40vh] md:h-[40vh] bg-gray-800 border-3 border-green-700 rounded-xl flex items-center justify-center overflow-hidden shadow-xl">
                {files.length > 0 && (
                <img
                    src={files[currentIndex]?.url}
                    alt="preview"
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                />
                )}
            </div>

            {/* Seçilen Kişi */}
            {selected && (
                <div className="text-center mt-4 text-white">
                <p className="text-3xl font-extrabold">
                    {selected.firstName} {selected.lastName}
                </p>
                </div>
            )}

        </div>
    );
});

export default RandomPhotoSelector;
