"use server";
import WP from "../API";

export type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const submitContactForm = async (data: ContactSubmission) => {
  try {
    const response = await WP.post("/contact-submission", {
      title: data.name,
      acf: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
      status: "publish",
    });

    return response.data;
  } catch (err: any) {
    console.error("Failed to submit contact form:", err?.response || err);
    throw new Error("Unable to submit contact form. Please try again later.");
  }
};
