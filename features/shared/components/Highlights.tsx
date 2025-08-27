import React from "react";
import { Button } from "./Button";
import Image from "next/image";
import Badge from "@/features/order-list-page/components/Badge";

const Highlights = () => {
  return (
    <section className="flex flex-col gap-4 max-w-[1420px] mx-auto">
      <Badge text="Highlights" backgroundColor="#25283E" textColor="#fff" />
      <h2 className="text-2xl font-bold">Why visit Fort Sumter?</h2>
      <p className="text-gray-500">
        Fort Sumter is a historic site that offers a unique opportunity to learn
        about the history of the Civil War and the American Civil War.
      </p>
      <Button className="mt-4 self-end">Read More</Button>
    </section>
  );
};

export default Highlights;
