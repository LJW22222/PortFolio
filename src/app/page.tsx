"use client";
import React, { useEffect, useState } from 'react';
// import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import MobileBoxPage from '@/components/Main/MainPage';
import style from '@/app/allstyle.module.css';
import Lodingpage from '@/app/loding/loding';
import Header from '@/components/layouts/HeaderList';


export default function Home() {
  
  return (
    <>
      <div className={style.body}>
      <Header />
      <div className="background-image-container" id="home"></div>
      
          <div className={style.mobileboxline}>
            <MobileBoxPage />
          </div>
          <div className={style.footerline}>
            <Footer />
          </div>

      </div>
    </>
  );
}
