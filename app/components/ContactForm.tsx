"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { FC } from "react";
import { useState } from "react";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  async function onSubmit(data: ContactFormData) {
    const { success } = await sendEmail(data);
    if (success) {
      setSubmitStatus("success");
      reset();
    } else {
      setSubmitStatus("error");
    }
  }

  return (
    <div className="mt-8">
      <div className="backdrop-blur-md bg-white border border-gray-200 text-gray-900 dark:bg-muted/30 dark:border-muted dark:text-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              {...register("name", { required: true })}
              required
              className="mt-4"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: true })}
              required
              className="mt-4"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={5}
              {...register("message", { required: true })}
              required
              className="mt-4"
            />
          </div>
          <Button
            type="submit"
            className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:brightness-110 transition shadow-md hover:scale-105"
          >
            Send Message →
          </Button>
        </form>

        {submitStatus === "success" && (
          <p className="mt-4 text-green-400">
            Thanks! I’ll get back to you soon. ✅
          </p>
        )}
        {submitStatus === "error" && (
          <p className="mt-4 text-red-400">
            Oops! Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
};
