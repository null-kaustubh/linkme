import Image from "next/image";

export default function UserInfo() {
  const image = "/miya.jpg"; //YOUR IMAGE HERE
  const name = "Kaustubh Sankhe"; //YOUR NAME HERE
  const bio = "I love tech and art"; //YOUR BIO HERE
  const secretBio = "6ft with a girlfriend btw"; //YOUR SECRET BIO HERE

  return (
    <div className="flex flex-col justify-center items-center cursor-default">
      <Image
        src={image}
        alt="profile picture"
        width={100}
        height={100}
        className="rounded-full my-2 aspect-square object-cover object-top"
      />
      <h1 className="text-lg font-semibold md:text-xl lg:text-2xl xl:text-2xl">
        {name}
      </h1>
      <div className="relative group mb-6 w-80">
        <p className="font-extralight transition-opacity duration-300 group-hover:opacity-0 text-center">
          {bio}
        </p>
        <p className="font-extralight absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-center">
          {secretBio}
        </p>
      </div>
    </div>
  );
}
