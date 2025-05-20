import { Contact } from "@/app/components/ContactForm";
import SocialLinks from "../components/SocialLinks";

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Contact me</h1>
      <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
        Got a project, question, or just want to say hi? I’m always open to
        collaborating or chatting.
      </p>
      <Contact />
      <p className="mt-10 text-base text-gray-500 dark:text-gray-400">
        Or contact me with...
      </p>
      <SocialLinks />
    </div>
  );
}
