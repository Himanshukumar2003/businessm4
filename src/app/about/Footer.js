export default function AboutFooter() {
  return (
    <>
      <div className="relative py-10 bg-[url('https://mobirise.com/extensions/businessm4/creative-agency/assets/images/background7-1920x1080.jpg')]">
        <div className="absolute inset-0 opacity-[0.9] right:0 top:0 bg-white"></div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-6 rounded-lg">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-black text-center ">
              Address
            </h3>
            <p className="mt-2 text-center text-sm font-normal">
              1234 Street Name City, AA 99999
            </p>
            <p className="mt-1 text-sm text-center font-normal">
              +1 (0) 000 0000 001
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-black text-center">
              Links
            </h3>
            <ul className="mt-2 text-sm space-y-2 font-normal flex flex-col justify-center items-center">
              <li>
                <a href="#" className="hover:underline">
                  Creative HTML Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1 ">
            <h3 className="text-lg font-semibold text-black text-center">
              Links
            </h3>
            <ul className="mt-2 text-sm space-y-2 font-normal flex flex-col justify-center items-center">
              <li>
                <a href="#" className="hover:underline">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Achievements
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Clients
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
