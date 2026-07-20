
import { useState } from "react";
import RepoCard from "./RepoCard";
import RepoSort from "./RepoSort";
import {sortRepos} from "../utils/repoSort";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useNavigate} from "react-router-dom";

function RepoList({ repos }) {

  const navigate = useNavigate();

  const [searchRepo, setSearchRepo] = useState("");
  const [sortOption,setSortOption]=useState("updated");
  
    const filteredRepos = searchRepo
      ? repos.filter((repo) =>
          repo.name.toLowerCase().includes(searchRepo.toLowerCase()),
        )
      : repos;

    // sortRepos fxn in repoSort.js
    const sortedRepos = sortRepos(filteredRepos, sortOption);      

  return (
    <div className="md:col-span-2">
      <div className="flex items-center gap-3 w-full max-w-[900px] mt-3 mb-3">
        <input
          className="flex-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search for Repo.."
          value={searchRepo}
          onChange={(val) => setSearchRepo(val.target.value)}
        />

      <div className="relative">
        <button
  onClick={() => navigate("/favorites")}
  className="flex items-center gap-2 px-4 py-2"
>
  <FavoriteIcon sx={{color: "red", "&:hover": {transform: "scale(1.3)"}}}/>
</button>
</div>
        
  <RepoSort sortOption={sortOption} setSortOption={setSortOption}/>
    </div>
      {sortedRepos.length === 0 ? (
        <p>No Repositories found</p>
      ) : (
        sortedRepos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
      )}
    </div>
  );
}

export default RepoList;
