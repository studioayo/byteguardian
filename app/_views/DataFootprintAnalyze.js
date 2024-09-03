"use client";
import { useEffect } from "react";
import Image from "next/image";
import ByteGuardianLogo from "@/public/image/ByteGuardian.svg";
import { motion } from "framer-motion";

export default function DataFootprintMain({ onNext, onBack }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="flex flex-col m-auto max-w-3xl min-h-dvh bg-[#1c1c1c] z-500">
      <div className="flex w-full items-center justify-between px-4">
        <button onClick={onBack} className="flex py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <ByteGuardianLogo className="mt-[1px]" />
        <div className="w-6 h-6" />
      </div>
      <div className="flex flex-col flex-grow justify-between px-4 pb-[108px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,

            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col pt-6 gap-2"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl text-white">
            <span className="text-[#37ebfc]">인스타그램</span>의 <br /> 데이터
            발자국을 쫓고 있어요
          </h1>
          <p className="text-gray-500 text-base">열심히 달려가는 중 🏃‍♂️‍➡️</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,

            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex items-center justify-center flex-grow"
          viewport={{ once: true }}
        >
          <Image
            src="/image/running.png"
            width={200}
            height={200}
            alt="Running Man"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
