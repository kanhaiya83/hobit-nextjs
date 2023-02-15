import React from 'react'
import { TeaserUpload } from '.'
import { FormControlWrapper } from './Form'

const TeaserSection = ({formData,setFormData}) => {
  return (
    <div class="w-full">
              <a
                className="block text-lg text-blue-500 underline w-full text-center"
                href={formData?.teaser?.src}
                target="_blank"
                rel="noreferrer"
              >
                Watch Current
              </a>
              <div class="border-b border-slate-700 w-full mt-4"></div>
              
              <h1 className='w-full text-center text-2xl my-6'>Update Teaser</h1>
              <TeaserUpload setFormData={setFormData} />
    </div>
  )
}

export default TeaserSection