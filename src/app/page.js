"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Circle from "./components/circle.js";
import { AtSymbolIcon } from "@heroicons/react/20/solid";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const getuser = localStorage.getItem("userid");
    if (getuser) {
      router.push("/landingpage");
    }
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formDataRegister, setFormDataRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formDataOtp, setFormDataOtp] = useState({
    otp: "",
  });
  const [login, setLogin] = useState(true);
  const [otp, setOtp] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await axios.post(
        "https://workatbackend.onrender.com/api/v1/user/register",
        formDataRegister
      );
      setMessage(response.data.message);
      setTimeout(() => {
        setMessage("");
      }, 5000);
      setOtp(true);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
      setTimeout(() => {
        setMessage("");
      }, 5000);
      console.log(error);
    }
    setIsloading(false);
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await axios.post(
        "https://workatbackend.onrender.com/api/v1/user/login",
        formData,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // Redirect to home page

        setMessage(response.data.message);
        setTimeout(() => {
          setMessage("");
        }, 5000);
        localStorage.setItem("userid", response.data.data.user._id);
        // localStorage.setItem("key", "value");
        router.push("/landingpage");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");

      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
    setIsloading(false);
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await axios.post(
        "https://workatbackend.onrender.com/api/v1/user/verify",
        {
          email: formDataRegister.email,
          otp: formDataOtp.otp,
        }
      );
      setMessage(response.data.message);
      setTimeout(() => {
        setMessage("");
      }, 5000);
      setLogin(true);
      setOtp(false);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
      setTimeout(() => {
        setMessage("");
      }, 5000);
      console.log(error);
    }
    setIsloading(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleChangeR = (e) => {
    const { name, value } = e.target;
    setFormDataRegister({ ...formDataRegister, [name]: value });
  };
  const handleChangeO = (e) => {
    const { name, value } = e.target;
    setFormDataOtp({ ...formDataOtp, [name]: value });
  };
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
          <form className={styles.form} onSubmit={handleSubmitLogin}>
            <input
              className={styles.input}
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            ></input>
            <input
              className={styles.input}
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
            ></input>
            <button className={styles.btn} type="submit">
              {!isLoading ? "Login" : "Please wait"}
            </button>
          </form>
          <div className={styles.option}>
            <p
              className={styles.p1}
              onClick={() => {
                setLogin(!login);
                setOtp(false);
              }}
            >
              Dont have account? Signup
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.div1}>
          {!otp ? (
            <>
              <div className={styles.ti}>
                <div className={styles.name}>
                  <AtSymbolIcon className={styles.ticon} />
                  <p className={styles.title}>AT</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className={styles.form}>
                {" "}
                <input
                  className={styles.input}
                  type="text"
                  name="username"
                  value={formDataRegister.username}
                  onChange={handleChangeR}
                  required
                  placeholder="Username"
                ></input>
                <input
                  className={styles.input}
                  type="text"
                  name="email"
                  value={formDataRegister.email}
                  onChange={handleChangeR}
                  required
                  placeholder="Email"
                ></input>
                <input
                  className={styles.input}
                  type="text"
                  name="password"
                  value={formDataRegister.password}
                  onChange={handleChangeR}
                  required
                  placeholder="Password"
                ></input>
                <button className={styles.btn} type="submit">
                  {!isLoading ? "Signup" : "Please wait"}
                </button>
              </form>
            </>
          ) : (
            <>
              <div className={styles.ti}>
                <div className={styles.name}>
                  <AtSymbolIcon className={styles.ticon} />
                  <p className={styles.title}>AT</p>
                </div>
              </div>
              <form onSubmit={handleOtp} className={styles.form}>
                <input
                  className={styles.input}
                  type="text"
                  name="otp"
                  value={formDataOtp.otp}
                  onChange={handleChangeO}
                  required
                  placeholder="Enter otp"
                ></input>
                <button className={styles.btn} type="submit">
                  {!isLoading ? "Verify" : "Please wait"}
                </button>
              </form>
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
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}
