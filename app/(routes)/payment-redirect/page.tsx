"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { updateServiceChargesPaidStatus } from "@/lib/wp/orders";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentSuccessContent = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const email = searchParams.get("email");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!orderId) return;
    const updateOrder = async () => {
      await updateServiceChargesPaidStatus(orderId, true);
      setIsLoading(false);
      if (email) {
        setTimeout(() => {
          router.push(`/my-orders?email=${email}`);
        }, 5000);
      }
    };
    updateOrder();
  }, [orderId, email, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Payment Success</h1>
      {isLoading ? (
        <>
          <Loader2 className="animate-spin mx-auto mt-10" size={50} />
          <p className="text-center text-lg">
            Please wait while we process your payment...
          </p>
        </>
      ) : (
        <div className="flex flex-col items-center gap-[10px]">
          <CheckCircle className="text-green-500 mx-auto mt-5" size={50} />
          <p className="text-center text-lg">
            Your ticket will be processed shortly. <br />
            You will be informed via email.
          </p>
          {email && (
            <Button onClick={() => router.push(`/my-orders?email=${email}`)}>
              Go to my orders
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

const PaymentSuccessSkeleton = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-2xl font-bold">Payment Success</h1>
    <Loader2 className="animate-spin mx-auto mt-10" size={50} />
    <p className="text-center text-lg">Loading...</p>
  </div>
);

const PaymentSuccess = () => {
  return (
    <Suspense fallback={<PaymentSuccessSkeleton />}>
      <PaymentSuccessContent />
    </Suspense>
  );
};

export default PaymentSuccess;
