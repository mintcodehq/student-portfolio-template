import Section from "./Section";

export default function Education() {
  return (
    <Section title="Education">
      <div className="space-y-6 max-w-3xl">
        <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <h3 className="font-medium text-lg">
            Bachelor’s Degree in Computer Science
          </h3>
          <p className="text-neutral-400">
            University Name · 2023 – 2027
          </p>
        </div>

        <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <h3 className="font-medium text-lg">
            High School (Science)
          </h3>
          <p className="text-neutral-400">
            School Name · 2021
          </p>
        </div>
      </div>
    </Section>
  );
}
