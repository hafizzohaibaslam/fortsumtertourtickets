"use client";

import { Button } from "@/features/shared/components/Button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-[url('/error-bg-2.png')] bg-cover bg-center flex flex-col items-center justify-center">
      <div className="space-y-[30px] text-white text-center mt-[400px]">
        <div className="space-y-[20px]">
          <h1 className="font-nohemi font-medium text-[66px]">OOPS!</h1>
          <p className="font-nohemi font-medium text-[24px] uppercase">
            Page not found
          </p>
        </div>
        <div className="flex gap-[23px]">
          <Link href="/">
            <Button
              variant="error"
              icon={<MoveUpRight className="w-[13px] h-[13px]" />}
            >
              Go Home
            </Button>
          </Link>
          <Button variant="error" onClick={() => router.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
