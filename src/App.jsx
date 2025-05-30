import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import EventDetails from './pages/EventDetails';
// import RSVP from './pages/RSVP';
// import SalesPage from './pages/SalesPage';

function App() {
  return (
    <>
      <Navbar />
      
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/details" element={<EventDetails />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/sales" element={<SalesPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
