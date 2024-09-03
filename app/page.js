"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, {
  Suspense,
  useState,
  useEffect,
  useCallback,
  createContext,
} from "react";

import DataFootprintMain from "./_views/DataFootprintMain";
import DataFootprintSelect from "./_views/DataFootprintSelect";
import DataFootprintAnalyze from "./_views/DataFootprintAnalyze";
import DataFootprintResult from "./_views/DataFootprintResult";

function PageComponent() {
  const [selectedService, setSelectedService] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "main";

  const navigateTo = useCallback(
    (newPage) => {
      router.push(`?page=${newPage}`);
    },
    [router]
  );

  const handleBack = useCallback(() => {
    switch (page) {
      case "result":
        navigateTo("analyze");
        break;
      case "analyze":
        navigateTo("select");
        break;
      case "select":
        navigateTo("main");
        break;
      default:
        router.push("/");
        break;
    }
  }, [page, navigateTo, router]);

  const handleNext = useCallback(() => {
    switch (page) {
      case "main":
        navigateTo("select");
        break;
      case "select":
        navigateTo("analyze");
        break;
      case "analyze":
        navigateTo("result");
        break;
      case "result":
        router.push("/");
        break;
    }
  }, [page, navigateTo, router]);

  console.log("Current page:", page);

  const renderPage = () => {
    switch (page) {
      case "select":
        return (
          <DataFootprintSelect
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case "analyze":
        return (
          <DataFootprintAnalyze
            selectedService={selectedService}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case "result":
        return (
          <DataFootprintResult
            selectedService={selectedService}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      default:
        return <DataFootprintMain onNext={handleNext} onBack={handleBack} />;
    }
  };

  return renderPage();
}

export default function Page() {
  return (
    <Suspense
      fallback={<DataFootprintMain onNext={() => {}} onBack={() => {}} />}
    >
      <PageComponent />
    </Suspense>
  );
}
