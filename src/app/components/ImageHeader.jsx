import React from "react"

export default function ImageHeader(props) {
    return (
        <div className="w-full bg-cover bg-center mb-4" style={{ height: '32rem', backgroundImage: `url(${props.banner.src}` }}>
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">{props.headerTitle}</h1>
                </div>
            </div>
        </div>
    );
}
