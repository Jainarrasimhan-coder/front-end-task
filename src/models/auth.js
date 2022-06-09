import instance from "../utils/axios.utils";
import store from "../store/store";

export const signUp = async (data) => {
    // try{
    //     const response = await instance.post("/api/auth/sign_up", data)
    //     console.log(response,'stttttttttttt')
    //     return response

    // } catch(err){
    //     console.log("Error", err)
    //     return err.response
    // }

    return new Promise((resolve, reject)=>{
        instance.post("/signup", data).then((response)=>{
            console.log("response", response)
            resolve(response.data)
        }).catch((err)=>{
            console.log("Error", err)
            reject(err.response)
        })
    })
}

export const login = async (data) => {
    const response = await instance.post("/signin", data).catch((err)=> err.response)
    return response
}

export const updateUser = async (data) => {
    const response = await instance.put("/api/auth/update", data).catch((err)=> err.response)
    return response
}

export const getUser = async (data) => {
    const response = await instance.post("/api/auth/get", data).catch((err)=> err.response)
    return response
}

export const getAllPosts = async () => {
    const response = await instance.get("/allpost").catch((err)=> err.response)
    return response
}

export const createPosts = async (data) => {
    const response = await instance.post("/createpost", data).catch((err)=> err.response)
    return response
}

