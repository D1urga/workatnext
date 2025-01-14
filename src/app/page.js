"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Circle from "./components/circle.js";
import { AtSymbolIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [otp, setOtp] = useState(false);
  return (
    <div className={styles.main}>
      {login ? (
        <div className={styles.div1}>
          <div className={styles.ti}>
            <div className={styles.name}>
              <AtSymbolIcon className={styles.ticon} />
              <p className={styles.title}>AT</p>
            </div>
          </div>
          <input className={styles.input} placeholder="Username"></input>
          <input className={styles.input} placeholder="Email"></input>
          <input className={styles.input} placeholder="Password"></input>
          <button className={styles.btn}>Login</button>
          <div className={styles.option}>
            <p
              className={styles.p1}
              onClick={() => {
                setLogin(!login);
              }}
            >
              Dont have account? Signup
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.div1}>
          {otp ? (
            <>
              <div className={styles.ti}>
                <div className={styles.name}>
                  <AtSymbolIcon className={styles.ticon} />
                  <p className={styles.title}>AT</p>
                </div>
              </div>
              <input className={styles.input} placeholder="Username"></input>
              <input className={styles.input} placeholder="Email"></input>
              <input className={styles.input} placeholder="Password"></input>
              <button className={styles.btn}>Signup</button>
            </>
          ) : (
            <>
              <div className={styles.ti}>
                <div className={styles.name}>
                  <AtSymbolIcon className={styles.ticon} />
                  <p className={styles.title}>AT</p>
                </div>
              </div>
              <input className={styles.input} placeholder="Enter otp"></input>
              <button className={styles.btn}>Verify</button>
            </>
          )}
          <div className={styles.option}>
            <p
              className={styles.p1}
              onClick={() => {
                setLogin(!login);
              }}
            >
              Have account? Login
            </p>
          </div>
        </div>
      )}
      <div className={styles.div2}>
        <img src="bg2.svg" className={styles.img}></img>
      </div>
    </div>
  );
}
