import links from "@/constants/links";
// import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 mx-auto space-y-3 px-4 lg:px-0">
      {links.map((link, index) => {
        // const imageUrl = `${link.name.replace(/\s/g, "").toLowerCase()}.svg`;

        return (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 border border-gray-200 rounded-full"
          >
            {/* <div className="flex">
              <Image
                src={imageUrl}
                alt="logo"
                width={24}
                height={24}
                className="group-hover:scale-110 transition-transform duration-200"
              />
            </div> */}
            <div className="flex-1 text-center">
              <h2 className="text-lg font-medium text-white">{link.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
