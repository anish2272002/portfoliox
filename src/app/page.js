"use client"
import Image from "next/image"
import NavBar from "@/components/navbar"
import Landing from "@/components/landing"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Certifications from "@/components/certification"
import Extra from "@/components/extra"
import Footer from "@/components/footer"
import { useEffect } from "react"

export default function Home() {
  useEffect(()=>{
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap");
    }
  },[])
  return (
    <>
      <NavBar/>
      <Landing/>
      <About/>
      <Experience/>
      <Projects/>
      <Certifications/>
      <Extra/>
      <Footer/>
    </>
  )
}
