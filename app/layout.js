import localFont from "next/font/local";
import "./globals.css";

const Pretendard = localFont({
  src: "../public/font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata = {
  title: "ByteGuardian",
  description: "ByteGuardian이 기업들의 데이터 발자국을 추적, 분석해드립니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={Pretendard.className}>{children}</body>
    </html>
  );
}
