
import { useState } from "react";

export default function VideoUpload() {
  const [video, setVideo] = useState(null);
  const [desc, setDesc] = useState("");
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideo(file);
      setPreview(URL.createObjectURL(file));
    }
  };


  async function upload() {
    if (!video) {
      alert("Please select a video to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", video);
    formData.append("description", desc);
    formData.append("category", category);

    try {
      const response = await fetch("http://localhost:8080/videoUpload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed.");
        return<div><h1>something  wrong</h1></div>
      }

      const result = await response.json();
      console.log("Success", result);
      alert("Video uploaded successfully!");
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  return (
    <div className="fixed left-[20%] top-[25%] flex flex-row items-center justify-center h-[400px] w-[900px] bg-gray-900 p-4">
      <div className="m-2.5">
        <input
          className="m-1 mt-1 block w-[400px] p-2 border border-black bg-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <div className="m-1.5">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700"></label>
          <select
            id="category"
            className="mt-1 block w-[400px] p-2 border border-black bg-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="movie">Movie</option>
            <option value="vlog">Vlog</option>
            <option value="song">Song</option>
            <option value="news">News</option>
            <option value="comedy">Comedy</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="w-full max-w-md p-4 bg-black rounded-2xl shadow-lg h-full">
        <div className="flex flex-col items-center">
          <label
            htmlFor="video-upload"
            className="cursor-pointer flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-white rounded-lg bg-black hover:bg-gray-100"
          >
            <p className="mt-2 text-gray-500">Click to upload a video</p>
          </label>
          <input type="file" id="video-upload" accept="video/*" className="hidden" onChange={handleFileChange} />

          {preview && <video className="mt-4 w-full h-[140px] rounded-lg" controls src={preview} />}

          <button className="mt-3 w-full hover:text-gray-700" onClick={upload}>
            Upload Video
          </button>
        </div>
      </div>
    </div>
  );
}
