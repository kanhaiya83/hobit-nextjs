import Image from 'next/image'
import React from 'react'

export default function ChatButton() {
  return (
    <div className='fixed right-4 bottom-8 z-20'>
        <a href="https://api.whatsapp.com/send?phone=917042841737" className='block relative w-14 h-14' target="_blank" rel="noreferrer">
        <Image src="/images/whatsapp-rounded.svg" alt="" fill={true} style={{objectFit:"fill"}} />
        </a>
    </div>
  )
}
