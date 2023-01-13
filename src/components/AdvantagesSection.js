import Image from 'next/image'
import React from 'react'
import SectionHeading from './SectionHeading'

const AdvantagesSection = ({data}) => {
  return (
    <div class="my-10 mx-auto px-[5%] lg:px-4 flex flex-col items-center" >
        <SectionHeading>Why you should join this class?</SectionHeading>
        <ul>
            {data.advantages.map((adv)=>{
                return <li key={adv.id}>
                    <div class="flex items-center mb-3">
                        <div class="mr-2">
                        <Image src="/images/checked-circle.svg" alt="" width={28} height={28}/>
                        </div>
                        <h4 className='text-2xl font-thin'>{adv.text}</h4>
                    </div>
                </li>
            })}
        </ul>
    </div>
  )
}

export default AdvantagesSection