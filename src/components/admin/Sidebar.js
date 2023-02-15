import React from 'react'
import { twMerge } from 'tailwind-merge'
const navPaths=["Details","Background Image","Teaser","Testimonials","Video Testimonials"]
const Sidebar = ({selectedPath,setSelectedPath,setSelectedPage,selectedPage,pagesData}) => {
  return (
    <div class="w-full flex flex-col items-stretch px-2 py-4 gap-y-4 h-full">
        {navPaths.map(p=>{
            return <button className={twMerge(`bg-[#161616] py-2 text-lg rounded-xl ${selectedPath===p && "bg-dark-primary-color"}`)} onClick={()=>{setSelectedPath(p)}} key={p}>{p}</button>
        })}

          <div class="mt-auto">
            <label for="" class="text-sm text-slate-300 mb-1 block">Page</label>
          <select
            onChange={(e) => {
              setSelectedPage(e.target.value);
            }}
            value={selectedPage}
            className="p-2 bg-transparent border-slate-600 border-2 rounded text-white w-full"
          >
            {pagesData?.map((p, i) => {
              return (
                <option value={i} key={p.campaign_id}>
                  {p.activity_name}
                </option>
              );
            })}
          </select>
          </div>
    </div>
  )
}

export default Sidebar