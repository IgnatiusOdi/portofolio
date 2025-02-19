import { FaJava, FaMicrosoft, FaNodeJs } from "react-icons/fa";
import {
    SiAnsible,
    SiArduino,
    SiAxios,
    SiCanva,
    SiCplusplus,
    SiCss3,
    SiDart,
    SiEspressif,
    SiFigma,
    SiGit,
    SiGnubash,
    SiHtml5,
    SiJavascript,
    SiJsonwebtokens,
    SiKotlin,
    SiMqtt,
    SiPhp,
    SiProteus,
    SiPython,
    SiSelenium,
    SiSpringboot,
    SiTypescript,
    SiVercel,
    SiVim,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export const frontend = [
    {
        name: "HTML",
        icon: <SiHtml5 size={20} />,
        details: [],
    },
    {
        name: "CSS",
        icon: <SiCss3 size={20} />,
        details: [
            "Tailwind CSS",
            "daisyUI",
            "Shadcn",
            "Material UI",
            "Bootstrap",
        ],
    },
    {
        name: "JavaScript / Typescript",
        icon: (
            <>
                <SiJavascript size={20} />
                <SiTypescript size={20} />
            </>
        ),
        details: [
            "React",
            "Next.js",
            "Vue.js",
            "Nuxt",
            "React Native",
            "jQuery",
            "Three.js",
            "WebGL",
        ],
    },
    {
        name: "Spring Boot",
        icon: <SiSpringboot size={20} />,
        details: [],
    },
];

export const backend = [
    {
        name: "Node.js",
        icon: <FaNodeJs size={20} />,
        details: ["Express"],
    },
    {
        name: "PHP",
        icon: <SiPhp size={20} />,
        details: ["Laravel"],
    },
];

export const database = [
    {
        name: "SQL",
        details: ["MySQL", "Microsoft SQL Server", "SQLite", "Oracle"],
    },
    {
        name: "NoSQL",
        details: ["MongoDB", "Firebase"],
    },
];

export const mobile = [
    {
        name: "Dart",
        icon: <SiDart size={20} />,
        details: ["Flutter"],
    },
    {
        name: "Kotlin",
        icon: <SiKotlin size={20} />,
        details: [],
    },
];

export const iot = [
    {
        name: "Proteus",
        icon: <SiProteus size={20} />,
        details: [],
    },
    {
        name: "Arduino",
        icon: <SiArduino size={20} />,
        details: [],
    },
    {
        name: "ESP32",
        icon: <SiEspressif size={20} />,
        details: [],
    },
    {
        name: "MQTT",
        icon: <SiMqtt size={20} />,
        details: ["EMQX"],
    },
    {
        name: "LoRa",
        details: [],
    },
];

export const desktop = [
    {
        name: "Python",
        icon: <SiPython size={20} />,
        details: [],
    },
    {
        name: "Java",
        icon: <FaJava size={20} />,
        details: [],
    },
    {
        name: "C#",
        icon: <TbBrandCSharp size={20} />,
        details: [],
    },
    {
        name: "C++",
        icon: <SiCplusplus size={20} />,
        details: [],
    },
    {
        name: "C",
        details: [],
    },
];

export const webtesting = [
    {
        name: "Selenium",
        icon: <SiSelenium size={20} />,
        details: [],
    },
];

export const linux = [
    {
        name: "Bash / Shell",
        icon: <SiGnubash size={20} />,
        details: [],
    },
    {
        name: "Vim",
        icon: <SiVim size={20} />,
        details: [],
    },
    {
        name: "Ansible",
        icon: <SiAnsible size={20} />,
        details: [],
    },
];

export const other = [
    {
        name: "Git",
        icon: <SiGit size={20} />,
        details: [],
    },
    {
        name: "JWT (JSON Web Token)",
        icon: <SiJsonwebtokens size={20} />,
        details: [],
    },
    {
        name: "Axios",
        icon: <SiAxios size={20} />,
        details: [],
    },
    {
        name: "Word, Excel, Powerpoint, Access",
        icon: <FaMicrosoft size={20} />,
        details: [],
    },
    {
        name: "Canva",
        icon: <SiCanva size={20} />,
        details: [],
    },
    {
        name: "Figma",
        icon: <SiFigma size={20} />,
        details: [],
    },
    {
        name: "Vercel",
        icon: <SiVercel size={20} />,
        details: [],
    },
];
