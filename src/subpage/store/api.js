export const url = 'https://warm-gorge-13303.herokuapp.com/api'

export const setHeaders = ()=>{
    const headers ={
        headers: {
            "x-auth-token":localStorage.getItem("token")
        }
    }
    return headers
}