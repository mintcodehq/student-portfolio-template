import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-neutral-950 py-24 px-6 text-center"
    >
      <h2 className="text-4xl text-white mb-6">
        Let’s work together
      </h2>

      <p className="text-neutral-400 mb-8">
        Have an opportunity or just want to talk?
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="inline-block px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 transition"
      >
        Email Me
      </a>
    </section>
  );
}
