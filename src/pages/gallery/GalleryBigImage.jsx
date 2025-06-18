
const GalleryBigImage = ({ img, onClick }) => {
    return (
        <>
            <div className="relative w-full h-full cursor-pointer" onClick={onClick}>
                {img ? (
                    <img
                        src={img}
                        alt="Living Room Interior"
                        loading="lazy"
                        className=" w-full h-full object-cover"
                    />
                ) : (
                    <p className="flex justify-center items-center w-full h-full bg-gray-200 text-gray-600 loading">
                        image coming soon
                    </p>
                )}
                <div className="w-full h-full bg-[#0000004D] absolute opacity-0 inset-0 group-hover:opacity-100 z-10 transition-all duration-500"></div>
            </div>
        </>
    )
}
export default GalleryBigImage;