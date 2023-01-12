import React from 'react'
import { twMerge } from 'tailwind-merge'

const SectionHeading = ({children,className}) => {
  return (
    <h1 className={twMerge(`text-4xl font-bold text-center text-slate-800 w-full mb-8 ${className}`)}>{children}</h1>
  )
}

export default SectionHeading