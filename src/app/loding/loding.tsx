// 필요한 모듈 및 스타일 import
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "@/app/loding/lodingstyle.module.css";

// 로딩 중 페이지 컴포넌트
const Loading = () => {
  return (
    <div className={`${styles.loadingContainer} text-center`}>
      <h1 className={`display-4 ${styles.loadingText}`}>로딩 중</h1>
      <div className={`spinner-border ${styles.spinner}`} role="status">
        <span className="sr-only">로딩 중...</span>
      </div>
    </div>
  );
}

export default Loading;
