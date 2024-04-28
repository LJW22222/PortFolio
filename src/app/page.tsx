"use client";
import React, { useEffect, useState } from 'react';
import Footer from "@/components/layouts/Footer";
import style from '@/app/allstyle.module.css';
import Header from '@/components/layouts/HeaderList';


export default function Home() {
  
  return (
    <>
      <div className={style.body}>
      <Header />
      <div className="background-image-container" id="home"></div>
     
      <div className={style.footerline}>
        <Footer />
      </div>

      </div>
    </>
  );
}
