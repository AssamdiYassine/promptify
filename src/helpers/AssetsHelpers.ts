 
const nodeEnv2: string = (process.env.REACT_APP_PUBLIC_URL  as string);
 console.log(nodeEnv2);
 
 
export const toAbsoluteUrl = (pathname:String) => nodeEnv2 + pathname;
