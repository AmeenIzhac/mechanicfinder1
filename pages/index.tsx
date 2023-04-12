import Link from "next/link";
import s1 from "../styles/index.module.scss";
import { useState, useRef } from "react";

export default function Home() {
  const [showCar, setShowCar] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShowCar(true);
    } else {
      setShowCar(false);
    }
  };
  return (
    <div className={s1.main}>
      <div className={s1.nav}>
        <h1 className={s1.title}>FMC</h1>
      </div>
      <div className={s1.content}>
        <div className={s1.leftDiv}>
          <h1 className={s1.enterReg}>Enter Reg</h1>
          <input className={s1.inputReg} onKeyDown={handleKeyDown} />
        </div>
        <div className={s1.divider} />
        <div className={s1.rightDiv}>
          <h1 className={s1.isYourCar}>Is This Your Car?</h1>
          <div className={s1.yesOrNo}>
            <button className={s1.btn}>
              <Link href="/SelectService">Yes</Link>
            </button>
            <button className={s1.btn}>No</button>
          </div>
          {showCar ? (
            <>
              <img src="car.png" />
              <h1 className={s1.carName}>SEAT Leon</h1>
            </>
          ) : null}
        </div>
        <div></div>
      </div>
    </div>
  );
}
