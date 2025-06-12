import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ClassroomPage = () => {
  const [videos, setVideos] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Get user from localStorage
  const userData = JSON.parse(localStorage.getItem("rabbitryUser"));
  const user = userData?.user || userData;

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    setLoading(true);

    // Fetch videos
    axios
      .get("https://rabbit-rust.vercel.app/api/vid/")
      .then((res) => setVideos(Array.isArray(res.data) ? res.data : []))
      .catch(() => setVideos([]));

    // Fetch documents
    axios
      .get("https://rabbit-rust.vercel.app/api/doc/")
      .then((res) => setDocuments(Array.isArray(res.data) ? res.data : []))
      .catch(() => setDocuments([]));

    setLoading(false);
  }, [user, navigate]);

  const handleSignOut = () => {
    localStorage.removeItem("rabbitryUser");
    navigate("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-800">
            Rabbitry Classroom
          </h1>
          <p className="mt-2 text-gray-600">
            Welcome back, {user.Name || user.name || user.email}
          </p>
          <button
            onClick={handleSignOut}
            className="mt-3 bg-gray-200 hover:bg-gray-300 text-emerald-700 px-4 py-2 rounded-md text-sm"
          >
            Sign Out
          </button>
        </div>

        {loading ? (
          <div className="text-center text-gray-500 py-12">Loading...</div>
        ) : (
          <>
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Videos
              </h2>
              {videos.length === 0 ? (
                <p className="text-gray-500">No videos available.</p>
              ) : (
                <ul className="space-y-4">
                  {videos.map((video) => (
                    <li
                      key={video._id}
                      className="p-4 bg-white rounded shadow flex flex-col"
                    >
                      <span className="font-bold">{video.title}</span>
                      <span className="text-sm text-gray-600">
                        {video.description}
                      </span>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-emerald-600 underline"
                      >
                        Watch Video
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Documents
              </h2>
              {documents.length === 0 ? (
                <p className="text-gray-500">No documents available.</p>
              ) : (
                <ul className="space-y-4">
                  {documents.map((doc) => (
                    <li
                      key={doc._id}
                      className="p-4 bg-white rounded shadow flex flex-col"
                    >
                      <span className="font-bold">{doc.title}</span>
                      <span className="text-sm text-gray-600">
                        {doc.description}
                      </span>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-emerald-600 underline"
                      >
                        View Document
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default ClassroomPage;