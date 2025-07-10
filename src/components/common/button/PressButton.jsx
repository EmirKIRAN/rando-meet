
import { FaDice } from "react-icons/fa";

export default function PressButton({ onClick }) {

    return (
        // <button onClick={onClick} className="group relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full 
        //     outline-none border-none cursor-pointer select-none touch-manipulation 
        //     ring-[8px] ring-[rgba(255,90,120,0.4)] transition-all duration-300 ease-in-out">

        //     {/* Arka Plan (gövde) */}
        //     <div className="absolute inset-0 bg-[rgb(150,50,60)] rounded-full"></div>

        //     {/* Ön yüz (gölgeli ve etkileşimli katman) */}
        //     <div className="absolute inset-0 flex items-center justify-center 
        //         text-[rgb(150,50,60)] text-2xl sm:text-3xl md:text-4xl 
        //         bg-gradient-to-t from-[rgba(255,90,120,0.6)] to-[rgb(255,90,120)] 
        //         border border-[rgb(150,50,60)] rounded-full 
        //         shadow-[0_0.5em_1em_-0.2em_rgba(150,50,60,0.5)] 
        //         transform translate-y-[-15%] 
        //         transition-all duration-150 ease-in-out
        //         group-active:translate-y-0 group-active:shadow-none">
        //             <FaBolt className="text-white" />
        //     </div>

        // </button>

        <button onClick={onClick} className="group relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full 
            outline-none border-none cursor-pointer select-none touch-manipulation 
            ring-[6px] ring-[rgba(123,30,30,0.4)] transition-all duration-300 ease-in-out">

            {/* Arka Plan (gövde) */}
            <div className="absolute inset-0 bg-[#7B1E1E] rounded-full"></div>

            {/* Ön yüz (gölgeli ve etkileşimli katman) */}
            <div className="absolute inset-0 flex items-center justify-center 
                text-[#7B1E1E] text-2xl sm:text-3xl md:text-4xl 
                bg-[#992121] 
                border border-[#5C1818] rounded-full 
                shadow-[0_0.3em_0.6em_-0.2em_rgba(60,10,10,0.4)] 
                transform translate-y-[-12%] 
                transition-all duration-150 ease-in-out
                group-active:translate-y-0 group-active:shadow-none">
                <FaDice className="text-[#f0f0f0]" />
            </div>
        </button>
    )

}