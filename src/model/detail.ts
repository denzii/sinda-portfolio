import IPlainOldObject from "../interface/plainOldObject";
import ImageProps from "../type/imageProps";

export enum TextFormat {
    Bold = "b",
    Strong = "strong",
    Italic = "i",
    Emphasized = "em",
    Marked = "mark",
    Smaller = "small",
    Deleted = "del",
    Inserted = "ins",
    Subscript = "sub",
    Superscript = "sup"
}

export type DetailTitle = { text: string, definition?: string }
export type TextProps = { text: string, format?: TextFormat, unstyled?: boolean }

export default class Detail implements IPlainOldObject {
    title?: DetailTitle; 
    dateRange: string; 
    description: TextProps[];
    metadata: TextProps[];
    url?: string;
    image: ImageProps;


    constructor(title: DetailTitle | undefined, dateRange: string, description: TextProps[], metadata: TextProps[], url: string | undefined, image: ImageProps) {
        this.title = title;
        this.dateRange = dateRange;
        this.description = description;
        this.metadata = metadata
        this.url = url;
        this.image = image;
    }

    ToString = () => `Experience at ${this.title} during ${this.dateRange}. Did ${this.description}. To learn more, visit: ${this.url}`;
}