import Detail from "../model/detail";
import Background from "../interface/background";
import ProjectOwner from "../model/projectOwner";
import PersonalURLs from "../interface/personalUrls";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Brand from "../interface/brand";

export default class Data {    
    public static ProjectOwner: () => ProjectOwner = () => new ProjectOwner(
        "Deniz",
        undefined,
        "Arca", 
        1996,
        Data.PersonalUrls(),
        Data.PersonalBackground()
    );
        
    private static PersonalBackground: () => Background = () => ({
        work: Data.WorkExperience(),
        education: Data.EducationHistory(),
        projects: Data.PersonalProjects(),
        hobbies: Data.RecreationalActivities(),
        resume: Data.Resume()
    })

    private static WorkExperience: () => Detail[] = () => [
        new Detail(
            {text: "Wren Kitchens", definition: "Britain's leading Kitchens designer/manufacturer with an award winning IT department & over 90 stores."},
            "October 2018 - February 2020",
            "Worked as a Junior Developer for Wren's Logistics team, my role mainly included but was not limited to backend systems.",
            "https://www.wrenkitchens.com/",
            { alt: "Wren Kitchens Logo", caption: undefined, src: require("../assets/wren.webp")}
        ),
        new Detail(
            {text: "Mindgeek", definition: "Global innovators in FinTech & Media Content Delivery specializing in the Adult Entertainment Industry."}, 
            "August 2020 - December 2021", 
            "Worked as a Full Stack Developer on several internal & customer facing domains ranging from video & live streaming services to financial technology.",
            "https://www.mindgeek.com/",
            { alt: "Mindgeek Logo", caption: undefined, src: require("../assets/mindgeek.webp")}
        ),
    ];

    private static EducationHistory: () => Detail[] = () => [
        new Detail(
            {text: "University of Hull", definition: "A public research university in Kingston upon Hull, a city in the East Riding of Yorkshire, England."}, 
            "2014 - 2018", 
            "Bachelor's degree, Computer Software Engineering, First Class with Honours.",
            "https://www.hull.ac.uk/",
            { alt: "University of Hull Logo", caption: undefined, src: require("../assets/hull3.webp")}
        ),
    ];
    
    private static PersonalProjects: () => Detail[] = () => [
        new Detail(
            {text:  "Web Portfolio", definition:"(Create React App) with HTML5 & CSS3 Grid."}, 
            "July 2020", 
            "A simplistic Static Web Portfolio built using ReactJS as a first attempt on learning the framework.",
            "https://github.com/denzii/web-portfolio/",
            { alt: "ReactJS Logo", caption: undefined, src: require("../assets/logo192.webp")}
        ),
        new Detail(
            {text: "Auth Server API", definition: ".NET Core 3.1 with Swagger, EFCore (Code First) & Identity Framework."}, 
            "April 2020", 
            "A REST appropriated learning project implementing JWT authentication & authorization with refresh tokens. " +
            "Makes extensive use of custom implemented controller middlewares. " +
            "Includes a Unit Test project & a SDK for consumption. ",
            "https://github.com/denzii/AuthManager",
            { alt: ".NET Core Logo", caption: undefined, src: require("../assets/project.webp") }
        ),
    ];

    private static RecreationalActivities: () => Detail[] = () => [
        new Detail(
            {text: "Hiking", definition: ""}, 
            "",
            "The best aspect of any hike is spending time with quality people.",
            undefined,
            { alt: "Icon with pitched tents", caption:"", src: require("../assets/hike2.webp")}
        ),
        new Detail({text: "Meditation", definition: ""},  "", "Nothing better than a sound mind.", undefined, { alt: "Icon with a mandala", caption: undefined, src: require("../assets/mandala.webp")}),
    ];

    private static Resume: () => Detail[] = () =>  [
        new Detail(undefined, "", "", require('../assets/resume.pdf'), { alt: "Icon with an eye", caption: "Download PDF now!", src: require("../assets/eye.webp")})
    ];

    public static PersonalBrand: () => Brand = () => ({
        urls: Data.PersonalUrls(),
        background: {alt:"Background image portraying an abandoned Orthodox church in Famagusta, Northern Cyprus", imageStyleClass: "background-image-kilise", src: require("../assets/kilise.webp")},
        headshot: { alt: "Deniz Arca Professional Headshot", caption: undefined, src: require("../assets/deniz.webp")},
    });

    private static PersonalUrls: () => PersonalURLs = () => ({
        linkedin: { url: "https://www.linkedin.com/in/deniz-arca/", icon: FaLinkedin },
        github: { url: "https://www.github.com/denzii/", icon: FaGithub },
        email: {url: "denizarca.info@gmail.com", icon: FaEnvelope }
    });
}
