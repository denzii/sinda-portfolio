import Detail, { TextFormat } from "../model/detail";
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
        project: Data.PersonalProjects(),
        hobby: Data.RecreationalActivities(),
        resume: Data.Resume()
    })

    public static PersonalBrand: () => Brand = () => ({
        urls: Data.PersonalUrls(),
        background: {alt:"Background image portraying an abandoned Orthodox church in Famagusta, Northern Cyprus", imageStyleClass: "background-image-kilise", src: require("../assets/kilise.webp")},
        headshot: { alt: "Deniz Arca's professional Headshot from the year 2017", caption: "Deniz Arca", src: require("../assets/deniz.webp"), title:"Deniz Arca, 2017"},
    });

    private static WorkExperience: () => Detail[] = () => [
        new Detail(
            {text: "Wren Kitchens", definition: "Britain's leading Kitchens designer/manufacturer with an award winning IT department & over 90 stores." },
            "October 2018 - February 2020",
            [
                { text: "Worked as a" },
                { text: "Junior Developer", format: TextFormat.Italic },
                { text: "for the logistics team at" },
                { text: "Wren Kitchens"},
                { text: "my role mainly included but" },
                { text: "was not limited to", format: TextFormat.Emphasized },
                { text: "backend systems." },
            ],
            "https://www.wrenkitchens.com/",
            { alt: "Official Wren Kitchens Corporate Logo", caption: undefined, src: require("../assets/wrenkitchens.webp"), title: "Wren Kitchens Logo" }
        ),
        new Detail(
            {text: "Mindgeek", definition: "Global innovators in FinTech & Media Content Delivery specializing in the Adult Entertainment Industry." }, 
            "August 2020 - December 2021", 
            [
                { text: "Worked as a" },
                { text: "Full Stack Developer", format: TextFormat.Emphasized },
                { text: "on several internal & customer facing domains ranging from" },
                { text: "several", format: TextFormat.Emphasized },
                { text: "internal & customer facing domains ranging from" },
                { text: "video & live streaming services", format: TextFormat.Italic },
                { text: "to" },
                { text: "Financial Technologies.", format: TextFormat.Italic },
            ],
            "https://www.mindgeek.com/",
            { alt: "Unofficial Mindgeek Logo with a brain drawing on black & white", caption: undefined, src: require("../assets/mgholdings.webp"), title: "Mindgeek Logo (Unofficial)" }
        ),
    ];

    private static EducationHistory: () => Detail[] = () => [
        new Detail(
            {text: "University of Hull", definition: "A public research university in Kingston upon Hull, a city in the East Riding of Yorkshire, England." }, 
            "2014 - 2018", 
            [
                { text:"Bachelor's degree, Computer Software Engineering."},
                { text:"First Class", format: TextFormat.Strong },
                { text:"Honours.", }

            ],
            "https://www.hull.ac.uk/",
            { alt: "Official University Of Hull Logo", caption: undefined, src: require("../assets/uniofhull.webp"), title: "University of Hull Logo" }
        ),
    ];
    
    private static PersonalProjects: () => Detail[] = () => [
        new Detail(
            {text:  "Web Portfolio", definition:"(Create React App) with HTML5 & CSS3 Grid."}, 
            "July 2020", 
            [
                {text:"A simplistic Static Web Portfolio built using ReactJS as a first attempt on learning the framework." }
            ],
            "https://github.com/denzii/web-portfolio/",
            { alt: "Official Reactjs Logo", caption: undefined, src: require("../assets/reactlogo.webp"), title: "ReactJS Logo" }
        ),
        new Detail(
            {text: "Auth Server API", definition: ".NET Core 3.1 with Swagger, EFCore (Code First) & Identity Framework." }, 
            "April 2020", 
            [
                { text: "A REST appropriated " },
                { text: "learning project", format:TextFormat.Emphasized },
                { text: "implementing" },
                { text: "JWT authentication", format:TextFormat.Italic },
                { text: "and" },
                { text: "authorization", format: TextFormat.Italic },
                { text: "with the use of refresh tokens. Makes" },
                { text: "extensive", format: TextFormat.Emphasized },
                { text: "use of custom implemented controller middlewares &" },
                { text: "includes a"},
                { text: "Unit Test", format: TextFormat.Italic  },
                { text: "project & a" },
                { text: "SDK", format: TextFormat.Italic },
                { text: "for easy library consumption." },
            ],
            "https://github.com/denzii/AuthManager",
            { alt: "Unofficial .Net Core Web Api Logo", caption: undefined, src: require("../assets/authserver.webp"), title: ".NET Core Logo (Unofficial)" }
        ),
        new Detail(
            {text: "Sindagal OpenSource Platform Automations & CLI", definition: "React Ink with Nodejs using Typescript, C#.NET 6 with SignalR, Powershell & Bash" }, 
            "August 2021 - February 2022",
            [
                { text:"Self automation project for" },
                { text: "cumbersome ", format:TextFormat.Emphasized },
                { text: "operating system level tasks" },
                { text: "which includes but" },
                { text: "is not limited to:", format: TextFormat.Emphasized },
                { text: "setting up" },
                { text: "terminal emulators,", format:TextFormat.Italic},
                { text: "installing and configuring" },
                { text: "Windows Subsystem Linux,", format:TextFormat.Italic },
                { text: "setting up" },
                { text: "ZSH", format: TextFormat.Italic },
                { text: "and" },
                { text: "Docker.", format: TextFormat.Italic},
                { text: "Intended to become a whole automation suite to be controlled using the provided" },
                { text: "command line interface", format: TextFormat.Italic },
                { text: "written using"},
                { text: "React.", format: TextFormat.Italic },
            ],
            "https://github.com/denzii/sindagal",
            { alt: "Icon of a robotic arm  holding the world by a thread", caption: "MVP incomplete, coming Soon!", src: require("../assets/sindagal.webp"), title: "Automation Icon" }
        ),
        new Detail(
            {text: "Sindagal OpenSource Blog", definition: "React Server Side Rendering with Nodejs using Typescript, HTML5 & CSS3 with SEO Optimizations" }, 
            "N/A",
            [
                { text: "Public source of truth for everything" },
                { text: "Sindagal.", format:TextFormat.Emphasized },
                { text: "This is intended to provide a base for the community & discussions about the future of the Sindagal project." },
            ],
            undefined,
            { alt: "Icon of multiple hands joined as one", caption: "Coming Soon!", src: require("../assets/sindagalblog.webp"), title: "Unity icon" }
        ),
    ];

    private static RecreationalActivities: () => Detail[] = () => [
        new Detail(
            {text: "Open Source Development", definition: ""}, 
            "",
            [
                { text:"Automating", format:TextFormat.Emphasized },
                { text: "my own workload which I found to be useful for as well as myself, " },
                { text: "others", format:TextFormat.Emphasized },
                { text: "as well as" },
                { text: "myself", format:TextFormat.Emphasized},
                { text: "making them as convenient as possible to use / extend along the way." },
            ],
            undefined,
            { alt: "Icon of people emerging from two hands", caption:"", src: require("../assets/opensourcedev.webp") , title: "Care & love icon" }
        ),   
        new Detail(
            {text: "Meditation", definition: ""},
            "", 
            [
                { text:"Nothing is better than a" },
                { text:"sound", format: TextFormat.Emphasized },
                { text:"mind." },
            ], 
            undefined, 
            { alt: "Icon of Black & White Mandala portraying a flower", caption: undefined, src: require("../assets/mandala.webp"), title: "Mandala Icon" }
        ),
   
        new Detail(
            { text: "Chinese Language", definition: "" },
            "", 
            [
                { text:"As that turkish proverb said..." },
                { text:"One language,"},
                { text:"one person;", format:TextFormat.Strong },
                { text:"two languages," },
                { text:"two persons!", format:TextFormat.Strong }
            ], 
            undefined, 
            { alt: "Icon of a pictograph, a pen & a notepad", caption: undefined, src: require("../assets/chinese.webp"), title: "Pictograph Icon" }
        ),

        new Detail(
            { text: "Hiking", definition: "" }, 
            "",
            [
                { text: "The best aspect of any hike is spending time with" },
                { text: "quality", format:TextFormat.Strong },
                { text: "people." },

            ],
            undefined,
            { alt: "Icon of Three Triangles representing tents for camping", caption:"", src: require("../assets/tents.webp") , title: "Pitched tents icon" }
        )
    ];

    private static Resume: () => Detail[] = () =>  [
        new Detail(
            undefined,
            "", 
            [{text:""}], 
            require('../assets/resume.pdf'), 
            { alt: "Icon of a black dot enclosed within an almond shape portraying an eye", caption: "Download PDF now!", src: require("../assets/eye.webp"), title: "Eye Icon"})
    ];

    private static PersonalUrls: () => PersonalURLs = () => ({
        linkedin: { url: "https://www.linkedin.com/in/deniz-arca/", icon: FaLinkedin },
        github: { url: "https://www.github.com/denzii/", icon: FaGithub },
        email: {url: "denizarca.info@gmail.com", icon: FaEnvelope }
    });
}
