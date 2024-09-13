'use client'
import Footer from "@/components/Footer"
import Header from "@/components/Hero"
import About from "@/components/About"
import Slider from "@/components/CardSlider"

export default function Component() {
  return (
    <div className="flex flex-col justify-evenly gap-6">
    <Header/>
    <About/>
    <Slider/>
    <Footer/>
    </div>
  )
}