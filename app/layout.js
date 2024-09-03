import localFont from "next/font/local";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";
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
      <body className={Pretendard.className}>
        <ProgressBarProvider>
          <ProgressBar className="fixed h-1 shadow-lg shadow-sky-500/20 bg-sky-500 top-0" />
          {children}
        </ProgressBarProvider>
      </body>
    </html>
  );
}
