import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const MaterialUpload = () => {
  // State for video/doc URLs
  const [videoForm, setVideoForm] = useState({ title: '', description: '', url: '' });
  const [docForm, setDocForm] = useState({ title: '', description: '', url: '' });
  // Lists of materials
  const [videos, setVideos] = useState([]);
  const [docs, setDocs] = useState([]);
  // Loading state
  const [loading, setLoading] = useState(false);

  // Fetch the lists on mount (replace GET endpoints with your actual endpoints)
  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      // Adjust GET endpoints as per your backend
      const vidRes = await axios.get('https://rabbit-rust.vercel.app/api/vid/');
      const docRes = await axios.get('https://rabbit-rust.vercel.app/api/doc/');
      setVideos(vidRes.data || []);
      setDocs(docRes.data || []);
    } catch (err) {
      // Handle errors if needed
    }
  };

  // Handlers for input changes
  const handleVideoChange = (e) => {
    const { name, value } = e.target;
    setVideoForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleDocChange = (e) => {
    const { name, value } = e.target;
    setDocForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handlers
  const handleVideoSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://rabbit-rust.vercel.app/api/vid/', videoForm);
      setVideoForm({ title: '', description: '', url: '' });
      fetchLists();
      alert('Video uploaded!');
    } catch (err) {
      alert('Error uploading video');
    }
    setLoading(false);
  };
  const handleDocSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://rabbit-rust.vercel.app/api/doc/', docForm);
      setDocForm({ title: '', description: '', url: '' });
      fetchLists();
      alert('Document uploaded!');
    } catch (err) {
      alert('Error uploading document');
    }
    setLoading(false);
  };

  // Delete handlers
  const handleDeleteDoc = async (id) => {
    if (!window.confirm('Delete this document?')) return;
    try {
      await axios.delete(`https://rabbit-rust.vercel.app/api/doc/${id}`);
      fetchLists();
    } catch (err) {
      alert('Error deleting document');
    }
  };
  const handleDeleteVid = async (id) => {
    if (!window.confirm('Delete this video?')) return;
    try {
      await axios.delete(`https://rabbit-rust.vercel.app/api/vid/${id}`);
      fetchLists();
    } catch (err) {
      alert('Error deleting video');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto space-y-8">
      {/* Video Upload Form */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-emerald-800 mb-4">Upload Video</h2>
        <form onSubmit={handleVideoSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            value={videoForm.title}
            onChange={handleVideoChange}
            className="w-full px-3 py-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={videoForm.description}
            onChange={handleVideoChange}
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="url"
            name="url"
            placeholder="Video URL"
            required
            value={videoForm.url}
            onChange={handleVideoChange}
            className="w-full px-3 py-2 border rounded"
          />
          <motion.button type="submit" whileHover={{ scale: 1.02 }} disabled={loading}
            className="bg-emerald-600 text-white py-2 px-4 rounded w-full">
            {loading ? 'Uploading...' : 'Upload Video'}
          </motion.button>
        </form>
      </div>

      {/* Document Upload Form */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-emerald-800 mb-4">Upload Document</h2>
        <form onSubmit={handleDocSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            value={docForm.title}
            onChange={handleDocChange}
            className="w-full px-3 py-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={docForm.description}
            onChange={handleDocChange}
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="url"
            name="url"
            placeholder="Document URL"
            required
            value={docForm.url}
            onChange={handleDocChange}
            className="w-full px-3 py-2 border rounded"
          />
          <motion.button type="submit" whileHover={{ scale: 1.02 }} disabled={loading}
            className="bg-emerald-600 text-white py-2 px-4 rounded w-full">
            {loading ? 'Uploading...' : 'Upload Document'}
          </motion.button>
        </form>
      </div>

    {/* Videos List */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold text-emerald-700 mb-2">Uploaded Videos</h3>
        <ul className="space-y-2">
          {videos.length === 0 && <li className="text-gray-500">No videos uploaded.</li>}
          {videos.map((v) => (
            <li key={v._id} className="flex justify-between items-center border-b py-2">
              <div>
                <div>
                  <span className="font-medium">{v.title}</span> —{" "}
                  <a
                    href={v.url}
                    className="text-emerald-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
                <div className="text-sm text-gray-600">{v.description}</div>
              </div>
              <button
                onClick={() => handleDeleteVid(v._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Documents List */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold text-emerald-700 mb-2">Uploaded Documents</h3>
        <ul className="space-y-2">
          {docs.length === 0 && <li className="text-gray-500">No documents uploaded.</li>}
          {docs.map((d) => (
            <li key={d._id} className="flex justify-between items-center border-b py-2">
              <div>
                <div>
                  <span className="font-medium">{d.title}</span> —{" "}
                  <a
                    href={d.url}
                    className="text-emerald-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
                <div className="text-sm text-gray-600">{d.description}</div>
              </div>
              <button
                onClick={() => handleDeleteDoc(d._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default MaterialUpload;