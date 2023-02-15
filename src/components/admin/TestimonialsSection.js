import { cloneDeep } from 'lodash';
import React from 'react'
import { TestimonialUpload } from '.';
import { FormControlWrapper } from './Form';

const TestimonialsSection = ({formData,setFormData}) => {
  return (

    <div className='w-full'>
              <div className="flex gap-x-6 gap-y-8 flex-wrap items-stretch">
                {formData.testimonialsImages?.map((img, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        "flex flex-col justify-between items-center gap-3 w-40"
                      }
                    >
                      <div class="w-full relative pt-40 overflow-hidden bg-black">
                        <img
                          src={img}
                          alt=""
                          className="w-full absolute top-0 left-0"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <a
                          href={img}
                          target="_blank"
                          className="block text-lg text-blue-500 underline"
                          rel="noreferrer"
                        >
                          Visit
                        </a>
                        <button
                          className="bg-red-700 mt-2 p-2 rounded"
                          onClick={() => {
                            setFormData((prev) => {
                              const clonedState = cloneDeep(prev);
                              clonedState.testimonialsImages =
                                clonedState.testimonialsImages.filter(
                                  (i) => i != img
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
              <h1 className='w-full text-center text-2xl my-6'>Add new testimonial</h1>
              
              <TestimonialUpload setFormData={setFormData} />
    </div>
  )
}

export default TestimonialsSection