const BACKEND_URL = `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}`


export async function getFeed(page) {
    try{
        const response = await fetch(`${BACKEND_URL}/feed/${page}`); 
        return response.json();
    }catch(error) {
        return new Promise((res, rej) => {
            res([])
        });
    }
    
}


export async function getProfileFeed(username, page) {
    try{
        const response = await fetch(`${BACKEND_URL}/profile/${username}/feed/${page}`); 
        return response.json();
    }catch(error) {
        return new Promise((res, rej) => {
            res([])
        });
    }
    
}