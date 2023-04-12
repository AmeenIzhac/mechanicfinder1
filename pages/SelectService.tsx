import Link from "next/link";
import s1 from "../styles/SelectService.module.scss";

const SelectService = () => {
  return (
    <div className={s1.main}>
      <div className={s1.titleDiv}>
        <h1 className={s1.title}>Please select the service you would like</h1>
      </div>
      <div className={s1.btnsDiv}>
        <button className={s1.btn}>
          <Link href="/Booking">Servicing / MOT</Link>
        </button>
        <button className={s1.btn}>
          <Link href="/Booking">Repair</Link>
        </button>
        <button className={s1.btn}>
          <Link href="/Booking">Outer Body</Link>
        </button>
      </div>
    </div>
  );
};

export default SelectService;
