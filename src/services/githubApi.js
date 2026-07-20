const BASE_URL="https://api.github.com";

export async function getUser(username) {
    try{
        const response = await fetch(`${BASE_URL}/users/${username}`);

    if(response.status===404){
        throw new Error("Username not found");
    }

    if(response.status===403){
        throw new Error("Github API rate limit exceeded");
    }

    if(!response.ok){
        throw new Error("Something went wrong");
    }


    const data = await response.json();
    return data;
    }catch(error){
        if(error instanceof TypeError){
            throw newError("Network Error");
        }
        throw error;
    }
  };

  export async function getRepos(username) {
    try{
        const response = await fetch(`${BASE_URL}/users/${username}/repos?sort=updated`);

    if(response.status===404){
        throw new Error("Repository not found");
    }

    if(response.status===403){
        throw new Error("Github API rate limit exceeded");
    }

    if(!response.ok){
        throw new Error("Something went wrong");
    }

    const data = await response.json();
    return data;
    }catch(error){
        if(error instanceof TypeError){
            throw newError("Network Error");
        }
        throw error;
    }
  };