import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      className="group block rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-neutral-600 transition"
    >
      <div className="relative h-56">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-medium">{project.title}</h3>
        <p className="text-neutral-400 mt-2">{project.description}</p>
      </div>
    </a>
  );
}
