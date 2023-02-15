import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { cloneDeep } from "lodash";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { uploadFile } from "../utils/firebase";
const getButtonText=(percent)=>{
    if(percent===100){
        return "Uploaded!"
    }
    if(percent && percent>0){
        return "Uploading("+percent+"%)"
    }
    return "Upload"
}
export const TeaserUpload = ({ setFormData }) => {
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(false);

  // Handles input change event and updates state
  function handleChange(event) {
    setPercent(false)
    setFile(event.target.files[0]);
  }

  const onComplete = (url) => {
    setFormData((prev) => {
      const clonedState = cloneDeep(prev);
      clonedState.teaser.src = url;
      return clonedState;
    });
  };
  function handleUpload() {
    uploadFile({ file, setPercent, onComplete, folderName: "teasers" });
  }
  const btnText =getButtonText(percent)
  return (
    <div class="flex flex-col my-2 gap-2">
        <label for="">Add new teaser</label>
      <input type="file" accept="video/*" onChange={handleChange} />
      {file && <button
        className={twMerge(`bg-slate-800 p-3 rounded ${!file && "opacity-30"}`)}
        onClick={handleUpload}
        disabled={!file}
      >
        {btnText}
      </button>
      }
    </div>
  );
};

export const TestimonialUpload = ({ setFormData }) => {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(false);
  
    function handleChange(event) {
        setPercent(false)
      setFile(event.target.files[0]);
    }
  
    const onComplete = (url) => {
      setFormData((prev) => {
        const clonedState = cloneDeep(prev);
        clonedState.testimonialsImages =[...clonedState.testimonialsImages,url]
        return clonedState;
      });
    };
    function handleUpload() {
      uploadFile({
        file,
        setPercent,
        onComplete,
        folderName: "testimonialsImages",
      });
    }
    const btnText =getButtonText(percent)
    return (
      <div class="flex flex-col mt-10  gap-2">
          <label for="">Add new testimonials image</label>
  
        <input type="file" accept="image/*" onChange={handleChange} />
        {file && <button
          className={twMerge(`bg-slate-800 p-3 rounded ${!file && "opacity-30"}`)}
          onClick={handleUpload}
          disabled={!file}
        >
          {btnText}
        </button>
        }
      </div>
    );
  };
  export const VideoTestimonialUpload = ({ setFormData,setUploadedVideoURL }) => {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(false);
  
    function handleChange(event) {
        setPercent(false)
      setFile(event.target.files[0]);
    }
  
    const onComplete = (url) => {
        setUploadedVideoURL(url)
      setFormData((prev) => {
        const clonedState = cloneDeep(prev);
        clonedState.videoTestimonials =[...clonedState.videoTestimonials,{src:url}]
        return clonedState;
      });
    };
    function handleUpload() {
      uploadFile({
        file,
        setPercent,
        onComplete,
        folderName: "testimonialsVideos",
      });
    }
    const btnText =getButtonText(percent)
    return (
      <div class="flex flex-col mt-10  gap-2">
          <label for="">Add new testimonials video</label>
  
        <input type="file" accept="video/*" onChange={handleChange} />
        {file && <button
          className={twMerge(`bg-slate-800 p-3 rounded ${!file && "opacity-30"}`)}
          onClick={handleUpload}
          disabled={!file}
        >
          {btnText}
        </button>
        }
      </div>
    );
  };
  export const ThumbnailUpload = ({ setFormData ,uploadedVideoURL}) => {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(false);
  
    function handleChange(event) {
        setPercent(false)
      setFile(event.target.files[0]);
    }
  
    const onComplete = (url) => {
      setFormData((prev) => {
        const clonedState = cloneDeep(prev);
        clonedState.videoTestimonials =clonedState.videoTestimonials.map(t=>{
            if(t.src===uploadedVideoURL){
                t.thumbnail=url
            }
            return t
        })
        return clonedState;
      });
    };
    function handleUpload() {
      uploadFile({
        file,
        setPercent,
        onComplete,
        folderName: "videoTestimonialThumbnails",
      });
    }
    const btnText =getButtonText(percent)
    return (
      <div class="flex flex-col mt-10  gap-2">
          <label for="">Add thumbnail</label>
  
        <input type="file" accept="image/*" onChange={handleChange} />
        {file && <button
          className={twMerge(`bg-slate-800 p-3 rounded ${!file && "opacity-30"}`)}
          onClick={handleUpload}
          disabled={!file}
        >
          {btnText}
        </button>
        }
      </div>
    );
  };
