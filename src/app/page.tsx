"use client";
import React, { useEffect, useState } from 'react';
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import MobileBoxPage from '@/components/Main/MainPage';
import style from '@/app/allstyle.module.css';
import Lodingpage from '@/app/loding/loding';

export default function Home() {
  const [sessionName, setSessionName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedSessionName = sessionStorage.getItem("pagenumber");
    if (storedSessionName) {
      setSessionName(storedSessionName);
    }

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []); 

  return (
    <>
      <div className={style.body}>
        <div className={style.headerline}>
          <Header />
        </div>
        <div className={style.mobileboxline}>
          {isLoading ? <Lodingpage /> : <MobileBoxPage />}
        </div>
        <div className={style.footerline}>
          <Footer />
        </div>
      </div>
    </>
  );
}
