import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import PanelLayout from './components/panelLayout';
import DownloadPage from './components/DownloadPage';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen items-center justify-center overflow-x-hidden overflow-y-hidden">
      <Nav />
      <HeroSection />
      <PanelLayout />
      <DownloadPage />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
