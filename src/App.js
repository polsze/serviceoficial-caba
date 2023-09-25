import './App.css';
import Banner from './components/Banner';
import BannerSmall from './components/BannerSm';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesSection from './components/ServicesSection';
import ZonesSection from './components/ZonesSection';
import ContactSection from './components/ContactSection';
import BrandsSection from './components/BrandsSection';
import FooterSection from './components/FooterSection';


function App() {
  return (
    <div className="App">
     <Header />
     <Banner />
     <BannerSmall />
     <ServicesSection />
     <ZonesSection />
     <ContactSection />
     <BrandsSection />
     <FooterSection />
    </div>
  );
}

export default App;
