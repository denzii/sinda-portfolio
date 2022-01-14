import { createContext } from "react";
import Data from "../../data";
import Context from "../../type/context";

export type ComponentDataConnector = (mergeProps: PropsReducer) => ComponentConstructor;
export type PropsReducer = (props: any) => any;
export type ComponentConstructor = (targetComponent: BaseJSXConstructor) => (props: any) => JSX.Element;
export type BaseJSXConstructor = (props?: any) => JSX.Element;
export type ContextProvider = (TargetComponent: BaseJSXConstructor) => (props: any) => JSX.Element;

export const AppContext = createContext<Context>({ owner: Data.ProjectOwner() });

export const getBaseProps: PropsReducer = (baseProps: object) => ({ ...baseProps });

export const connect: ComponentDataConnector = (getProps: PropsReducer = getBaseProps) => (TargetComponent: BaseJSXConstructor) => {
    const mergeObjects: (objects: object[]) => object = (objects) => Object.assign({}, ...objects);

    return (props: any) => 
        <AppContext.Consumer>
            {(context: Context) =>  <TargetComponent {...(mergeObjects([getProps(context), props]))} /> }
        </AppContext.Consumer>
}

export const withContextProvider = (TargetComponent: BaseJSXConstructor) => {
    return (props: any) => 
        <AppContext.Provider value={{ owner: Data.ProjectOwner() }}>       
            <TargetComponent {...props} />
        </AppContext.Provider>
}
    
