import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import AccordianHeading from "./AccordianHeading";
import Badge from "./Badge";
import React from "react";
import { Order } from "../utils/ordersData";
import { getBadgeColor } from "../utils/getBadgeColor";
import { formatBadgeText } from "../utils/formatBadgeText";
import OrderItem from "./OrderItem";
import { cn } from "@/lib/utils";
import { WPOrder } from "@/lib/wp/types";
import { formatDate } from "date-fns";
import { SERVICE_FEE } from "@/lib/constants";

type AccordianItemProps = {
  order: WPOrder;
};

const AccordianItem = ({ order }: AccordianItemProps) => {
  console.log("🚀 ~ AccordianItem ~ order:", order);
  const [badgeColor, badgeTextColor] = getBadgeColor(order.status);
  const formattedBadgeText = formatBadgeText(order.status);

  const metaData = Object.fromEntries(
    order.meta_data.map((item) => [item.key, item.value])
  );

  const lineItems = Object.fromEntries(
    order.line_items.map((item) => [item.name, item])
  );

  const totalPersons = order.line_items.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  const operatorFeeAmount =
    order.line_items.reduce((acc, curr) => acc + Number(curr.total), 0) * 0.06;

  return (
    <AccordionItem
      value={`#${order.id}`}
      className={cn(
        "w-full border-[1px] border-[#E7E9EB] rounded-[20px] px-[30px] py-[10px] hover:border-[#B7B7B7] transition-all duration-300 ease-in-out"
      )}
    >
      <AccordionTrigger className="w-full cursor-pointer">
        <div className="flex flex-col gap-[10px] md:flex-row md:justify-between md:items-center w-full max-w-[80%]">
          <AccordianHeading title="ID" value={`#${order.id}`} />
          <AccordianHeading
            title="Date"
            value={formatDate(new Date(order.date_created), "MMM d, yyyy")}
          />
          <AccordianHeading
            title="Status"
            value={order.status}
            badge={
              <Badge
                text={formattedBadgeText}
                backgroundColor={badgeColor || ""}
                textColor={badgeTextColor || ""}
              />
            }
          />
          <AccordianHeading title="Total" value={`$${order.total}`} />
        </div>
      </AccordionTrigger>
      <AccordionContent className="">
        <div className="border-t-[1px] border-[#E7E9EB]"></div>
        <div className="flex flex-col gap-[13px] mt-[22px]">
          <h4 className="font-plus-jakarta-sans text-[#696969] text-[18px] font-semibold">
            {metaData.tour_title}
          </h4>
          <div className="space-y-[13px]">
            <OrderItem label="Date" value={metaData.tour_date} />
            <OrderItem label="Time" value={metaData.tour_time} />
            <hr />
            {Object.entries(lineItems).map(([key, value]) => {
              return (
                <OrderItem
                  key={key}
                  label={key}
                  isSecondary={true}
                  value={`${value.quantity} x $${Number(value.price).toFixed(
                    2
                  )}`}
                />
              );
            })}
            <OrderItem
              label="Operator Fee"
              isSecondary={true}
              value={`$${operatorFeeAmount.toFixed(2)}`}
            />
            <OrderItem
              label="Service Charges"
              isSecondary={true}
              value={`$${SERVICE_FEE * totalPersons}`}
            />
            <hr />
            <OrderItem
              label="Total"
              value={`$${Number(order.total).toFixed(2)}`}
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordianItem;
