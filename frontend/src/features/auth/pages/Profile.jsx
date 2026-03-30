import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { useAuthStore } from "../../../States/authStore";

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
    <path d="M12 5v14M5 12h14"/>
  </svg>
);

export default function   Profile() {

  const {authUser} = useAuthStore()

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(135deg, #0f1021 0%, #141628 50%, #0d0f1e 100%)",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Navbar */}
    <Navbar />

      <div className="max-w-md mx-auto px-4 py-6">

        {/* Profile Header */}
        <div className="flex items-start gap-5 mb-6">
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold"
              style={{
                background: "linear-gradient(135deg, #3b4fd8 0%, #6366f1 50%, #818cf8 100%)",
                boxShadow: "0 0 0 3px #1e2140, 0 0 0 5px #3b4fd8",
              }}
            >
              L
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: "#3b82f6", boxShadow: "0 0 0 2px #141628" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
          </div>

          {/* Name & Bio */}
          <div className="flex-1 pt-1">
            <h1 className="text-lg font-bold text-white tracking-wide">{authUser?.username}</h1>
            <p className="text-xs text-white/40 mt-0.5 mb-2" style={{ fontFamily: "monospace" }}>{authUser?.email}</p>
            <p className="text-xs text-white/40 mt-0.5 mb-2" style={{ fontFamily: "monospace" }}>Member since {authUser?.createdAt === null ? "2026" : authUser?.createdAt}</p>
            <p className="text-sm text-white/60 leading-relaxed">
              {authUser?.bio}
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className="flex items-center rounded-2xl mb-5 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { label: "Posts", value: "48" },
            { label: "Followers", value: "2.1k" },
            { label: "Following", value: "318" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex-1 py-4 flex flex-col items-center gap-0.5 relative"
              style={i < 2 ? { borderRight: "1px solid rgba(255,255,255,0.06)" } : {}}
            >
              <span className="text-lg font-bold text-white tracking-tight">{stat.value}</span>
              <span className="text-xs text-white/35 tracking-widest uppercase" style={{ fontFamily: "monospace", fontSize: "9px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Create Post Button */}
        <Link to='/create-post'><button
          className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl mb-6 text-sm font-semibold tracking-wide transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #3b4fd8 0%, #6366f1 100%)",
            boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
            letterSpacing: "0.05em",
          }}
        >
          <PlusIcon />
          Create Post
        </button></Link>

        <div className="h-8" />
      </div>
    </div>
  );
}