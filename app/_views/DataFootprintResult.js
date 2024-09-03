"use client";
import { motion } from "framer-motion";
import ByteGuardianLogo from "@/public/image/ByteGuardian.svg";

export default function DataFootprintResult({ onNext, onBack }) {
  return (
    <div className="flex flex-col m-auto max-w-3xl justify-between min-h-dvh bg-[#1c1c1c] z-500">
      <div className="top-0 bg-[#1c1c1c] w-full px-4">
        <div className="flex w-full items-center justify-between bg-[#1c1c1c]">
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
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col pt-6 gap-2"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl text-white">
            <span className="text-[#37ebfc]">인스타그램</span>은 <br /> 10건의
            정보를 활용하고 있어요
          </h1>
          <p className="text-gray-500 text-base">
            아래에서 자세히 확인해보세요
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
            delay: 0.25,
          }}
          className="flex flex-col gap-8 mt-12"
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-2xl">
            <h3 className="text-lg font-[540]">익명 정보 활용</h3>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
                  fill="white"
                  fill-opacity="0.75"
                />
              </svg>
              <p className="text-white">구매 내역</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-2xl">
            <h3 className="text-lg font-[540]">개인 정보 활용</h3>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
                  fill="white"
                  fill-opacity="0.75"
                />
              </svg>
              <p className="text-white">위치 정보</p>
            </div>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
                  fill="white"
                  fill-opacity="0.75"
                />
              </svg>
              <p className="text-white">방문 내역</p>
            </div>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
                  fill="white"
                  fill-opacity="0.75"
                />
              </svg>
              <p className="text-white">결제 수단</p>
            </div>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
                  fill="white"
                  fill-opacity="0.75"
                />
              </svg>
              <p className="text-white">사용자 콘텐츠</p>
            </div>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
                  fill="white"
                  fill-opacity="0.75"
                />
              </svg>
              <p className="text-white">사용 기록</p>
            </div>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
                  fill="white"
                  fill-opacity="0.75"
                />
              </svg>
              <p className="text-white">기타 정보</p>
            </div>
          </div>
        </motion.div>
      </div>

      <button
        onClick={onNext}
        className="fixed bottom-0 left-0 right-0 m-auto max-w-3xl p-6 z-50 bg-gradient-cta"
      >
        <div className="flex justify-center w-full py-4 bg-[#37EBFC] rounded-xl text-[#1c1c1c] text-lg font-semibold transition-all duration-300">
          끝내기
        </div>
      </button>
    </div>
  );
}
