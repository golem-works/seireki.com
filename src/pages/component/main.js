
import React, { useState } from 'react';
import style from '../../styles/main.module.css';
import EducationYears from './gakureki';
import Tukaikata from './tukaikata'
import Link from 'next/link';

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [japaneseEra, setJapaneseEra] = useState('');

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const seireki = selectedYear;
    if (seireki >= 2019) {
      const reiwa = seireki - 2018;
      setJapaneseEra(reiwa === 1 ? "令和元年" : `令和${reiwa}年`);
    } else if (seireki >= 1989) {
      const heisei = seireki - 1988;
      setJapaneseEra(heisei === 1 ? "平成元年" : `平成${heisei}年`);
    } else if (seireki >= 1926) {
      const syouwa = seireki - 1925;
      setJapaneseEra(syouwa === 1 ? "昭和元年" : `昭和${syouwa}年`);
    } else {
      setJapaneseEra('');
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1925 + 1 }, (v, k) => 1925 + k);

  return (

    <div className={style.bodyContainer}> 

      <h1 className={style.title}>西暦変換.COM</h1>

   <div className={style.linkContainer}>
      <Link href ="/component/tukaikata">使い方</Link>
    </div>

      <div className={style.mainContent}>

        <p className={style.text}>※変換したい西暦を選んでね</p> 
        <div className={style.container}>
          <form onSubmit={handleSubmit}>
            <select className={style.box} value={selectedYear} onChange={handleYearChange}>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <button className={style.btn} type="submit">計算</button>
          </form>
          {japaneseEra && <div className={style.result}>” {selectedYear}年は {japaneseEra} ”</div>}
        </div>
      </div>
      {/* selectedYear を EducationYears コンポーネントに渡す */}
      <EducationYears birthYear={selectedYear - 6} />
      <footer className={style.footer}>
        <p>© 2024 GOLEM WORKS. All rights reserved.</p>
      </footer>
    </div>
  );
}
