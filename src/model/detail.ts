import IPlainOldObject from "../interface/plainOldObject";
import ImageProps from "../type/imageProps";

export type DetailTitle = { text: string, definition: string}

export default class Detail implements IPlainOldObject {
    title?: DetailTitle; 
    dateRange: string; 
    description: string;
    url?: string;
    image: ImageProps;


    constructor(title: DetailTitle | undefined, dateRange: string, description: string, url: string | undefined, image: ImageProps) {
        this.title = title;
        this.dateRange = dateRange;
        this.description = description;
        this.url = url;
        this.image = image;
    }

    ToString = () => `Experience at ${this.title} during ${this.dateRange}. Did ${this.description}. To learn more, visit: ${this.url}`;
}