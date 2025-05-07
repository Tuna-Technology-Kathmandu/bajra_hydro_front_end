const GoogleMapIframe = () => {
    return (
        <div className="w-full h-[450px] max-md:-mt-10 mb-7 rounded-xl overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.927304977944!2d85.3283508!3d27.6886416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1937c61a52ff%3A0x8e2e90426f7eec63!2sVision%20lumbini%20urja%20company!5e0!3m2!1sen!2snp!4v1746165555286!5m2!1sen!2snp"
                height="100%"
                width="100%"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMapIframe;
