import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-4 font-extralight">
        Create your own{" "}
        <Link
          href="https://github.com/null-kaustubh/linkme/blob/main/README.md"
          target="_blank"
          className="underline"
        >
          Link<span className="text-[#c7ff69]">Me</span>
        </Link>
      </div>
      <div>
        <p className="my-4">
          Made by{" "}
          <Link
            href="https://github.com/null-kaustubh"
            target="_blank"
            className="text-[#c7ff69]"
          >
            kaustubh
          </Link>
        </p>
      </div>
    </div>
  );
}
