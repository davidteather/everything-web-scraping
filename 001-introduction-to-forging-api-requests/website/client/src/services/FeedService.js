const isCodespaces = process.env.REACT_APP_CODESPACE_NAME != "" && process.env.REACT_APP_GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN != "";

const BACKEND_URL = isCodespaces
    ? `https://${process.env.REACT_APP_CODESPACE_NAME}-${process.env.REACT_APP_BACKEND_PORT}.${process.env.REACT_APP_GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`
    : `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}`;

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