import { useState } from "react";
//import { Card, CardContent } from "@/components/ui/card";
//import { Upload } from "lucide-react";

export default function VideoUpload() {
  const [video, setVideo] = useState(null);
  const [Desc, setDesc] = useState(null);
  const [preview, setPreview] = useState(null);
  const [category,setCategory]= useState(null)

  console.log("upload")

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideo(file);
      setPreview(URL.createObjectURL(file));
    }
  };
   var data={
    fileData:video,
    description:Desc,
    category:category

   }

   async function upload(data){

            try{
           const response =await fetch('http:localhost:8080/uploadFile',{
                method:"POST",
                headers :{
                    "contentType": "application.json()"
                },
                body: JSON.stringify(data)
             })
          
           if(!response.ok){
               throw new Error("Error");
           }
           const result=response.json;
           console("success",result);
         
          }
         catch(error){
          console.log("error", error.message)

         }
         
        }
       
  const handleUpload = () => {
    if (!video) {
      alert("Please select a video to upload.");
      return;
    }
    upload(data)
    alert("Video uploaded successfully!");
  };

  return (
    <div className="fixed left-[20%] top-[25%] flex flex-col items-center justify-center h-[400px] w-[900px] bg-gray-900 p-4">

        <input className="m-1 mt-1 block w-[400px] p-2 border border-black bg-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="description"
            value={Desc}
            onChange={(e)=> setDesc(e.target.value)}
          />

  <div className="m-1.5">
    <label for="category" class="block text-sm font-medium text-gray-700"></label>
    <select id="category" class="mt-1 block w-[400px] p-2 border border-black bg-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" value={category} onChange={(e)=> setCategory(e.target.value)}>
      <option value="movie">Movie</option>
      <option value="vlog">Vlog</option>
      <option value="song">Song</option>
      <option value="news">News</option>
      <option value="comedy">comedy</option>
    </select>
  </div>



      <div className="w-full max-w-md p-4 bg-black rounded-2xl shadow-lg">
      
        <div className="flex flex-col items-center">
          <label
            htmlFor="video-upload"
            className="cursor-pointer flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-white rounded-lg bg-black hover:bg-gray-100"
          >
            <div className="h-10 w-10 text-gray-500" />
            <p className="mt-2 text-gray-500">Click to upload a video</p>
          </label>
          <input
            type="file"
            id="video-upload"
            accept="video/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {preview && (
            <video
              className="mt-4 w-full rounded-lg"
              controls
              src={preview}
            />
          )}

          <button className="mt-4 w-full" onClick={handleUpload}>
            Upload Video
          </button>
        </div>
      </div>
    </div>
  );
}
