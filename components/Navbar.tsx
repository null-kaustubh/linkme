import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-start lg:justify-center">
      <div className="w-full lg:w-1/3 lg:px-3.5 p-4 my-4">
        <Link href="/" className="font-brico font-semibold text-3xl">
          Link<span className="text-[#c7ff69]">Me</span>
        </Link>
      </div>
    </div>
  );
}
