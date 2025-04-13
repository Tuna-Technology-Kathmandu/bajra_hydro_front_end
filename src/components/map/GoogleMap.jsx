const GoogleMapIframe = ({ lat = 27.7172, lng = 85.3240 }) => {
    const locationURL = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

    return (
        <div className="w-full h-[450px] rounded-xl overflow-hidden">
            <iframe
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