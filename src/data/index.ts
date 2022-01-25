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
        project: Data.PersonalProjects(),
        education: Data.EducationHistory(),
        hobby: Data.RecreationalActivities(),
        resume: Data.Resume()
    })

    public static PersonalBrand: () => Brand = () => ({
        urls: Data.PersonalUrls(),
        background: {alt:"Background image portraying an abandoned church in Famagusta, Northern Cyprus", imageStyleClass: "background-image-kilise", src: require("../assets/kilise.webp"), title: "Abandoned church, Famagusta Cyprus"},
        headshot: { alt: "Deniz Arca's professional Headshot from the year 2017", caption: undefined, src: require("../assets/deniz.webp"), title:"Deniz Arca, 2017"},
    });

    private static WorkExperience: () => Detail[] = () => [
        new Detail(
            {text: "Mindgeek", definition: "Global innovators in FinTech & Media Content Delivery specializing in the Adult Entertainment Industry." }, 
            "August 2020 - December 2021", 
            [
                { text: "Worked as a" },
                { text: "Full Stack Developer", format: TextFormat.Emphasized },
                { text: "on" },
                { text: "several", format: TextFormat.Emphasized },
                { text: "internal & customer facing domains, especially in" },
                { text: "financial technologies", format: TextFormat.Italic },
                { text: "and" },
                { text: "video / live streaming.", format: TextFormat.Italic },
            ],
            [],
            "https://www.mindgeek.com/",
            { alt: "Unofficial Mindgeek Logo with a brain drawing on black & white", caption: undefined, src: require("../assets/mindgeek.webp"), title: "Mindgeek Logo (Unofficial)" }
        ),
        new Detail(
            {text: "Wren Kitchens", definition: "Britain's leading Kitchens designer/manufacturer with an award winning IT department & over 90 stores." },
            "October 2018 - February 2020",
            [
                { text: "Worked as a" },
                { text: "Junior Developer", format: TextFormat.Italic },
                { text: "for the logistics team at" },
                { text: "Wren Kitchens"},
                { text: "my role mainly included, but" },
                { text: "was not limited to", format: TextFormat.Emphasized },
                { text: "back-end systems." },
            ],
            [],
            "https://www.wrenkitchens.com/",
            { alt: "Official Wren Kitchens Corporate Logo", caption: undefined, src: require("../assets/wrenkitchens.webp"), title: "Wren Kitchens Logo" }
        )
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
            [],
            "https://www.hull.ac.uk/",
            { alt: "Official University Of Hull Logo", caption: undefined, src: require("../assets/uniofhull.webp"), title: "University of Hull Logo" }
        ),
    ];
    
    private static PersonalProjects: () => Detail[] = () => [
        new Detail(
            {text: "Web Portfolio", definition:"Create React App with HTML5 & CSS3."}, 
            "July 2020 - January 2022", 
            [
                {text:"Pertains to" },
                {text:"this", format:TextFormat.Emphasized },
                {text:"website itself." },
                {text:"open source", format:TextFormat.Emphasized, unstyled: true },
                {text:"web portfolio template" },
                {text:"which focuses on" },
                {text:"reusablility", format:TextFormat.Emphasized },
                {text:"through the separation of data from inner logic" },
                {text:"as well as" },
                {text:"accessibility", format:TextFormat.Emphasized },
                {text:"with the use of the latest HTML5 semantics & considerations on keyboard navigability" },
            ],
            [
                { text: "Keywords:", format: TextFormat.Bold },
                { text: "ReactJS, TypeScript," },
                { text: "CSS3, Sass," },
                { text: "HTML5," },
                { text: "Web Accesibility," },
                { text: "Open Source" }
            ],
            "https://github.com/denzii/sindagal-portfolio-template",
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
                { text: "use of custom implemented controller middle-wares &" },
                { text: "includes a"},
                { text: "Unit Test", format: TextFormat.Italic  },
                { text: "project & an" },
                { text: "SDK", format: TextFormat.Italic },
                { text: "for easy library consumption." },
            ],
            [
                { text: "Keywords:", format: TextFormat.Bold },
                { text: ".NET Core 3.1," },
                { text: "EFCore (Code First)," },
                { text: "ASPNet Identity" }
            ],
            "https://github.com/denzii/AuthManager",
            { alt: "Unofficial .Net Core Web Api Logo", caption: undefined, src: require("../assets/authserver.webp"), title: ".NET Core Logo (Unofficial)" }
        ),
        new Detail(
            {text: "Sindagal OpenSource Platform Automations & CLI", definition: "React Ink with Nodejs using Typescript, C#.NET 6 with SignalR, Powershell & Bash" }, 
            "August 2021 - March 2022",
            [
                { text:"Self automation project for" },
                { text: "cumbersome", format:TextFormat.Emphasized },
                { text: "OS", format:TextFormat.Italic },
                { text: "level tasks" },
                { text: "which includes setups & configurations for things such as" },
                { text: "terminal emulators,", format:TextFormat.Italic},
                { text: "Windows Subsystem Linux,", format:TextFormat.Italic },
                { text: "ZSH", format: TextFormat.Italic },
                { text: "and" },
                { text: "Docker.", format: TextFormat.Italic},
                { text: "Intended to become a complete" },
                { text: "Developer Facing",  format: TextFormat.Italic },
                { text: "automation solution to be used through a" },
                { text: "command line interface.", format: TextFormat.Italic },
                { text: "Open Source." },
            ],
            [
                { text: "Keywords:", format: TextFormat.Bold },
                { text: "React Ink, NodeJS, TypeScript," },
                { text: "C#.NET 6, SignalR," },
                { text: "Powershell," },
                { text: "Bash," },
                { text: "DevOps Automation," },
                { text: "Command Line Interface," },
                { text: "Open Source" },
            ],
            "https://github.com/denzii/sindagal",
            { alt: "Icon of a robotic arm  holding the world by a thread", caption: "MVP incomplete ... Coming Soon!", src: require("../assets/sindagal.webp"), title: "Automation Icon" }
        ),
        new Detail(
            {text: "Sindagal OpenSource Blog", definition: "React Server Side Rendering with Nodejs using Typescript, HTML5 & Tailwind CSS with SEO Optimizations" }, 
            "N/A",
            [
                { text: "Public source of truth for everything" },
                { text: "Sindagal.", format:TextFormat.Emphasized },
                { text: "This is intended to provide a base for the community & discussions about the future of the Sindagal project." },
            ],
            [

            ],
            undefined,
            { alt: "Icon of multiple hands joined as one", caption: "Coming Soon!", src: require("../assets/sindagalblog.webp"), title: "Unity icon" }
        ),
    ];

    private static RecreationalActivities: () => Detail[] = () => [
        new Detail(
            {text: "Open Source Development", definition: undefined}, 
            "",
            [
                { text:"Automating", format:TextFormat.Emphasized },
                { text: "my own workload which I found to be useful for myself, as well as" },
                { text: "others", format:TextFormat.Emphasized },
                { text: "operating under the name" },
                { text: "\"Sindagal\"", format:TextFormat.Italic},
                { text: "and making my work as convenient as possible to use / extend." },
            ],
            [],
            undefined,
            { alt: "Icon of people emerging from two hands", caption:"", src: require("../assets/opensourcedev.webp") , title: "Care & love icon" }
        ),   
        new Detail(
            {text: "Meditation", definition: undefined},
            "", 
            [
                { text:"Nothing is better than a" },
                { text:"sound", format: TextFormat.Emphasized },
                { text:"mind." },
            ], 
            [],
            undefined, 
            { alt: "Icon of Black & White Mandala portraying a flower", caption: undefined, src: require("../assets/mandala.webp"), title: "Mandala Icon" }
        ),
   
        new Detail(
            { text: "Chinese Language", definition: undefined },
            "", 
            [
                { text:"As that Turkish proverb said ..." },
                { text:"One language,"},
                { text:"one person;", format:TextFormat.Italic },
                { text:"two languages,", format:TextFormat.Italic },
                { text:"two", format:TextFormat.Strong },
                { text: "persons!" },
            ],
            [],
            undefined, 
            { alt: "Icon of a pictograph, a pen & a notepad", caption: undefined, src: require("../assets/chinese.webp"), title: "Pictograph Icon" }
        ),

        new Detail(
            { text: "Hiking", definition: undefined }, 
            "",
            [
                { text: "The best aspect of any hike is spending time with" },
                { text: "quality", format:TextFormat.Strong },
                { text: "people." },
            ],
            [],
            undefined,
            { alt: "Icon of Three Triangles representing tents for camping", caption:"", src: require("../assets/tents.webp") , title: "Pitched tents icon" }
        )
    ];

    private static Resume: () => Detail[] = () =>  [
        new Detail(
            undefined,
            "", 
            [{text:""}],
            [], 
            require('../assets/resume.pdf'), 
            { alt: "Icon of a black dot enclosed within an almond shape portraying an eye", caption: "Download PDF now!", src: require("../assets/eye.webp"), title: "Eye Icon"})
    ];

    private static PersonalUrls: () => PersonalURLs = () => ({
        linkedin: { url: "https://www.linkedin.com/in/denizarca", icon: FaLinkedin },
        github: { url: "https://www.github.com/denzii/", icon: FaGithub },
        email: {url: "denizarca.info@gmail.com", icon: FaEnvelope }
    });
}
