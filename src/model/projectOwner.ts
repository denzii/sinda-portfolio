import IPlainOldObject from "../interface/plainOldObject";
import ToStringProps from "../type/toStringProps";
import Util from "../util";
import PersonalBackground from "../interface/personalBackground";
import PersonalURLs from "../interface/personalUrls";

export default class ProjectOwner implements IPlainOldObject{
    firstName: string;
    middleName: string;
    lastName: string;
    birthYear: number;
    urls: PersonalURLs;
    background: PersonalBackground;  

    constructor(firstName: string, middleName: string|undefined, lastName: string, birthYear: number, urls: PersonalURLs, background: PersonalBackground) {
        this.firstName = firstName;
        this.middleName = middleName ?? "";
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.urls = urls;
        this.background = background;    
    }

    ToString = (props?: ToStringProps) => props?.detailed 
        ? `${Util.Capitalize(this.firstName)} ${Util.Capitalize(this.middleName)} ${Util.Capitalize(this.lastName)} born in ${String(this.birthYear)}` 
        : `${Util.Capitalize(this.firstName)} ${Util.Capitalize(this.lastName)}` 
}