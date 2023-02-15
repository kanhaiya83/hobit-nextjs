import React from 'react'
import { BackgroundImageUpload, TeaserUpload } from '.'
import { FormControlWrapper } from './Form'

const BackgroundImageSection = ({formData,setFormData}) => {
  return (
    <div class="w-full">
              <img className='w-full max-w-[700px] mx-auto' src={formData.bgImage} alt=""/>
              <div class="border-b border-slate-700 w-full mt-4"></div>
              
              <h1 className='w-full text-center text-2xl my-6'>Update Teaser</h1>
              <BackgroundImageUpload setFormData={setFormData} />
    </div>
  )
}

export default BackgroundImageSection