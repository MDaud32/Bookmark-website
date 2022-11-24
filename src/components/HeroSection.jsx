// import img from '../images/illustration-working.svg';
const HeroSection = () => {
  return (
    <div className="container flex flex-col-reverse p-6 mx-auto lg:flex-row mt-24">
      <div className="flex flex-col space-y-10 mb-44 lg:mt-16 xl:mb-52 lg:w-1/2">
        <h2 className="text-5xl lg:text-6xl font-bold text-center lg:max-w-md lg:text-left">
          More then just shorter links
        </h2>
        <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <div className="mx-auto lg:mx-0">
          <a
            href="#"
            className="bg-[#0fe8e8] py-3 px-7 text-2xl text-white font-bold rounded-full hover:bg-[#1bdbdb]">
            Get Started
          </a>
        </div>
      </div>
      <img
        src={img}
        alt=""
        className="mb-24 mx-auto md:w-[30rem] md:h-[24rem] lg:mb-0"
      />
    </div>
  );
};

export default HeroSection;
