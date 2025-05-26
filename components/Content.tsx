import links from "@/constants/links";
import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <div className="w-1/3 mx-auto space-y-3 group-hover:scale-110">
      {links.map((link, index) => {
        const imageUrl = `${link.name.replace(/\s/g, "").toLowerCase()}.svg`;

        return (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex">
              <Image
                src={imageUrl}
                alt="logo"
                width={24}
                height={24}
                className="group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-lg font-medium text-gray-800">{link.name}</h2>
            </div>
            <div className="w-6" />
          </Link>
        );
      })}
    </div>
  );
}
