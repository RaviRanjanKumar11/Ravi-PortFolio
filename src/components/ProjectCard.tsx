import { project } from "../app/types/project";

interface Props {
  project: project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
      <a href={project.detailsLink} className="text-blue-500 underline mt-2 block">View Project</a>
    </div>
  );
}
