// import Hero from './hero'
import Hero from "./component/mainComponent/hero.jsx";
import WelcomeBanner from "./component/mainComponent/welcomeBanner.jsx";
import MiniContact from "./component/mainComponent/miniContect.jsx";
// import Footer from "./component/mainComponent/footer.jsx";
import Category from "./component/mainComponent/category.jsx";
import Feature from "./component/mainComponent/feature.jsx";
import MiniGallery from "./component/mainComponent/miniGallery.jsx";

export default function home() {
  return (
    <div>
      <Hero />
      <WelcomeBanner />
      <Category />
      <Feature />
      <MiniGallery />
      <MiniContact />
    </div>
  );
}
