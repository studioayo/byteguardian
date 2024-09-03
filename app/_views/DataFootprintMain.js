"use client";
import RegistrationVector from "@/public/image/registration.svg";
import ByteGuardianLogo from "@/public/image/ByteGuardian.svg";
import { motion } from "framer-motion";

export default function DataFootprintMain({ onNext }) {
  return (
    <div className="flex flex-col m-auto max-w-4xl justify-between min-h-screen bg-[#1c1c1c] z-500">
      <div className="top-0 bg-[#1c1c1c] w-full px-4 items-center flex flex-col">
        <div className="flex w-full items-center py-4 justify-between bg-[#1c1c1c]">
          <div className="w-6 h-6" />
          <span className="pt-[1px]">
            <ByteGuardianLogo />
          </span>
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
        >
          <div className="flex flex-col items-center justify-center pt-12 gap-2">
            <p className="text-[#37EBFC] text-base">
              ByteGuardian에서는 모두 무료
            </p>
            <h1 className="text-2xl text-white text-center">
              내 정보가 어떻게 활용되는지 <br /> 한 눈에 확인할 수 있어요
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="mt-[70px]"
        >
          <RegistrationVector />
        </motion.div>
      </div>

      <button
        onClick={onNext}
        className="fixed bottom-0 left-0 right-0 m-auto max-w-4xl p-6 z-50 bg-gradient-cta"
      >
        <div className="flex justify-center w-full py-4 bg-[#37EBFC] rounded-xl text-[#1c1c1c] text-lg font-semibold transition-all duration-300">
          시작하기
        </div>
      </button>
    </div>
  );
}
