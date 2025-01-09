// app/page.js
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Growth from "../components/Growth/Growth";
import Questions from "../components/Questions/Questions";
import Footer from "../components/Footer/Footer";
// The component will be rendered server-side in the app directory
export default async function Home() {
  // Fetch SEO data on the server side directly inside the component
  const seoData = {
    title: "Instagram Downloader",
    description: "Download Instagram videos easily with this tool.",
  };

  return (
    <div>
      <Navbar />
      
      {/* Pass SEO data to the Hero component */}
      <Hero seoData={seoData} />
      
      <Features />
      <Growth />
      <Questions />
      <Footer />
    </div>
  );
}
