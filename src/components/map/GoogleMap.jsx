const GoogleMapIframe = () => {
    return (
        <div className="w-full h-[450px] max-md:-mt-10 mb-7 rounded-xl overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7065.882152268673!2d85.328601!3d27.688216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bbe2d2973b%3A0x14f3e6630e80f740!2sButwal%20Power%20Co%20Ltd.!5e0!3m2!1sen!2sus!4v1746694173228!5m2!1sen!2sus"
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
