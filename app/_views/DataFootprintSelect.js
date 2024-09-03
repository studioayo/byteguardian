/* eslint-disable @next/next/no-img-element */

"use client";
import { useState } from "react";
import Image from "next/image";
import ByteGuardianLogo from "@/public/image/ByteGuardian.svg";
import CheckIcon from "@/public/icon/check.svg";
import { motion } from "framer-motion";

const socialMediaPlatforms = [
  {
    id: "instagram",
    name: "인스타그램",
    logo: "/icon/instagram.webp",
  },
  {
    id: "facebook",
    name: "페이스북",
    logo: "/icon/facebook.webp",
  },
  {
    id: "tiktok",
    name: "틱톡",
    logo: "/icon/tiktok.webp",
  },
  {
    id: "snapchat",
    name: "스냅챗",
    logo: "/icon/snapchat.webp",
  },
  {
    id: "x",
    name: "X (Twitter)",
    logo: "/icon/x.webp",
  },
  {
    id: "threads",
    name: "쓰레드",
    logo: "/icon/threads.webp",
  },
];
// 로고 수정 필요

const SocialMediaSelector = ({ selectedPlatform, onSelect }) => {
  return (
    <div className="flex flex-col gap-6 px-6 py-2">
      <div className="text-xl text-white font-medium flex items-center space-x-2">
        <span>소셜 미디어</span>
        <span>👥</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {socialMediaPlatforms.map((platform) => (
          <div
            key={platform.id}
            onClick={() => onSelect(platform.id)}
            className={`p-4 rounded-lg bg-white/5 flex flex-col items-center justify-between cursor-pointer transition-all relative h-[140px] ${
              selectedPlatform === platform.id
                ? "outline outline-2 outline-cyan-500"
                : ""
            }`}
          >
            <div
              className={`absolute top-2 right-2 transition-opacity ${
                selectedPlatform === platform.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <CheckIcon className="w-6 h-6" />
            </div>
            <div />
            <Image
              src={platform.logo}
              alt={platform.name}
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span
              className={`mt-2 ${
                selectedPlatform === platform.id
                  ? "text-cyan-400 font-semibold"
                  : "text-white/75"
              } transition-colors duration-300`}
            >
              {platform.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DataFootprintMain({ onNext, onBack }) {
  const [selectedPlatform, setSelectedPlatform] = useState("instagram");

  const handleSelectPlatform = (id) => {
    setSelectedPlatform(id);
  };

  return (
    <div className="flex flex-col m-auto max-w-3xl justify-between min-h-dvh bg-[#1c1c1c] z-500">
      <div className="top-0 bg-[#1c1c1c] w-full">
        <div className="px-4">
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
            viewport={{ once: true }}
            className="flex flex-col pt-6 gap-2 mb-12"
          >
            <h1 className="text-2xl text-white">
              아래 목록에서 <br /> 서비스를 선택해주세요
            </h1>
            <p className="text-gray-500 text-base">
              선택하신 서비스를 분석할게요
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
        >
          <SocialMediaSelector
            selectedPlatform={selectedPlatform}
            onSelect={handleSelectPlatform}
          />
          <div className="w-full h-6 my-6 bg-[#0c0c0c]" />
          <SocialMediaSelector
            selectedPlatform={selectedPlatform}
            onSelect={handleSelectPlatform}
          />
          <div className="w-full h-6 my-6 bg-[#0c0c0c]" />
          <SocialMediaSelector
            selectedPlatform={selectedPlatform}
            onSelect={handleSelectPlatform}
          />
        </motion.div>
      </div>

      <button
        onClick={onNext}
        className="fixed bottom-0 left-0 right-0 m-auto max-w-3xl p-6 pt-8 z-50 bg-gradient-cta"
      >
        <div className="flex justify-center w-full py-4 bg-[#37EBFC] rounded-xl text-[#1c1c1c] text-lg font-semibold transition-all duration-300">
          다음
        </div>
      </button>
    </div>
  );
}
