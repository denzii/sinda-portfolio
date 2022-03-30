import Detail, { TextFormat } from "../model/detail";
import Background from "../interface/background";
import ProjectOwner from "../model/projectOwner";
import PersonalURLs from "../interface/personalUrls";
import Brand from "../interface/brand";

export default class Data {    
    public static ProjectOwner: () => ProjectOwner = () => new ProjectOwner(
        "Deniz",
        null,
        "Arca", 
        1996,
        Data.PersonalUrls(),
        Data.PersonalBackground()
    );
        
    private static PersonalBackground: () => Background = () => ({
        projects: Data.PersonalProjects(),
        work: Data.WorkExperience(),
        education: Data.EducationHistory(),
        hobbies: Data.RecreationalActivities(),
        resume: Data.Resume()
    })

    public static PersonalBrand: () => Brand = () => ({
        urls: Data.PersonalUrls(),
        background: {alt:"Background image portraying an abandoned church in Famagusta, Northern Cyprus", imageStyleClass: "background-image-kilise", src: require("../public/kilise.webp"), title: "Abandoned church, Famagusta Cyprus", caption:null},
        headshot: { alt: "Deniz Arca's professional Headshot from the year 2017", caption: null, src: JSON.stringify(require("../public/deniz.webp")), title:"Deniz Arca, 2017"},
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
            { alt: "Unofficial Mindgeek Logo with a brain drawing on black & white", caption: null, src: JSON.stringify(require("../public/mindgeek.webp")), title: "Mindgeek Logo (Unofficial)" }
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
            { alt: "Official Wren Kitchens Corporate Logo", caption: null, src: JSON.stringify(require("../public/wrenkitchens.webp")), title: "Wren Kitchens Logo" }
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
            { alt: "Official University Of Hull Logo", caption: null, src: JSON.stringify(require("../public/uniofhull.webp")), title: "University of Hull Logo" }
        ),
    ];
    
    private static PersonalProjects: () => Detail[] = () => [
        new Detail(
            {text: "Web Portfolio", definition:"NextJS App with HTML5 & CSS3."}, 
            "July 2020", 
            [
                {text:"Pertains to" },
                {text:"this", format:TextFormat.Emphasized },
                {text:"website itself." },
                {text:"An open source", format:TextFormat.Emphasized, unstyled: true },
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
                { text: "NextJS," },
                { text: "CSS3, Sass," },
                { text: "HTML5," },
                { text: "Web Accesibility," },
                { text: "Open Source" }
            ],
            "https://github.com/denzii/sinda-portfolio",
            { alt: "Official Reactjs Logo", caption: null, src: JSON.stringify(require("../public/reactlogo.webp")), title: "ReactJS Logo" }
        ),
        new Detail(
            {text: "Sindagal Open Source Platform Automations & CLI", definition: "React Ink with Nodejs using Typescript, Powershell & Bash." }, 
            "August 2021 - February 2022",
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
                { text: "Powershell, Bash," },
                { text: "DevOps Automation," },
                { text: "Command Line Interface," },
                { text: "Open Source" },
            ],
            "https://github.com/denzii/sinda-cli",
            { alt: "Icon of a robotic arm  holding the world by a thread", caption: null, src: JSON.stringify(require("../public/sindagal.webp")), title: "Automation Icon" }
        ),
        new Detail(
            {text: "Sindagal Open Source Knowledge Base", definition: ".NET 6 MVC with Entity Framework Core & MSSQL as well as Webpack, Typescript and SASS." }, 
            "February 2022 - March 2022",
            [
                { text: "Public source of truth for everything" },
                { text: "Sindagal.", format:TextFormat.Emphasized },
                { text: "This is intended to provide a base for the community, documentations & discussions about the future of the Sindagal project." },
                { text: "A live version could be viewed at: ", format:TextFormat.Emphasized },
                { text: "sindagal.org"}
            ],
            [
                { text: "Keywords:", format: TextFormat.Bold },
                { text: "C#.NET 6 MVC," },
                { text: "Typescript," },
                { text: "SCSS," },
                { text: "Webpack," },
                { text: "Docker/ Docker Compose," },
                { text: "Azure CLI, Azure App Service, Azure DevOps," },
                { text: "Bash," },
                { text: "Open Source" },
            ],
            "https://github.com/denzii/sinda-cms",
            { alt: "Icon of multiple hands joined as one", caption: null, src: JSON.stringify(require("../public/sindagalblog.webp")), title: "Unity icon" }
        ),
        new Detail(
            {text: "Auth Server API", definition: "C#.NET Core 3.1 with Swagger, EFCore (Code First) & Identity Framework." }, 
            "April 2020", 
            [
                { text: "A REST appropriated " },
                { text: "retired learning project", format:TextFormat.Emphasized },
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
                { text: "This project is now retired." },
            ],
            [
                { text: "Keywords:", format: TextFormat.Bold },
                { text: ".NET Core 3.1," },
                { text: "EFCore (Code First)," },
                { text: "ASPNet Identity" }
            ],
            "https://github.com/denzii/AuthManager",
            { alt: "Unofficial .Net Core Web Api Logo", caption: null, src: JSON.stringify(require("../public/authserver.webp")), title: ".NET Core Logo (Unofficial)" }
        ),
    ];

    private static RecreationalActivities: () => Detail[] = () => [
        new Detail(
            {text: "Open Source Development", definition: null}, 
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
            null,
            { alt: "Icon of people emerging from two hands", caption:"", src: JSON.stringify(require("../public/opensourcedev.webp")) , title: "Care & love icon" }
        ),   
        new Detail(
            {text: "Meditation", definition: null},
            "", 
            [
                { text:"Nothing is better than a" },
                { text:"sound", format: TextFormat.Emphasized },
                { text:"mind." },
            ], 
            [],
            null, 
            { alt: "Icon of Black & White Mandala portraying a flower", caption: null, src: JSON.stringify(require("../public/mandala.webp")), title: "Mandala Icon" }
        ),
   
        new Detail(
            { text: "Chinese Language", definition: null },
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
            null, 
            { alt: "Icon of a pictograph, a pen & a notepad", caption: null, src: JSON.stringify(require("../public/chinese.webp")), title: "Pictograph Icon" }
        ),

        new Detail(
            { text: "Hiking", definition: null }, 
            "",
            [
                { text: "The best aspect of any hike is spending time with" },
                { text: "quality", format:TextFormat.Strong },
                { text: "people." },
            ],
            [],
            null,
            { alt: "Icon of Three Triangles representing tents for camping", caption:"", src: JSON.stringify(require("../public/tents.webp")) , title: "Pitched tents icon" }
        )
    ];

    private static Resume: () => Detail[] = () =>  [
        new Detail(
            null,
            "", 
            [{text:""}],
            [], 
            "resume.pdf", 
            { alt: "Icon of a professional", caption: "Download PDF now!", src: JSON.stringify(require("../public/eye.webp")), title: "Eye Icon"})
    ];

    private static PersonalUrls: () => PersonalURLs = () => ({
        linkedin: { url: "https://www.linkedin.com/in/denizarca", iconName: "FaLinkedin" },
        github: { url: "https://www.github.com/denzii/", iconName: "FaGithub" },
        email: {url: "denizarca1@gmail.com", iconName: "FaEnvelope" }
    });
}
