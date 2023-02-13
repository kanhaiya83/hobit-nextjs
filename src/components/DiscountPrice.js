import React from 'react'

export const DiscountPrice = ({price}) => {
  return (
    <>
    <span className="line-through text-slate-200 font-thin">1999</span>
        <span className="ml-1 text-xl md:text-2xl font-bold">&#x20b9;{price}</span>
        </>
  )
}
