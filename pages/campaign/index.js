import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import GradientText from '../src/components/GradientText'
import TopSection from '../src/components/TopSection'
import AccordionSection from '../src/components/AccordionSection'
import TestimonialSection from '../src/components/TestimonialSection'
import CheckboxSection from '../src/components/CheckboxSection'
import LoginModal from '../src/components/LoginModal'
import { useState } from 'react'
import { auth } from '../src/utils/firebase'
import Header from '../src/components/Header'
// flex flex-col items-center justify-center
export default function CampaignPage() {
  const [isOpen,setIsOpen] = useState(true)
  return (
    <>
<div id="recaptcha-container" style={{width:"100%"}}></div>
<Header/>
<TopSection/>
<TestimonialSection/>
<CheckboxSection/>
<AccordionSection/>
<LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />

    </>
  )
}