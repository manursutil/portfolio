import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      <Image
        src="/Imagen.png"
        alt="Manuel"
        width={200}
        height={200}
        className="rounded-full mt-4"
      />
      <div>
        <h1 className="text-3xl font-bold">
          Hey, I'm Manuel <span className="animate-wave">👋</span>
        </h1>
        <p className="text-base text-gray-700 dark:text-gray-400 mt-2">
          23 yo data scientist and full stack web developer from the Canary
          Islands 🇮🇨
        </p>
        <p className="text-base text-gray-700 dark:text-gray-400 mt-10">
          I love building things and learning new stuff. I am currently working
          with Python, JavaScript, TypeScript, and R.
        </p>
        <div className="mt-10">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
