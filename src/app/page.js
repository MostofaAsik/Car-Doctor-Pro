import About from "@/components/Homepages/About";
import Banner from "@/components/Homepages/Banner";
import Services from "@/components/Homepages/Services";


export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <About />
      <Services />
    </div>
  );
}
