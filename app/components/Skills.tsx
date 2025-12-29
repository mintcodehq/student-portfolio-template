import Section from "./Section";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
];

export default function Skills() {
  return (
    <Section title="Skills">
      <div className="flex flex-wrap gap-3 max-w-3xl">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-sm hover:border-neutral-600 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}
