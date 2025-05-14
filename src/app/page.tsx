import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import InspirationGallery from "@/components/InspirationGallery";
import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitListForm";
import Footer from "@/components/Footer";
import Meta from "@/components/header";
export default function Home() {
  return (
    <>
    <Meta />
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