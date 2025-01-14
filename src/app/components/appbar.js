"use client";
import React, { use, useState } from "react";
import styles from "./styles/appbar.module.css";
import { FaHome, FaHouseUser, FaInstagram } from "react-icons/fa";
import {
  AtSymbolIcon,
  Bars3BottomLeftIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
export default function Appbar() {
  const [isopen, setIsopen] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.name}>
        <AtSymbolIcon className={styles.ticon} />
        <p className={styles.title}>AT</p>
      </div>
      <div className={isopen ? styles.icons : styles.icons1}>
        <Link href="">
          {" "}
          <HomeIcon className={styles.icon} />
        </Link>
        <Link href="">
          <MagnifyingGlassIcon className={styles.icon} />
        </Link>
        <Link href="">
          <BriefcaseIcon className={styles.icon} />
        </Link>
        <Link href="">
          <ChatBubbleOvalLeftEllipsisIcon className={styles.icon} />
        </Link>
        <Link href="">
          <UserCircleIcon className={styles.icon} />
        </Link>
      </div>
      <button className={styles.btn}>LogOut</button>
      <Bars3BottomLeftIcon
        className={styles.menu}
        onClick={() => {
          setIsopen(!isopen);
        }}
      />
    </div>
  );
}
