import React from "react";
import styles from "./styles/appbar.module.css";
import { FaHome, FaHouseUser, FaInstagram } from "react-icons/fa";
import {
  AtSymbolIcon,
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
  return (
    <div className={styles.main}>
      <div className={styles.name}>
        <AtSymbolIcon className={styles.ticon} />
        <p className={styles.title}>AT</p>
      </div>
      <div className={styles.icons}>
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
    </div>
  );
}
