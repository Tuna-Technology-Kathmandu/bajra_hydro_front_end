import { useEffect, useState } from "react";

const locations = [
    { lat: 27.7172, lng: 85.3240 }, // Kathmandu
    { lat: 28.2096, lng: 83.9856 }, // Pokhara
    { lat: 26.6637, lng: 87.2874 }, // Biratnagar
    { lat: 27.6947, lng: 84.4306 }, // Bharatpur
    { lat: 27.6710, lng: 85.4298 }, // Bhaktapur
];

const GoogleMapIframe = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prev) => (prev + 1) % locations.length);
    //     }, 3000); // change every 3 seconds

    //     return () => clearInterval(interval);
    // }, []);

    const { lat, lng } = locations[currentIndex];
    const locationURL = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

    return (
        <div className="w-full h-[450px] rounded-xl overflow-hidden">
            <iframe
                key={`${lat}-${lng}`} // Force re-render on location change
                title="Google Map"
                src={locationURL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default GoogleMapIframe;
