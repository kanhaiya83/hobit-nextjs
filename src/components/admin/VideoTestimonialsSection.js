import { cloneDeep } from 'lodash';
import React, { useState } from 'react'
import { ThumbnailUpload, VideoTestimonialUpload } from '.';
export const FormControlWrapper = ({ label, children }) => {
  return (
    <div className="my-10 flex flex-col items-start w-full">
      <label className="text-2xl font-medium mb-4">{label}</label>
      {children}
    </div>
  );
};
const  VideoTestimonialsSection = ({formData,setFormData}) => {
  const [uploadedVideoURL, setUploadedVideoURL] = useState(false);

  return (
    <div>
              <div className="flex gap-x-6 gap-y-8 items-stretch w-full">
                {formData.videoTestimonials?.map((testimonial, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        "flex  justify-between items-stretch gap-3 w-full max-w-[300px]"
                      }
                    >
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <div class="w-full overflow-hidden bg-black">
                            <img
                              src={testimonial.thumbnail}
                              alt=""
                              className="w-full"
                            />
                          </div>
                        </div>
                        <a
                          href={testimonial.src}
                          target="_blank"
                          className="block text-lg text-blue-500 underline"
                          rel="noreferrer"
                        >
                          {"Video link " + (i + 1)}
                        </a>
                        <button
                          className="bg-slate-700 mt-2 p-3 rounded"
                          onClick={() => {
                            setFormData((prev) => {
                              const clonedState = cloneDeep(prev);
                              clonedState.videoTestimonials =
                                clonedState.videoTestimonials.filter(
                                  (v) => v.src != testimonial.src
                                );
                              return clonedState;
                            });
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div class="border-b border-slate-700 w-full mt-4"></div>
              <h1 className='w-full text-center text-2xl my-6'>Add new video testimonial</h1>
              <VideoTestimonialUpload setFormData={setFormData} setUploadedVideoURL={setUploadedVideoURL}/>
              <ThumbnailUpload setFormData={setFormData} uploadedVideoURL={uploadedVideoURL}/>
            </div>
  )
}

export default VideoTestimonialsSection