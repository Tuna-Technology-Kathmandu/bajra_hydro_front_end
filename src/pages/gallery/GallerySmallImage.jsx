
const GallerySmallImage = ({ img }) => {

    return (
        <div className="h-full text-white rounded-lg overflow-hidden relative">
            {!img ? (
                <p className="flex justify-center items-center w-full h-full text-white bg-gray-800 loading">
                  image coming soon
                </p>
            ) : (
                <img
                    src={img}
                    alt="Bedroom"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-70"
                />
            )}
        </div>
    );
};

export default GallerySmallImage;
