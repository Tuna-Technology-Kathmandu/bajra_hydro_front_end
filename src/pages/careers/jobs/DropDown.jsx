import React from 'react'

const DropDown = ({ lists, setSelectedField, setShowDrop, setSubmittedSearch }) => {
    return (
        <div className="absolute left-0 mt-1 w-full bg-white border border-[#00000026] rounded-md shadow-lg z-30">
            {lists.map((item, index) => (
                <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                        setSelectedField(item);
                        setShowDrop(false);
                        setSubmittedSearch('')
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default DropDown