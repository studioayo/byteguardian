"use client";
import { useState } from "react";
import ByteGuardianLogo from "@/public/image/ByteGuardian.svg";
import CheckIcon from "@/public/icon/check.svg";
import { motion } from "framer-motion";

const socialMediaPlatforms = [
  {
    id: "instagram",
    name: "인스타그램",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  },
  {
    id: "facebook",
    name: "페이스북",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    id: "tiktok",
    name: "틱톡",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
  },
  {
    id: "snapchat",
    name: "스냅챗",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/ad/Snapchat_logo.svg",
  },
  {
    id: "x",
    name: "X (Twitter)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/X_logo_2023.svg",
  },
  {
    id: "threads",
    name: "쓰레드",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Threads_App_Logo.svg/800px-Threads_App_Logo.svg.png",
  },
];

const SocialMediaSelector = ({ selectedPlatform, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.75,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-col gap-4 mt-12"
    >
      <div className="text-lg font-semibold flex items-center space-x-2">
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
            <img
              src={platform.logo}
              alt={platform.name}
              className="w-12 h-12"
            />
            <span
              className={`mt-2${
                selectedPlatform === platform.id
                  ? "text-cyan-500"
                  : "text-white/75"
              }`}
            >
              {platform.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function DataFootprintMain({ onNext, onBack }) {
  const [selectedPlatform, setSelectedPlatform] = useState("instagram");

  const handleSelectPlatform = (id) => {
    setSelectedPlatform(id);
  };

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
            아래 목록에서 <br /> 서비스를 선택해주세요
          </h1>
          <p className="text-gray-500 text-base">
            선택하신 서비스를 분석할게요
          </p>
        </motion.div>

        <SocialMediaSelector
          selectedPlatform={selectedPlatform}
          onSelect={handleSelectPlatform}
        />
      </div>

      <button
        onClick={onNext}
        className="fixed bottom-0 left-0 right-0 m-auto max-w-4xl p-6 z-50 bg-gradient-cta"
      >
        <div className="flex justify-center w-full py-4 bg-[#37EBFC] rounded-xl text-[#1c1c1c] text-lg font-semibold transition-all duration-300">
          다음
        </div>
      </button>
    </div>
  );
}
