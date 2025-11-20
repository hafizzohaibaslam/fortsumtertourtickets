"use client";
import React, { useEffect, useState, Suspense } from "react";
import SearchBar from "@/features/order-list-page/components/SearchBar";
import OrdersList from "@/features/order-list-page/components/OrdersList";
import { getOrders } from "@/lib/wp/orders";
import { WPOrder } from "@/lib/wp/types";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTES } from "@/features/shared/utils/routes";
import Message from "@/components/Message";
import { reportPurchase } from "@/lib/gtag";

const OrdersPageContent = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [orders, setOrders] = useState<WPOrder[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchOrders = async () => {
      const orders: WPOrder[] = await getOrders(email);

      if (!orders || orders.length === 0) {
        console.log("No orders found");
        setIsLoading(false);
        return;
      }

      // ✅ Find the latest order by date_created
      // const latestOrder = orders.reduce((latest, current) => {
      //   return new Date(current.date_created) > new Date(latest.date_created)
      //     ? current
      //     : latest;
      // });

      // // ✅ Count total tickets from that order
      // const ticketCount = latestOrder.line_items.reduce((sum, item) => {
      //   return sum + (item.quantity || 0);
      // }, 0);

      // // ✅ Calculate value (tickets * 6.97)
      // const tagValue = ticketCount * 6.97;

      // // ✅ Fire Google Ads purchase conversion
      // reportPurchase(tagValue, "USD");

      setOrders(orders);
      setIsLoading(false);
    };

    fetchOrders();
  }, [email]);

  return (
    <div className="bg-white px-[24px] py-[40px] lg:px-[45px] lg:py-[56px] rounded-[23px] mt-[24px] mb-[40px] space-y-[30px]">
      <div className="flex flex-col gap-[20px] md:flex-row md:justify-between md:items-center">
        <h1 className="uppercase font-nohemi text-[#424242] font-semibold text-[32px]">
          Order List
        </h1>
        <SearchBar
          search={email}
          setSearch={(value) => {
            router.push(ROUTES.ORDER_LIST + `?email=${value}`);
          }}
        />
      </div>
      {isLoading && email && <OrderListSkeleton />}
      {!isLoading ? (
        email ? (
          <OrdersList orders={orders} />
        ) : (
          <Message
            status="info"
            children={<p>Please enter your email to view your orders</p>}
          />
        )
      ) : null}
    </div>
  );
};

const OrdersPage = () => {
  return (
    <Suspense fallback={<OrderListSkeleton />}>
      <OrdersPageContent />
    </Suspense>
  );
};

export default OrdersPage;

const OrderListSkeleton = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="bg-white p-[20px] rounded-[12px] border border-[#E5E7EB] animate-pulse"
        >
          <div className="flex items-center justify-between">
            {/* ID Column */}
            <div className="flex flex-col gap-[8px] min-w-[80px]">
              <div className="h-[16px] bg-[#F3F4F6] rounded w-[20px]"></div>
              <div className="h-[20px] bg-[#F3F4F6] rounded w-[40px]"></div>
            </div>

            {/* Date Column */}
            <div className="flex flex-col gap-[8px] min-w-[120px]">
              <div className="h-[16px] bg-[#F3F4F6] rounded w-[30px]"></div>
              <div className="h-[20px] bg-[#F3F4F6] rounded w-[80px]"></div>
            </div>

            {/* Status Column */}
            <div className="flex flex-col gap-[8px] min-w-[100px]">
              <div className="h-[16px] bg-[#F3F4F6] rounded w-[40px]"></div>
              <div className="h-[24px] bg-[#F3F4F6] rounded-full w-[60px]"></div>
            </div>

            {/* Total Column */}
            <div className="flex flex-col gap-[8px] min-w-[100px]">
              <div className="h-[16px] bg-[#F3F4F6] rounded w-[30px]"></div>
              <div className="h-[20px] bg-[#F3F4F6] rounded w-[70px]"></div>
            </div>

            {/* Arrow Icon */}
            <div className="h-[20px] w-[20px] bg-[#F3F4F6] rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
