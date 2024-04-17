'use client'
import { useEffect } from "react";
import styles from "./page.module.css";
import Intro from "@/component/intro/intro";
import Description from "@/component/Description/description";
import Project from "@/component/Projects/project";

export default function Home() {

useEffect(()=>{
  (
    async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
    }
  )()
},[])


  return (
    <main className={styles.main}>
      <Intro/>
      <Description/>
      <Project/>
    </main>
  );
}
