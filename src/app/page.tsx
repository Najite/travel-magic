import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import InspirationGallery from "@/components/InspirationGallery";
import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitListForm";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <WaitlistForm />

    <Features />
    <HowItWorks />
    <InspirationGallery />
    <Footer />
    </>
  );
}