import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, getRepos } from "../services/githubApi";
import ProfileCard from "../components/ProfileCard";
import RepoList from "../components/RepoList";


function ProfilePage() {
  const { username } = useParams();

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);

        const userData = await getUser(username);
        const repoData = await getRepos(username);
        setUser(userData);
        setRepos(repoData);
        // console.log(userData);
        // console.log(repoData);
      } catch (err) {
        setUser(null);
        setRepos([]);
        setError(err.message);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  if(error){
    return(
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl text-red-500 font-semibold">{error}</h2>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100 py-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <div className="sticky top-8">
          <ProfileCard user={user} />
        </div>
        </div> 
       <div className="md:col-span-2 h-screen overflow-y-auto">

          <RepoList repos={repos} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
