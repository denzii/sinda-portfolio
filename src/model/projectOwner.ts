import IPlainOldObject from "../interface/plainOldObject";
import ImageProps from "../type/imageProps";
import ToStringProps from "../type/toStringProps";
import Util from "../util";
import PersonalBackground from "../interface/personalBackground";

export default class ProjectOwner implements IPlainOldObject{
    firstName: string;
    middleName: string;
    lastName: string;
    birthYear: number;
    background: PersonalBackground;  
    image: ImageProps;


    constructor(firstName: string, middleName: string|undefined, lastName: string, birthYear: number, background: PersonalBackground, image: ImageProps) {
        this.firstName = firstName;
        this.middleName = middleName ?? "";
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.background = background;    
        this.image = image;
    }

    ToString = (props?: ToStringProps) => props?.detailed 
        ? `${Util.Capitalize(this.firstName)} ${Util.Capitalize(this.middleName)} ${Util.Capitalize(this.lastName)} ${String(this.birthYear)}` 
        : `${Util.Capitalize(this.firstName)} ${Util.Capitalize(this.lastName)}` 
}