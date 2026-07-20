import {useEffect,useState} from "react";
import {getFavorites} from "../utils/localStorage";
import {useNavigate} from "react-router-dom";
// import FavouriteButton from "../components/FavouriteButton";


function Favorites(){

    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setFavorites(getFavorites());
    }, []);
    
    return(
        <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">
        Favorite Developers</h1>
        {favorites.length===0?(
            <p>No Favorites yet.</p>
        ):(
            favorites.map((user)=>(
            <div
            key={user.id}
            onClick={() => navigate(`/users/${user.login}`)}
            className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h2>{user.name || user.login}</h2>
              <p>@{user.login}</p>
            </div>
            {/* <div>
                <FavouriteButton user={user}/>
            </div> */}
            </div>
        ))
        )}
        </div>
    );
}

export default Favorites;