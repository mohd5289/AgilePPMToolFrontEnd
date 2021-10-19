import axios from "axios"
export const  jwTDecode=(t)=> {
    let token = {};
    token.raw = t.toString();
    token.header = t.toString().split('.')[0];
    token.payload = t.toString().split('.')[1];
    return (token)
  }

const setJWTToken = token =>{
    if(token){
        axios.defaults.headers.common["Authorization"]= token;
    }else{
        delete axios.defaults.headers.common["Authorization"]
    }
} 

export default setJWTToken