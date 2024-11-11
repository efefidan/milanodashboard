import Image from "next/image";
import Header from "@/components/Header";
import InfoCards from "@/components/InfoCards";
import Form from "@/components/Form";
import ProfileCards from "@/components/ProfileCards";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <InfoCards />
      <Form />
      <ProfileCards />
      <Footer />
    </div>
  );
}
