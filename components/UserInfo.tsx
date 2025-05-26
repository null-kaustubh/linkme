import Image from "next/image";

export default function UserInfo() {
  const image = "/psy.jpg"; //YOUR IMAGE HERE
  const name = "Kaustubh Sankhe"; //YOUR NAME HERE
  const bio = "I love tech and art"; //YOUR BIO HERE

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={image}
        alt="profile picture"
        width={100}
        height={100}
        className="rounded-full m-2"
      />
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="font-extralight mb-6">{bio}</p>
    </div>
  );
}
