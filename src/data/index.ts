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

    public static PersonalBrand: () => Brand = () => ({
        urls: Data.PersonalUrls(),
        background: {alt:"Background image portraying an abandoned Orthodox church in Famagusta, Northern Cyprus", imageStyleClass: "background-image-kilise", src: require("../assets/kilise.webp")},
        headshot: { alt: "Deniz Arca's professional Headshot from the year 2017", caption: "Deniz Arca", src: require("../assets/deniz.webp"), title:"Deniz Arca, 2017"},
    });

    private static WorkExperience: () => Detail[] = () => [
        new Detail(
            {text: "Wren Kitchens", definition: "Britain's leading Kitchens designer/manufacturer with an award winning IT department & over 90 stores."},
            "October 2018 - February 2020",
            "Worked as a Junior Developer for Wren's Logistics team, my role mainly included but was not limited to backend systems.",
            "https://www.wrenkitchens.com/",
            { alt: "Official Wren Kitchens Corporate Logo", caption: undefined, src: require("../assets/wrenkitchens.webp"), title: "Wren Kitchens Logo"}
        ),
        new Detail(
            {text: "Mindgeek", definition: "Global innovators in FinTech & Media Content Delivery specializing in the Adult Entertainment Industry."}, 
            "August 2020 - December 2021", 
            "Worked as a Full Stack Developer on several internal & customer facing domains ranging from video & live streaming services to financial technology.",
            "https://www.mindgeek.com/",
            { alt: "Unofficial Mindgeek Logo with a brain drawing on black & white", caption: undefined, src: require("../assets/mgholdings.webp"), title: "Mindgeek Logo (Unofficial)"}
        ),
    ];

    private static EducationHistory: () => Detail[] = () => [
        new Detail(
            {text: "University of Hull", definition: "A public research university in Kingston upon Hull, a city in the East Riding of Yorkshire, England."}, 
            "2014 - 2018", 
            "Bachelor's degree, Computer Software Engineering, First Class with Honours.",
            "https://www.hull.ac.uk/",
            { alt: "Official University Of Hull Logo", caption: undefined, src: require("../assets/uniofhull.webp"), title: "University of Hull Logo"}
        ),
    ];
    
    private static PersonalProjects: () => Detail[] = () => [
        new Detail(
            {text:  "Web Portfolio", definition:"(Create React App) with HTML5 & CSS3 Grid."}, 
            "July 2020", 
            "A simplistic Static Web Portfolio built using ReactJS as a first attempt on learning the framework.",
            "https://github.com/denzii/web-portfolio/",
            { alt: "Official Reactjs Logo", caption: undefined, src: require("../assets/reactlogo.webp"), title: "ReactJS Logo"}
        ),
        new Detail(
            {text: "Auth Server API", definition: ".NET Core 3.1 with Swagger, EFCore (Code First) & Identity Framework."}, 
            "April 2020", 
            "A REST appropriated learning project implementing JWT authentication & authorization with refresh tokens. " +
            "Makes extensive use of custom implemented controller middlewares. " +
            "Includes a Unit Test project & a SDK for consumption. ",
            "https://github.com/denzii/AuthManager",
            { alt: "Unofficial .Net Core Web Api Logo", caption: undefined, src: require("../assets/authserver.webp"), title: ".NET Core Logo (Unofficial)" }
        ),
    ];

    private static RecreationalActivities: () => Detail[] = () => [
        new Detail(
            {text: "Hiking", definition: ""}, 
            "",
            "The best aspect of any hike is spending time with quality people.",
            undefined,
            { alt: "Icon of Three Triangles representing tents for camping", caption:"", src: require("../assets/tents.webp") , title: "Pitched tents icon"}
        ),
        new Detail(
            {text: "Meditation", definition: ""},
            "", 
            "Nothing better than a sound mind.", 
            undefined, 
            { alt: "Icon of Black & White Mandala portraying a flower", caption: undefined, src: require("../assets/mandala.webp"), title: "Mandala Icon"}),
    ];

    private static Resume: () => Detail[] = () =>  [
        new Detail(
            undefined,
            "", 
            "", 
            require('../assets/resume.pdf'), 
            { alt: "Icon of dlack dot enclosed within an almond shape portraying an eye", caption: "Download PDF now!", src: require("../assets/eye.webp"), title: "Eye Icon"})
    ];

    private static PersonalUrls: () => PersonalURLs = () => ({
        linkedin: { url: "https://www.linkedin.com/in/deniz-arca/", icon: FaLinkedin },
        github: { url: "https://www.github.com/denzii/", icon: FaGithub },
        email: {url: "denizarca.info@gmail.com", icon: FaEnvelope }
    });
}
