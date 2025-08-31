"use client";
import React, { useState } from "react";
import { Button } from "@/features/shared/components/Button";
import { MoveUpRight } from "lucide-react";
import { toast } from "sonner";
import sendEmail from "@/lib/wp/email";

const HereToAssistYou = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const toastId = toast.loading("Submitting...");
    const data = new FormData(form);

    const res = await sendEmail({
      subject: `Fort Sumter - Contact Submission from ${data.get("name")}`,
      htmlContent: `
        <h1>Fort Sumter - Contact Submission</h1>
        <p>Name: ${data.get("name")}</p>
        <p>Email: ${data.get("email")}</p>
        <p>Phone: ${data.get("phone")}</p>
        <p>Message: ${data.get("message")}</p>
      `,
      replyTo: data.get("email") as string,
    });
    if (res) {
      toast.success("Message sent successfully", { id: toastId });
      form.reset();
    } else {
      toast.error("Failed to send message, please try again.", { id: toastId });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="mt-[24px] bg-white px-[24px] py-[30px] lg:px-[64px] lg:py-[52px] rounded-[23px] space-y-[70px]">
      {/* Introduction */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[40px]">
        <div className="space-y-[32px]">
          <span className="font-plus-jakarta-sans font-normal text-[16px] lg:text-[24px] leading-[16px] lg:-leading-[36px] text-[#25283E]">
            Get Started
          </span>
          <h1 className="font-nohemi font-medium text-[#25283E] text-[32px] leading-[38px] lg:text-[80px] lg:leading-[86px] max-w-4xl">
            Get in touch with us. We're here to assist you.
          </h1>
        </div>
        {/* Social Icons */}
        {/* <div className="flex flex-row lg:flex-col gap-[24px]">
          <button className="border-[1px] border-[#B7B7B7] rounded-full p-[10px] w-fit cursor-pointer hover:border-[#25283E] hover:scale-105 transition-all duration-300 ease-in-out">
            <Image
              src={FacebookIcon}
              alt="facebook"
              width={24}
              height={24}
              className="w-[20px] h-[20px]"
            />
          </button>
          <button className="border-[1px] border-[#B7B7B7] rounded-full p-[10px] w-fit cursor-pointer hover:border-[#25283E] hover:scale-105 transition-all duration-300 ease-in-out">
            <Image
              src={InstagramIcon}
              alt="instagram"
              width={24}
              height={24}
              className="w-[24px] h-[24px]"
            />
          </button>
          <button className="border-[1px] border-[#B7B7B7] rounded-full p-[10px] w-fit cursor-pointer hover:border-[#25283E] hover:scale-105 transition-all duration-300 ease-in-out">
            <Image
              src={TwitterIcon}
              alt="twitter"
              width={24}
              height={24}
              className="w-[24px] h-[24px]"
            />
          </button>
        </div> */}
      </div>
      {/* Form */}
      <form className="space-y-[32px]" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[32px] lg:flex-row lg:items-center lg:justify-between">
          {/* First Name */}
          <div className="w-full group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="peer w-full font-plus-jakarta-sans font-normal text-[16px] lg:text-[24px] leading-[26px] lg:leading-[36px] text-[#25283E99] placeholder:text-[#25283E99] pt-[10px] pl-[10px] pb-[32px] outline-none"
            />
            <div className="h-[1px] bg-[#B7B7B7] peer-focus:w-full peer-focus:h-[2px] peer-focus:bg-[#25283E] transition-all duration-1000 ease-in-out">
              <div className="w-0 h-0 transition-all duration-1000 ease-in-out group-hover:w-full group-hover:h-[2px] group-hover:bg-[#25283E]"></div>
            </div>
          </div>
          {/* Email Address */}
          <div className="w-full group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="peer w-full font-plus-jakarta-sans font-normal text-[16px] lg:text-[24px] leading-[26px] lg:leading-[36px] text-[#25283E99] placeholder:text-[#25283E99] pt-[10px] pl-[10px] pb-[32px] outline-none"
            />
            <div className="h-[1px] bg-[#B7B7B7] peer-focus:w-full peer-focus:h-[2px] peer-focus:bg-[#25283E] transition-all duration-1000 ease-in-out">
              <div className="w-0 h-0 transition-all duration-1000 ease-in-out group-hover:w-full group-hover:h-[2px] group-hover:bg-[#25283E]"></div>
            </div>
          </div>
          {/* Phone Number */}
          <div className="w-full group">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number (optional)"
              className="peer w-full font-plus-jakarta-sans font-normal text-[16px] lg:text-[24px] leading-[26px] lg:leading-[36px] text-[#25283E99] placeholder:text-[#25283E99] pt-[10px] pl-[10px] pb-[32px] outline-none"
            />
            <div className="h-[1px] bg-[#B7B7B7] peer-focus:w-full peer-focus:h-[2px] peer-focus:bg-[#25283E] transition-all duration-1000 ease-in-out">
              <div className="w-0 h-0 transition-all duration-1000 ease-in-out group-hover:w-full group-hover:h-[2px] group-hover:bg-[#25283E]"></div>
            </div>
          </div>
        </div>
        <div className="w-full group">
          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            className="peer w-full font-plus-jakarta-sans font-normal text-[16px] lg:text-[24px] leading-[26px] lg:leading-[36px] text-[#25283E99] placeholder:text-[#25283E99] pt-[10px] pl-[10px] pb-[32px] outline-none"
          />
          <div className="h-[1px] bg-[#B7B7B7] peer-focus:w-full peer-focus:h-[2px] peer-focus:bg-[#25283E] transition-all duration-1000 ease-in-out">
            <div className="w-0 h-0 transition-all duration-1000 ease-in-out group-hover:w-full group-hover:h-[2px] group-hover:bg-[#25283E]"></div>
          </div>
        </div>
        <Button
          variant="primary"
          icon={<MoveUpRight className="w-[20px] h-[20px]" />}
          className={`${
            isSubmitting
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : ""
          }`}
          disabled={isSubmitting}
        >
          Leave us a message
        </Button>
      </form>
    </div>
  );
};

export default HereToAssistYou;
