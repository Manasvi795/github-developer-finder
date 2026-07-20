export function sortRepos(repos,sortOption){
    const sorted=[...repos];

    switch(sortOption){
        case "stars":
        return sorted.sort(
            (a,b)=>b.stargazers_count-a.stargazers_count
        );

        case "forks":
        return sorted.sort(
            (a,b)=>b.forks_count-a.forks_count
        );

        case "updated":
        return sorted.sort(
            (a,b)=>new Date(b.updated_at)-new Date(a.updated_at)
        );

        default:
            return sorted;

    }
}