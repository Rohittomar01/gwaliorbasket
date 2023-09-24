
import axios from "axios"
const serverURL = "http://localhost:5000"

const getData = async (URL) => {
    try {
        var responce = await axios.get(`${serverURL}/${URL}`)
        var result = await responce.data;
        return result

    }
    catch (e) {
        return null
    }
};

const postData=async(URL,body)=>{
    try{
    var responce= await axios.post(`${serverURL}/${URL}`,body)
    var result = await responce.data
    return result
}
catch(e){
    return null
}
}
export { serverURL, getData,postData }