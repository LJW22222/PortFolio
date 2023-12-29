"use client";
import React, { useEffect, useState } from 'react';
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
// import Projectinfo from "@/app/ProjectInformation/page";
import MobileBoxPage from '@/components/Main/MainPage';
import style from '@/app/allstyle.module.css';
import Lodingpage from '@/app/loding/loding'

export default function Home() {
  // Assuming you have a way to determine the session name and its value
  const [sessionName, setSessionName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const storedSessionName = sessionStorage.getItem("pagenumber");
    if (storedSessionName) {
      setSessionName(storedSessionName);
    }
    setIsLoading(false);
  }, []); 
  return (
    <>
    <body className={style.body}>
      <div className={style.all}>
        <div className={style.headerline}>
          <Header />
        </div>
        <div className={style.mobileboxline}>
        {isLoading ? <Lodingpage /> : <MobileBoxPage />}
        </div>

      </div>
      <div className={style.footerline}>
          <Footer />
        </div>
      </body>
    </>
  );
}
