const GoogleMapIframe = () => {
    return (
        <div className="w-full h-[450px] max-md:-mt-10 rounded-xl overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56498.01476493659!2d85.26952412167967!3d27.74426179999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19919f916a77%3A0x4f8b850c5f5dcf90!2sEnergy%20Venture%20Private%20Limited!5e0!3m2!1sen!2snp!4v1745386583679!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMapIframe;
