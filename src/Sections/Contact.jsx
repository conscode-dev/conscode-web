import contactImg from "../assets/images/contact.svg";


const Contact = () => {
  return (
    <section id="contact" className="section-shell py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="soft-card p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
          <div>
            <span className="pill">Kontak</span>
            <h2 className="section-title mt-5 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-[#a6bbb1] md:w-4/5 text-justify md:text-start">
              Diskusikan kebutuhan website Anda dengan tim kami. Kami siap
              membantu mewujudkan website impian Anda.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#23302c] text-[#8ec5aa] rounded-full flex items-center justify-center">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h3 className="text-[#e8f0ea] font-semibold">Lokasi</h3>
                <p className="text-[#9fb2aa]">Surabaya, Indonesia</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#23302c] text-[#8ec5aa] rounded-full flex items-center justify-center">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-[#e8f0ea] font-semibold">Email</h3>
                <p className="text-[#9fb2aa]">conscode2023@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#23302c] text-[#8ec5aa] rounded-full flex items-center justify-center">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h3 className="text-[#e8f0ea] font-semibold">Phone</h3>
                <p className="text-[#9fb2aa]">(+62) 851-8933-9423</p>
              </div>
            </div>
          </div>
          </div>

          <div className="hidden md:block rounded-2xl border border-[#33423c] bg-[#202925] p-6">
            <img src={contactImg} alt="Contact" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
