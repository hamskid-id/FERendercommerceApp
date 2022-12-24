export const url = 'https://webcommerce-api.onrender.com/api'

export const setHeaders = ()=>{
    const headers ={
        headers: {
            "x-auth-token":localStorage.getItem("token")
        }
    }
    return headers
}