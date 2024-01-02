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

    // 로딩 중을 2초 동안 보이게 하기
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // 컴포넌트가 언마운트되면 타임아웃 클리어
    return () => clearTimeout(loadingTimeout);
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
