import IPlainOldObject from "../interface/plainOldObject";
import ImageProps from "../type/imageProps";

export default class BackgroundDetail implements IPlainOldObject {
    title: string; 
    dateRange: string; 
    description: string;
    url: string;
    image: ImageProps

    constructor(title: string, dateRange: string, description: string, url: string, image: ImageProps) {
        this.title = title;
        this.dateRange = dateRange;
        this.description = description;
        this.url = url;
        this.image = image;
    }

    ToString = () => `Experience at ${this.title} during ${this.dateRange}. Did ${this.description}. To learn more, visit: ${this.url}`;
}