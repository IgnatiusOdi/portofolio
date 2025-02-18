import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = () => {
    return (
        <>
            <h1 id="profile">Hello, I'm Ignatius Odi</h1>
            <h2>You can call me Odi</h2>
            <div className="text-justify">
                I am a Fresh Graduate from Institut Sains Terapan dan Teknologi
                Surabaya (ISTTS) with a Bachelor's degree in Information
                Technology
            </div>
            <div className="text-justify">
                I have a strong passion for learning and staying up-to-date with
                the latest technological advancements. Eager to apply
                programming skills to develop innovative solutions that can
                improve everyday life. Adaptable and dedicated to learn in
                dynamic work environments.
            </div>
            <div className="flex justify-center gap-4 m-4">
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
        </>
    );
};

export default Profile;
