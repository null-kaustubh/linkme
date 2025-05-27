import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-neutral-900">
      <Navbar />
      <UserInfo />
      <Content />
      <Footer />
    </div>
  );
}
