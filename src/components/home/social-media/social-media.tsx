import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="flex flex-row p-8 justify-center items-center text-gray-700 gap-4">
      <Link href="https://www.facebook.com/SIIMSPAgroup" target="_blank">
        <Facebook size={24} />
      </Link>
      <Link href="https://www.instagram.com/siim_spa/" target="_blank">
        <Instagram size={24} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/siim-group-43b2bb1b9/"
        target="_blank"
      >
        <Linkedin size={24} />
      </Link>
    </div>
  );
};

export default SocialMedia;
