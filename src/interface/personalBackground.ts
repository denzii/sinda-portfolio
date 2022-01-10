import BackgroundDetail from "../model/backgroundDetail";

export default interface PersonalBackground {
    work: BackgroundDetail[];
    education: BackgroundDetail[];
    projects: BackgroundDetail[];
    hobbies: BackgroundDetail[];
    resume: BackgroundDetail[];
}