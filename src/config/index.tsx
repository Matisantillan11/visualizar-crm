import devLocal from "./dev-local.config";

export const config = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return devLocal 
  
    default:
      break;
  }
}