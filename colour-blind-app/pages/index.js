//import Head from "next/head";
//import Image from "next/image";
//import styles from "../styles/Home.module.css";
import Link from "next/link"
import "../public/dark.js"

export default function Home() {
    return (
      <div className="bg-white w-full h-screen flex justify-center items-center">
        <div className="max-w-2xl mx-auto">
          <button onClick="dark">Light</button>
          <button>Dark</button>
          <button>OS</button>
          <p className="text-lg font-medium mt-10">Eye Test</p>
          <h1 className="text-3xl">Colour Blind Test</h1>
          <p className="mt-10">
            What is color blindness? If you have color blindness, it means you
            see colors differently than most people. Most of the time, color
            blindness makes it hard to tell the difference between certain
            colors. Usually, color blindness runs in families. There's no cure,
            but special glasses and contact lenses can help.{" "}
            <Link href="/more" className="underline text-slate-400">
              Learn more
            </Link>
          </p>
          <button className="px-20 py-3 bg-black text-white rounded-xl mt-10 border-2 border-solid border-slate-900 shadow-sm shadow-[#B6E0FE] hover:border-[#B6E0FE] hover:bg-[#B6E0FE] hover:scale-110 duration-200 hover:shadow-none hover:text-[#0F609B] font-bold">
            Get started
          </button>
        </div>
      </div>
    );
}