import {useState} from "react";
import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import FavoriteIcon from "@mui/icons-material/Favorite";

function RepoSort({ sortOption, setSortOption }){
    const[open,setOpen]=useState(false);

    const options=[
        {label:"Recently updated",value:"updated"},
        {label:"Most Stars",value:"stars"},
        {label:"Most Forks",value:"forks"},
    ];

    return(
        <div className="relative">
        <button
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-300 text-white hover:bg-slate-400"
    onClick={()=>setOpen(!open)}
  >
    <FilterListAltIcon/>

  </button>

   {open && (
        <div className="flex flex-col absolute right-0 mt-2 w-52 rounded-lg bg-white shadow-xl">
          {options.map((option) => (
            <button
              key={option.value}
              className="sort-item"
              onClick={() => {
                // console.log(option.value)
                setSortOption(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
      </div>
    );
}

export default RepoSort;