import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  const submitForm: SubmitHandler<FormFields> = (data) => {
    setLoading(true);
    const templateParams = { ...data };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        reset();
        setLoading(false);
        alert("Thank you for reaching out! I'll get back to you shortly.");
      });

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="mb-5">
        <input
          {...register("name", { required: "Please enter your name." })}
          type="text"
          placeholder="Name"
          className="formInput"
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}
      </div>
      <div className="mb-5">
        <input
          {...register("email", {
            required: "Email is required!",
            // validate: (value) => value.includes("@"),
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          type="email"
          placeholder="example@domain.com"
          className="formInput"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </div>
      <div className="mb-5">
        <input
          {...register("subject", { required: "Please enter subject." })}
          type="text"
          placeholder="Enter your subject"
          className="formInput"
        />
        {errors.subject && (
          <div className="text-red-500">{errors.subject.message}</div>
        )}
      </div>
      <div className="mb-5">
        <textarea
          {...register("message", { required: "Please enter your message." })}
          rows={4}
          placeholder="Type your message"
          className="formInput"
        />
        {errors.message && (
          <div className="text-red-500">{errors.message.message}</div>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="hover:shadow-form rounded-md bg-purple-primary py-3 px-8 text-base font-semibold text-white outline-none"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
