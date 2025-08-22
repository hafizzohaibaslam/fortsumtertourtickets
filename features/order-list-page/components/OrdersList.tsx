import React from "react";
import { Accordion } from "@/components/ui/accordion";
import AccordianItem from "./AccordianItem";
import { WPOrder } from "@/lib/wp/types";

type OrdersListProps = {
  orders: WPOrder[];
};

const OrdersList = ({ orders }: OrdersListProps) => {
  return (
    <div className="w-full">
      {orders.length > 0 && (
        <Accordion type="single" collapsible className="w-full space-y-[30px]">
          {orders.map((order, index) => {
            return <AccordianItem key={index} order={order} />;
          })}
        </Accordion>
      )}
      {orders.length === 0 && (
        <div className="w-full h-[100px] flex items-center justify-center">
          <p className="text-center text-[#696969] text-[18px] leading-[24px]">
            No orders found
          </p>
        </div>
      )}
    </div>
  );
};

export default OrdersList;
