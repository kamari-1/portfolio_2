import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_MEDIA } from "./../assets/data";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="max-container my-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col">
          <h1 className="title mb-6">Let's work Together!</h1>
          <p className="paragraph mb-10">
            Feel free to reach out, discuss your project, or just keep in
            contact with me.
          </p>
          <div className="flex flex-row gap-6 mb-5 pb-5">
            {SOCIAL_MEDIA.map((media) => (
              <div className="text-4xl p-0 transition-all hover:text-main-light-grey">
                <a href={media.url}>
                  <FontAwesomeIcon icon={media.icon} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex flex-col gap-4 lg:gap-0 items-start justify-between pt-5"> */}
        {/* <div className="flex flex-row gap-6 mb-5 pb-5">
            {SOCIAL_MEDIA.map((media) => (
              <div className="text-4xl p-0 transition-all hover:text-main-light-grey">
                <a href={media.url}>
                  <FontAwesomeIcon icon={media.icon} />
                </a>
              </div>
            ))}
          </div> */}
        {/* --------------------------------------------------------------------- */}
        <div className=" w-full max-w-[550px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
