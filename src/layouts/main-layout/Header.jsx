

import { IoHome, IoHelp, IoSettingsOutline } from "react-icons/io5";

export default function Header() {

    return (
        <header className="bg-[#121212] text-white w-full">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-auto md:h-[80px] py-4 md:py-0 gap-y-4 md:gap-y-0">
                <h1 className="text-2xl font-bold">RandoMeet</h1>

                <div className="flex flex-row items-center justify-center gap-x-12">
                    <button className="flex items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 ease-linear cursor-pointer">
                        <IoHome />
                        <p className="text-sm">Home</p>
                    </button>

                    <button className="flex items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 ease-linear cursor-pointer">
                        <IoSettingsOutline />
                        <p className="text-sm">Settings</p>
                    </button>

                    <button className="flex items-center gap-x-1 hover:text-orange-400 transition-colors duration-300 ease-linear cursor-pointer">
                        <IoHelp />
                        <p className="text-sm">Help</p>
                    </button>
                </div>
            </div>
        </header>

    )

}