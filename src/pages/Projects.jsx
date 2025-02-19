import { Link } from "react-router";
import { projects } from "@assets/projects";

const Projects = () => {
    let count = 0;
    projects.forEach((project) => {
        count += project.list_project.length;
    });

    return (
        <div className="container mx-auto max-w-auto p-8 m-8 rounded-lg shadow-3xl shadow-gray-400 backdrop-brightness-80">
            <h1>
                <Link to="/">&lt; Projects</Link>
            </h1>
            <div className="title">Total Code: {count}</div>
            <ol className="relative border-s border-gray-700">
                {projects
                    .sort((a, b) => b.date - a.date)
                    .map((p) => (
                        <li className="m-6" key={p.year}>
                            <div className="timeline" />
                            <div className="title muted mb-2">{p.year}</div>
                            <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
                                {p.list_project
                                    .map((project) => (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="block max-w-auto p-4 border rounded-lg bg-gray-800 border-gray-700 hover:bg-gray-900 no-underline"
                                            key={project.title}
                                        >
                                            <div className="no-underline">
                                                <div className="title">
                                                    {project.title}
                                                </div>
                                                <div>{project.language}</div>
                                                <div className="muted">
                                                    {project.description}
                                                </div>
                                            </div>
                                        </a>
                                    ))
                                    .reverse()}
                            </div>
                        </li>
                    ))
                    .reverse()}
            </ol>
        </div>
    );
};

export default Projects;
