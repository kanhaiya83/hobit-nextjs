import Image from 'next/image'
import React from 'react'
import GradientText from './GradientText'
import SectionHeading from './SectionHeading'

const AdvantagesSection = ({data}) => {
  return (
    <div className="my-10 mx-auto px-[5%] lg:px-4 flex flex-col items-center max-w-[850px]" >
        <SectionHeading><GradientText>Why you should join this class?</GradientText></SectionHeading>
        <ul>
            {data.advantages.map((adv)=>{
                return <li key={adv.id}>
                    <div className="flex items-center mb-3">
                        <div className="mr-2 relative w-5 h-5 md:w-8 md:h-8 flex-shrink-0">
                        <Image src="/images/checked-circle.svg" alt="" fill={true} style={{objectFit:"contain"}}/>
                        </div>
                        <h4 className='text-sm md:text-2xl font-medium md:font-normal'>{adv.text}</h4>
                    </div>
                </li>
            })}
        </ul>
    </div>
  )
}

export default AdvantagesSection