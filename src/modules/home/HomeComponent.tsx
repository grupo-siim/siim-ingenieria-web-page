import SlideIn from "@/components/animations/SlideIn";
import HomeNavbar from "../../components/navbar/HomeNavbar";
import Hero from "./Hero";
import SocialMedia from "./SocialMedia";

const HomeComponent = ({
  toggleMenuMobile,
}: {
  toggleMenuMobile: () => void;
}) => {
  return (
    <div className="flex flex-col min-h-screen" id="home">
      <HomeNavbar toggleMenuMobile={toggleMenuMobile} />
      <Hero />
      <SlideIn direction="toDown" style={{ width: "auto", height: "auto" }}>
        <SocialMedia />
      </SlideIn>
    </div>
  );
};

export default HomeComponent;
