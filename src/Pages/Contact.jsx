const Contact = () => {
  return (
    <div>
      <div className="wrapper contact-bg relative bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-bannerGradient -z-10"></div>
        <section className="contain flex-col gap-3 sm:gap-6 justify-center h-80 sm:h-96 items-center">
          <h1 className="banner-heading">Contact Us</h1>
          <p className="text-sm sm:text-lg text-center text-white max-w-4xl font-poppins">
            If you're looking for high-quality painting services for your home
            or business, don't hesitate to get in touch with Promax Painting. We
            offer free estimates for all of our services, including interior and
            exterior painting, commercial painting, and more. Our team of
            skilled and experienced painters is dedicated to providing top-notch
            workmanship and exceptional customer service.
          </p>
        </section>
      </div>

      <div className="wrapper py-8">
        <section className="contain lg:flex-row flex-col gap-8 justify-center items-stretch">
          <iframe
            className="w-full aspect-square sm:aspect-video lg:aspect-auto lg:w-1/2 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d-122.43759999999999!3d37.75769999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1677165497623!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="bg-formBg w-full lg:w-1/2 flex-1 flex flex-col gap-12 items-center p-8 md:p-12 rounded-lg">
            <div className="flex-1 w-full flex flex-col gap-8">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h2 className="input-label">Email</h2>
                <p>sean@promaxpdx.com</p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <h2 className="input-label">Phone Number</h2>
                <p>971-9712-9755</p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <h2 className="input-label">Address</h2>
                <p>Happy valley</p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <h2 className="input-label">Submit the google Form</h2>
                <button className="bg-darkGreen text-white font-medium py-4 px-10 rounded-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://forms.gle/4pcoNPxaAD2eHkyY6', '_blank');
                  }}
                >
                  Google Form
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
