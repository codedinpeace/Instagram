import { useRef, useState } from "react";
import { usePostStore } from "../../../States/postStore";
import Loader from "../../../components/Loader";
import { useNavigate } from "react-router-dom";

const CameraIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
  
  const UploadIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-white/20">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
  
  const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
  
  export default function CreatePost() {
    
    const navigate = useNavigate()
    const [caption, setCaption] = useState("")
    const fileRef= useRef()
    const {createPost, isCreatingPost} = usePostStore()

    function handleSubmit (e) {
        e.preventDefault()
        
        const formData = new FormData()
        formData.append("image", fileRef.current.files[0])
        formData.append("caption", caption)

        createPost(formData, navigate)
    }

    if(isCreatingPost){
        return (
            <Loader />
        )
    }

    return (
      <div
        className="min-h-screen flex items-center justify-center px-4 py-10"
        style={{
          background: "linear-gradient(135deg, #0f1021 0%, #141628 50%, #0d0f1e 100%)",
          fontFamily: "'Georgia', serif",
        }}
      >
        <div className="w-full max-w-md">
  
          {/* Header */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
              <CameraIcon />
            </div>
            <span
              className="text-sm font-bold tracking-[0.2em] uppercase text-white/90"
              style={{ fontFamily: "Poppins" }}
            >
              POSTSAGA
            </span>
          </div>
  
          <h1 className="text-2xl font-bold text-white mb-1">Create Post</h1>
          <p className="text-sm text-white/35 mb-8" style={{ fontFamily: "monospace" }}>
            Share your watchlist with the world
          </p>
  
          {/* Card */}
          <div
            className="rounded-2xl p-6 flex flex-col gap-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Drop Zone */}
                <form onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-xs font-semibold text-white/40 tracking-widest uppercase mb-2"
                style={{ fontFamily: "monospace" }}
              >
                Media
              </label>
              
              <label htmlFor="uploadFile">
              <div
              
                className="w-full rounded-xl flex flex-col items-center justify-center gap-3 py-12 cursor-pointer"
                style={{
                  border: "1.5px dashed rgba(99,102,241,0.35)",
                  background: "rgba(99,102,241,0.05)",
                }}
              >
                <input type="file" ref={fileRef} className="hidden" id="uploadFile" />
                <UploadIcon />
                <div className="text-center">
                  <p className="text-sm text-white/50">Drag & drop your image here</p>
                  <p className="text-xs text-white/25 mt-1" style={{ fontFamily: "monospace" }}>or</p>
                </div>
                <div
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold text-indigo-300 cursor-pointer"
                  style={{
                    background: "rgba(99,102,241,0.15)",
                    border: "1px solid rgba(99,102,241,0.3)",
                    fontFamily: "monospace",
                    letterSpacing: "0.05em",
                  }}
                >
                  Browse Files
                </div>
                <p className="text-xs text-white/20" style={{ fontFamily: "monospace" }}>
                  PNG, JPG, WEBP · Max 10MB
                </p>
              </div>
              </label>
            </div>
  
            {/* Caption */}
            <div>
              <label
                className="block text-xs font-semibold text-white/40 tracking-widest uppercase mb-2"
                style={{ fontFamily: "monospace" }}
                >
                Caption
              </label>
              <textarea
              onChange={(e)=>setCaption(e.target.value)}
                rows={4}
                placeholder="Write a caption…"
                className="w-full rounded-xl px-4 py-3 text-sm text-white/80 placeholder-white/20 resize-none outline-none"
                style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontFamily: "'Georgia', serif",
                    lineHeight: "1.7",
                }}
                />
              <p className="text-right text-xs text-white/20 mt-1" style={{ fontFamily: "monospace" }}>
                0 / 300
              </p>
            </div>
  
            {/* Submit */}
            <button
            type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold tracking-wide"
              style={{
                  background: "linear-gradient(135deg, #3b4fd8 0%, #6366f1 100%)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                  letterSpacing: "0.05em",
                }}
                >
              Publish Post
              <ArrowIcon />
            </button>
                </form>
          </div>
        </div>
      </div>
    );
  }