import { Link } from "react-router";
import { organization_experience } from "@assets/organization_experience";
import { work_experience } from "@assets/work_experience";
import Experience from "@components/experience";
import Navbar from "@components/navbar";
import ProgrammingTechnologies from "@components/programming-technologies";
import Profile from "@components/profile";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto max-w-2xl p-8 m-4 rounded-lg shadow-3xl shadow-gray-400 backdrop-brightness-80">
                <Profile />
                <h1 id="projects">
                    <Link to="/projects">Projects &gt;</Link>
                </h1>
                <Experience
                    title={"Work Experience"}
                    data={work_experience}
                    id={"work-experience"}
                />
                <ProgrammingTechnologies id={"programming-technologies"} />
                <Experience
                    title={"Organization Experience"}
                    data={organization_experience}
                    id={"organization-experience"}
                />
                <h1 id="languages">Languages</h1>
                <ul>
                    <li>Indonesian (Native)</li>
                    <li>English (Professional working)</li>
                    <li>Chinese (Elementary)</li>
                </ul>
                <h1 id="interested">Interested In</h1>
                <ul>
                    <li>Supabase</li>
                    <li>GraphQL</li>
                    <li>Unit Testing (Jest)</li>
                    <li>Japanese Language</li>
                    <li>DaVinci Resolve</li>
                    <li>Creating Youtube Shorts Content / Clip</li>
                </ul>
            </div>
        </>
    );
};

export default App;
