import React from 'react'

const Cross = () => {
    return (
        <svg
            className="h-8 w-8 absolute top-0 left-0 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M6 6L18 18M6 18L18 6L6 18Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

export default Cross;