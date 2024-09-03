"use client";
import { motion } from "framer-motion";
import ByteGuardianLogo from "@/public/image/ByteGuardian.svg";

export default function DataFootprintResult({ onNext, onBack }) {
  return (
    <div className="flex flex-col m-auto max-w-4xl justify-between min-h-screen bg-[#1c1c1c] z-500">
      <div className="top-0 bg-[#1c1c1c] w-full px-4">
        <div className="flex w-full items-center justify-between bg-[#1c1c1c]">
          <button onClick={onBack} className="flex py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          <ByteGuardianLogo />
          <div className="w-6 h-6" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col pt-6 gap-2"
        >
          <h1 className="text-2xl text-white">
            <span className="text-[#37ebfc]">인스타그램</span>은 <br /> 10건의
            정보를 활용하고 있어요
          </h1>
          <p className="text-gray-500 text-base">
            아래에서 자세히 확인해보세요
          </p>
        </motion.div>
      </div>

      <button
        onClick={onNext}
        className="fixed bottom-0 left-0 right-0 m-auto max-w-4xl p-6 z-50 bg-gradient-cta"
      >
        <div className="flex justify-center w-full py-4 bg-[#37EBFC] rounded-xl text-[#1c1c1c] text-lg font-semibold transition-all duration-300">
          끝내기
        </div>
      </button>
    </div>
  );
}
