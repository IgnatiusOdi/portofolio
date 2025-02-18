import { Link } from "react-router";
import { projects } from "@assets/projects";

const Projects = () => {
    return (
        <div className="card-template">
            <Link to="/">
                <h1>&lt; Projects</h1>
            </Link>
            <ol className="relative border-s border-gray-700">
                {projects
                    .sort((a, b) => b.date - a.date)
                    .map((p) => (
                        <li className="ms-4" key={p.title}>
                            <div className="timeline" />
                            <div className="muted">{p.year}</div>
                            <div className="grid grid-cols-3 gap-2">
                                {p.list_project
                                    .map((project) => (
                                        <>
                                            <a
                                                href={project.github}
                                                class="block max-w-xs p-6 border rounded-lg bg-gray-800 border-gray-700 hover:bg-gray-700"
                                            >
                                                <div className="title">
                                                    {project.title}
                                                </div>
                                                <div>{project.language}</div>
                                                <div className="muted">
                                                    {project.description}
                                                </div>
                                            </a>
                                        </>
                                    ))
                                    .reverse()}
                            </div>
                        </li>
                    ))}
            </ol>
        </div>
    );
};

export default Projects;
