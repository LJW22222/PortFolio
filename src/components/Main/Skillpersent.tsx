import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from '@/components/Main/styles/Skillpersent.module.css'

interface PercentageGaugeProps {
  percentage: number; // 타입을 명시적으로 지정
}

const PercentageGauge: React.FC<PercentageGaugeProps> = ({ percentage }) => {
  return (
    <div className={styles.box}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}

export default PercentageGauge;
