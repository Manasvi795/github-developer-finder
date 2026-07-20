import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import ForkRightRoundedIcon from "@mui/icons-material/ForkRightRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";

function RepoCard({ repo }) {
  const lastUpdated = new Date(repo.updated_at).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-slate-200
        p-3
        mb-3
        hover:shadow-xl
    "
    >
      {/* Top Row */}

      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 hover:text-blue-600 hover:underline transition-colors"
            >
              {repo.name}
            </a>
          </h2>

          <p className="mt-2 text-slate-500 leading-relaxed">
            {repo.description || "No description available."}
          </p>
        </div>

        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
          {repo.private ? "Private" : "Public"}
        </span>
      </div>

      {/* Bottom Row */}

      <div className="flex flex-wrap justify-between items-center mt-6">
        {/* Left Side */}

        <div className="flex flex-wrap gap-4 items-center">
          {repo.language && (
            <span
              className="
                bg-blue-50
                text-blue-700
                px-4
                py-1
                rounded-full
                text-sm
                font-medium
            "
            >
              {repo.language}
            </span>
          )}

          <div className="flex items-center gap-1 text-slate-600">
            <StarOutlineRoundedIcon fontSize="small" />

            {repo.stargazers_count}
          </div>

          <div className="flex items-center gap-1 text-slate-600">
            <ForkRightRoundedIcon fontSize="small" />

            {repo.forks_count}
          </div>
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <UpdateRoundedIcon fontSize="small" />
          Updated {lastUpdated}
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
