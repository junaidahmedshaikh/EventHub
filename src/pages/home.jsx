// import Hero from './hero'
import Hero from "./component/homeComponent/hero.jsx";
import WelcomeBanner from "./component/homeComponent/welcomeBanner.jsx";
// import MiniContact from "./component/homeComponent/miniContect.jsx";
// import Footer from "./component/mainComponent/footer.jsx";
import CommunityBanner from "./component/homeComponent/communityBanner.jsx";
import Category from "./component/homeComponent/category.jsx";
import Feature from "./component/homeComponent/feature.jsx";
import MiniGallery from "./component/homeComponent/miniGallery.jsx";

export default function home() {
  return (
    <div>
      <Hero />
      <WelcomeBanner />
      <Category />
      <Feature />
      <MiniGallery />
      <CommunityBanner />
    </div>
  );
}
