import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FavouriteButton from "./FavouriteButton";

function ProfileCard({ user }) {

  if(!user) return<h2>Loading...</h2>;

  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="w-40 h-40 rounded-full border-4 border-blue-100 mx-auto shadow-lg"
      />
      <h1 className="text-3xl font-bold text-slate-800 text-center mt-6">{user.name}</h1>
      <p className="text-center text-slate-500">@{user.login}</p>
      <p className="text-center mt-5 text-slate-600">{user.bio||"No Bio"}</p>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-slate-100 rounded-xl p-4 text-center">
          <h2 className="font-bold text-2xl">{user.followers}</h2>
          <p className="text-sm text-slate-500">Followers</p>
        </div>

        <div className="bg-slate-100 rounded-xl p-4 text-center">
          <h2 className="font-bold text-2xl">{user.following}</h2>
          <p className="text-sm text-slate-500">Following</p>
        </div>

        <div className="bg-slate-100 rounded-xl p-4 text-center">
          <h2 className="font-bold text-2xl">{user.public_repos}</h2>
          <p className="text-sm text-slate-500">Repos</p>
        </div>

      </div>
      <div className="mt-8 space-y-4 text-slate-700">

        <div className="flex items-center gap-3">
          <BusinessOutlinedIcon />
          {user.company || "Not Available"}
        </div>

        <div className="flex items-center gap-3">
          <LocationOnOutlinedIcon />
          {user.location || "Not Available"}
        </div>

        <div className="flex items-center gap-3">
          <LanguageOutlinedIcon />
          {user.html_url ? (
            <a
              href={user.html_url}
               className="text-blue-600 hover:underline"
            >
              Github Profile
            </a>
          ) : (
            "No Website"
          )}
        </div>

        <FavouriteButton user={user}/>

      </div>
    </div>
  );
}

export default ProfileCard;
