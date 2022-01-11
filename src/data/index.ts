import BackgroundDetail from "../model/backgroundDetail";
import PersonalBackground from "../interface/personalBackground";
import ProjectOwner from "../model/projectOwner";
import PersonalURLs from "../interface/personalUrls";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import HeroSectionProps from "../type/heroSectionProps";

export default class Data {    
    public static ProjectOwner: () => ProjectOwner = () => new ProjectOwner(
        "Deniz",
        undefined,
        "Arca", 
        1996,
        Data.PersonalUrls(),
        Data.PersonalBackground()
    );
        
    static PersonalUrls: () => PersonalURLs = () => {
        return {
            linkedin: { url: "https://www.linkedin.com/in/deniz-arca/", icon: FaLinkedin },
            github: { url: "https://www.github.com/denzii/", icon: FaGithub },
            email: {url: "denizarca.info@gmail.com", icon: FaEnvelope }
        } 
    };

    public static HeroSectionProps: () => HeroSectionProps = () => {
        return {
            image: { alt: "Deniz Arca Headshot", src: require("../assets/deniz.webp")},
            container: { backgroundImageClass: "background-image-kilise" },
        };
    }

    private static PersonalBackground: () => PersonalBackground = () => {
        return {
            work: Data.WorkExperience(),
            education: Data.EducationHistory(),
            projects: Data.PersonalProjects(),
            hobbies: Data.RecreationalActivities(),
            resume: Data.Resume()
        }
    }

    private static WorkExperience: () => BackgroundDetail[] = () => [
        new BackgroundDetail(
            "Wren Kitchens",
            "October 2018 - February 2020",
            "Worked as a Junior Developer for Wren's Logistics team, my role mainly included but was not limited to backend systems.",
            "https://www.wrenkitchens.com/",
            { alt: "Wren Kitchens Logo", src: require("../assets/wren.webp")}
        ),
        new BackgroundDetail(
            "Mindgeek", 
            "August 2020 - December 2021", 
            "Worked as a Full Stack Developer on several internal & customer facing domains ranging from video & live streaming services to financial technology.",
            "https://www.mindgeek.com/",
            { alt: "Mindgeek Logo", src: require("../assets/mindgeek.webp")}
        ),
    ];

    private static EducationHistory: () => BackgroundDetail[] = () => [
        new BackgroundDetail(
            "University of Hull", 
            "2014 - 2018", 
            "Bachelor's degree, Computer Software Engineering, First Class with Honours.",
            "https://www.hull.ac.uk/",
            { alt: "University of Hull Logo", src: require("../assets/hull3.webp")}
        ),
    ];
    
    private static PersonalProjects: () => BackgroundDetail[] = () => [
        new BackgroundDetail(
            "Web Portfolio", 
            "July 2020", 
            "A simplistic Static Web Portfolio built using ReactJS as a first attempt on learning the framework.",
            "https://github.com/denzii/web-portfolio/",
            { alt: "ReactJS Logo", src: require("../assets/logo192.webp")}
        ),
        new BackgroundDetail(
            "Auth Server API", 
            "April 2020", 
            "A REST appropriated JSON API project built using .NET Core 3.1." +
            "The aim of this project is to provide Authentication / Authorization services which would be consumed by third party apps." +
            "Includes a Unit Test project & a SDF making it easier to implement JWT Bearer Authentication.",
            "https://github.com/denzii/AuthManager",
            { alt: ".NET Core Logo", src: require("../assets/project.webp") }
        ),
    ];

    private static RecreationalActivities: () => BackgroundDetail[] = () => [
        new BackgroundDetail(
            "Hiking", 
            "",
            "The best aspect of any hike is spending time with quality people.",
            "",
            { alt: "Icon with pitched tents", src: require("../assets/hike2.webp")}
        ),
        new BackgroundDetail("Meditation",  "", "Nothing better than a sound mind.", "", { alt: "Icon with a mandala", src: require("../assets/mandala.webp")}),
    ];

    private static Resume: () => BackgroundDetail[] = () =>  [
        new BackgroundDetail("", "", "", require('../assets/resume.pdf'), { alt: "Icon with pitched tents", src: require("../assets/eye.webp")})
    ];
}
