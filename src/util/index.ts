export default class Util {
    static Capitalize: (element: string) => string = (elem) => elem.charAt(0).toUpperCase() + elem.slice(1);
}