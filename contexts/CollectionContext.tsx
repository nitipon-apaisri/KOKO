import * as React from "react";

const str: string = "hello world";
const CollecitonContext = React.createContext({ str });
const CollecitonProvider = ({ children }: any) => {
    return <CollecitonContext.Provider value={{ str }}>{children}</CollecitonContext.Provider>;
};
export { CollecitonContext, CollecitonProvider };
