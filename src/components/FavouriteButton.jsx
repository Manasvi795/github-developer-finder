import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useState,useEffect} from "react";
import {getFavorites,saveFavorites} from "../utils/localStorage";

function FavouriteButton({user}){
  const [isFavorite, setIsFavorite] = useState(false);

  function addFavorite(){
    if(!user)return;
    const favorites=getFavorites();

    const alreadyExist=favorites.find(
      fav=>fav.id===user.id
    );

    if(alreadyExist)return;

    favorites.push(user);
    saveFavorites(favorites);
    setIsFavorite(true);

  }

  function removeFavorite(){
    const favorites=getFavorites();

    const updated=favorites.filter(
      fav=>fav.id!==user.id
    );

    saveFavorites(updated);
    setIsFavorite(false);
    
  }

  useEffect(()=>{
    // console.log("user:",user);
    const favorites=getFavorites();
    // console.log("fav:",favorites);
    setIsFavorite(
      favorites.some(fav=>fav.id===user.id)
    );
  },[user]);

  return(
    <button onClick={(e)=>{
        e.stopPropagation();
        isFavorite?removeFavorite():addFavorite()}}>
          {isFavorite?(
            <>
            <FavoriteIcon sx={{color: "red"}}/>
            {"  "}Remove from Favorites
            </>
          ):(
            <>
            <FavoriteBorderOutlinedIcon/>{"  "}Add to Favorites
            </>
          )
          }
    </button>
  );

}

export default FavouriteButton;