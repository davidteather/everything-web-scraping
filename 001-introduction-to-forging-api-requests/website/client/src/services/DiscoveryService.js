const BACKEND_URL = `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}`


export async function getProfiles(page) {
    try{
        const response = await fetch(`${BACKEND_URL}/discover/profiles/${page}`); 
        return response.json();
    }catch(error) {
        return new Promise((res, rej) => {
            res([])
        });
    }
    
}