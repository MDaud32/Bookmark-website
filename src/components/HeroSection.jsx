import img from '../images/illustration-hero.svg';
const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse p-6 mx-auto lg:flex-row mt-24 lg:mb-0">
      <div className="flex flex-col space-y-8 lg:mt-16 lg:w-1/2 lg:ml-12">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center lg:text-left">
          A Simple Bookmark Manager
        </h2>
        <p className="text-lg lg:text-xl text-center text-gray-400 lg:max-w-md lg:text-left">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-center lg:justify-start mx-auto space-x-4 w-full">
          <a
            href="#"
            className="bg-[#5368DF] py-4 px-3 text-sm text-white font-semibold rounded-md hover:bg-white border-2 border-[#5368DF] hover:text-[#5368DF]">
            Get It On Chrome
          </a>
          <a
            href="#"
            className="bg-[#D1D5DB] py-4 px-3 text-sm text-black font-semibold rounded-md hover:bg-white border-2 border-[#D1D5DB] hover:text-[#626365] shadow-md">
            Get It On FireFox
          </a>
        </div>
      </div>
      <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
        <div className="bg-hero"></div>
        <img
          src={img}
          alt=""
          className="relative z-10 lg:top-16  xl:top-0 overflow-x-visible mx-auto md:w-[30rem] md:h-[24rem] lg:mb-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
