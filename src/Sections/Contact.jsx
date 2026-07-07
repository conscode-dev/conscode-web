import contactImg from "../assets/images/contact.svg";


const Contact = () => {
  const contactItems = [
    {
      label: "Lokasi",
      value: "Surabaya, Indonesia",
      icon: "fa-solid fa-location-dot",
    },
    {
      label: "Email",
      value: "conscode2023@gmail.com",
      icon: "fa-regular fa-envelope",
    },
    {
      label: "Phone",
      value: "(+62) 851-8933-9423",
      icon: "fa-solid fa-phone",
    },
  ];

  return (
    <section className="section-shell py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="soft-card p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="space-y-8">
            <div>
              <span className="pill">Kontak</span>
              <h2 className="section-title mt-5 mb-4">
                Hubungi Kami
              </h2>
              <p className="text-[#6F7F8F] md:w-4/5 text-justify md:text-start">
                Diskusikan kebutuhan website Anda dengan tim kami. Kami siap
                membantu mewujudkan website impian Anda.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-[#080B10] font-bold mb-3">Kontak</h3>
                <div className="space-y-4">
                  {contactItems.map((item) => (
                    <div key={item.label} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#EEF5FF] text-[#2F7CF6] rounded-full flex items-center justify-center">
                        <i className={item.icon}></i>
                      </div>
                      <div>
                        <h4 className="text-[#080B10] font-bold">{item.label}</h4>
                        <p className="text-[#6F7F8F]">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block rounded-[1.7rem] border border-[#E7EDF5] bg-[#F9FAFD] p-6">
            <img
              src={contactImg}
              alt="Contact"
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
