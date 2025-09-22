import React, { useState } from "react";
import { GoUpload } from "react-icons/go";

export default function PhotoUploadPanel({ onUpload }) {
    const [files, setFiles] = useState([]);

    const parseFiles = (fileList) => {
        const parsed = [];

        for (const file of fileList) {
            const fileNameWithoutExt = file.name.split(".")[0];

            const fullName = fileNameWithoutExt
                .split(/[-_.]+/)
                .map(
                    (part) =>
                        part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
                )
                .join(" ");

            parsed.push({
                fullName,
                file,
                url: URL.createObjectURL(file),
            });
        }

        return parsed;
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const parsed = parseFiles(selectedFiles);
        setFiles(parsed);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        const parsed = parseFiles(droppedFiles);
        setFiles(parsed);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="w-full max-w-3xl mx-auto px-4 py-5">
            <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                    Upload Your Photos
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Drag and drop images here, or click to browse files from your device.
                </p>
            </div>

            <label
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="flex flex-col items-center justify-center w-full h-64 px-6 py-8 text-center bg-white dark:bg-gray-800 border-4 border-dashed border-gray-300 dark:border-gray-600 rounded-3xl cursor-pointer hover:border-neutral-400 transition-all duration-300"
            >
                <svg
                    className="w-12 h-12 mb-3 text-gray-400 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16V4m0 0L3 8m4-4l4 4M3 20h18"
                    />
                </svg>
                <p className="mb-1 text-gray-600 dark:text-gray-300 text-lg">
                    <span className="font-semibold">Drop images here</span> or
                </p>
                <p className="text-neutral-400 font-medium">Click to Upload</p>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>

            {files.length > 0 && (
                <div className="mt-6 max-h-[300px] overflow-y-auto pr-1 scroll-thin">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {files.map((file, index) => (
                            <div
                                key={index}
                                className="relative w-full h-32 overflow-hidden rounded-xl shadow-md group cursor-pointer"
                            >
                                <img
                                    src={file.url}
                                    alt={file.fullName}
                                    className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-2 py-1 truncate">
                                    {file.fullName}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex flex-row items-center justify-between gap-4 mt-12">
                <button
                    onClick={() => onUpload(files)}
                    disabled={files.length === 0}
                    className={`w-full px-6 py-2 rounded-lg font-medium tracking-wide transition-all duration-200 shadow-sm 
                        flex items-center justify-center gap-2 
                        text-gray-100 
                        bg-gray-800 
                        hover:bg-green-600/80 
                        active:bg-gray-900 
                        border border-gray-600 
                        hover:border-gray-500 
                        cursor-pointer

                        disabled:bg-gray-700 
                        disabled:border-gray-600 
                        disabled:text-gray-400 
                        disabled:cursor-not-allowed
                    `}
                >
                    <GoUpload className="inline" />
                    Import to System
                </button>
            </div>
        </div>
    );
}
