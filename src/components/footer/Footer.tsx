import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row text-sm p-8 leading-none bg-gray-200 justify-between items-center gap-2">
      <p>Copyright © 2023 SIIM - Ingeniería</p>
      <Link href="https://roque-site.vercel.app/" target="_blank">
        <span className="text-xs transition-all duration-500 hover:text-blue-600">
          Made with 🖤 by <strong>ROQUE.DEV</strong>
        </span>
      </Link>
    </div>
  );
};

export default Footer;
