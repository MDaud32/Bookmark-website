import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import PanelLayout from './components/panelLayout';
import StatPage from './components/StatPage';

function App() {
  return (
    <div className="bg-white min-h-screen items-center justify-center overflow-x-hidden overflow-y-hidden">
      <Nav />
      <HeroSection />
      <PanelLayout />
      {/* <StatPage /> */}
    </div>
  );
}

export default App;
