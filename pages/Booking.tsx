import s1 from "../styles/Booking.module.scss";

const Booking = () => {
  return (
    <div>
      <div className={s1.titleDiv}>
        <h1 className={s1.title}>
          We believe you require a clutch replacement
        </h1>
      </div>
      <div className={s1.divider1Div}>
        <div className={s1.divider1} />
      </div>
      <div className={s1.contentDiv}>
        <div className={s1.leftDiv}>
          <h1 className={s1.getACall}>
            Get a call from us in 15 minutes, enter your number:
          </h1>
          <input className={s1.input} />
          <button className={s1.btn}>Call Me</button>
        </div>
        <div className={s1.divider2} />
        <div className={s1.rightDiv}>
          <h1 className={s1.selectGarage}>
            Or select the garage in your area:
          </h1>
          <input className={s1.input} />
          <button className={s1.btn}>Find</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
