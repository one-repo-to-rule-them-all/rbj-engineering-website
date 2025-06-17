import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // This function only runs if validation passes
  const onSubmit = (data, event) => {
    // Let the form submit naturally (default action)
    // We don't prevent default here
    // data contains form values

    // Optionally do any pre-submit processing here

    // No need to do anything else since form will submit to Formspree
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a question, opportunity, or idea to discuss? I'd love to hear from
          you.
        </p>
      </section>

      <form
        onSubmit={handleSubmit(onSubmit)}
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: "Name is required" })}
              className={`w-full border p-3 rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full border p-3 rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            {...register("subject", { required: "Subject is required" })}
            className={`w-full border p-3 rounded-md ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="6"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters",
              },
            })}
            className={`w-full border p-3 rounded-md ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <section className="text-center mt-12">
        <h2 className="text-xl font-semibold mb-2">Prefer to reach out directly?</h2>
        <ul className="space-y-1 text-gray-800">
          <li>
            <strong>Email:</strong> rodolfo@example.com
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/yourusername"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yourusername
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourprofile
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
