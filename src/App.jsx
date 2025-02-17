import Experience from "./components/experience";
import { work_experience } from "./assets/work_experience";
import { organization_experience } from "./assets/organization_experience";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProgrammingLanguage from "./components/programming-language";
import img from "./assets/profile_picture.webp";

const App = () => {
    return (
        <div className="container mx-auto max-w-3xl">
            <h1>Hello</h1>
            <h2>Welcome to my portofolio website</h2>

            <h2>My name is Ignatius Odi</h2>
            <h2>You can call me Odi</h2>
            {/* <img src={img} alt="" /> */}

            <h3>Story about myself and who I am</h3>

            <div className="flex">
                <a href="mailto:ignodi@gmail.com" target="_blank">
                    <MdOutlineEmail size={40} />
                </a>
                <a href="https://github.com/IgnatiusOdi" target="_blank">
                    <FaGithub size={40} />
                </a>
                <a
                    href="https://www.linkedin.com/in/ignatius-odi/"
                    target="_blank"
                >
                    <FaLinkedin size={40} />
                </a>
            </div>

            <Experience title={"Work Experience"} data={work_experience} />

            <h1>Projects</h1>

            <ProgrammingLanguage />

            <Experience
                title={"Organization Experience"}
                data={organization_experience}
            />

            <h1>Languages</h1>
            <ul>
                <li>Indonesian (Native)</li>
                <li>English (Professional working)</li>
                <li>Chinese (Elementary)</li>
            </ul>

            <h1>Now Interested in (not yet started)</h1>
            <ul>
                <li>CI/CD</li>
                <li>GraphQL</li>
                <li>DaVinci Resolve</li>
                <li>Japanese</li>
                <li>Creating Youtube Shorts Content / Clip</li>
		<li>Supabase</li>
		<li>Unit Testing (Jest)</li>
            </ul>
        </div>
    );
};

export default App;
