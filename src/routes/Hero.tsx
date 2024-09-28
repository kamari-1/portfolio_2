import { SOCIAL_MEDIA } from "../assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroSvg from "../assets/images/heroSvg.svg";

const Hero = () => {
  return (
    <section className="max-container mt-10 relative z-10">
      <div className="max-w-[620px]">
        <div>
          <h2 className="text-[#898688] text-3xl md:text-4xl pb-4">
            Hello, I’m
          </h2>
          <h1 className="big-title pb-2 font-black font-inter">Clement Oboh</h1>
          <h2 className="text-3xl md:text-4xl pb-2 text-purple-primary">
            Web developer
          </h2>
        </div>

        <div className="text-l py-4">
          <p className="paragraph">
            Your friendly and passionate fronted developer on a mission to craft
            immersive and user-centric digital experiences. With a love for
            clean code, pixel-perfect designs, and cutting-edge technologies. I
            love to transform ideas into visually stunning and highly functional
            websites.
          </p>
          <p className="paragraph">
            I love to transform ideas into visually stunning and highly
            functional websites.
          </p>
        </div>

        {/* ------------------------- Gradient ------------------------- */}

        <div className="w-[450px] h-[492px] absolute -top-[110px] -right-[200px] rounded-2xl radial-gradient opacity-30 rotate-12 blur-[100px] z-0"></div>
        <img
          src={heroSvg}
          alt="Image"
          className="absolute top-0 right-0 bg-none hidden xl:flex"
        />

        {/* ------------------------- Socials ------------------------- */}
        <div className="flex flex-row gap-6 mt-10">
          {SOCIAL_MEDIA.map((media) => (
            <div className="text-4xl p-0 transition-all text-main-light-grey hover:text-[#f0fff0]">
              <a href={media.url}>
                <FontAwesomeIcon icon={media.icon} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
