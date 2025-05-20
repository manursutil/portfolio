import type { ContactFormData } from "@/app/components/ContactForm";

export async function sendEmail(data: ContactFormData): Promise<{
  success: boolean;
  message: string;
}> {
  const apiEndpoint = "/api/contact";

  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const response = await res.json();
    return { success: res.ok, message: response.message || "Success" };
  } catch (err: any) {
    return { success: false, message: err.message || "Something went wrong." };
  }
}
