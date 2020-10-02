import axios from 'axios';

async function axiosFetch ( API_URL, formData = {} )  {
    return await axios.post(API_URL, formData,{
        headers: {
            'content-type': 'multipart/form-data',
        },
        //timeout: 8000,
    }).then( res => {
        //console.log("res", res);
        return Promise.resolve(res).then(arrList=>{
            return arrList.data;
        }) 
    });
    
    //console.log("result -> " , result)
    // return Promise.resolve(result).then(arrList=>{
    //     return arrList.data;
    // }) 
}
export default axiosFetch;
