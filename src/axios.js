import axios from "axios"

const instance = axios.create({
    // baseURL:"http://apisrexiem.herokuapp.com/api" , 
    baseURL:"http://192.168.1.20:8000/api" ,
});
export default instance;