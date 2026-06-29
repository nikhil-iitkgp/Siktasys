import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import "./App.css";

const Home                   = lazy(() => import("./pages/Home"));
const Products               = lazy(() => import("./components/Products"));
const SiliconIp              = lazy(() => import("./pages/SiliconIP"));
const About                  = lazy(() => import("./components/About"));
const Careers                = lazy(() => import("./components/Careers"));
const Contact                = lazy(() => import("./components/Contact"));
const AnalogFrontend         = lazy(() => import("./pages/products/AnalogFrontend"));
const AIAcceleratorChip      = lazy(() => import("./pages/products/AIAcceleratorChip"));
const DataConverters         = lazy(() => import("./pages/products/DataConverters"));
const PowerManagementICs     = lazy(() => import("./pages/products/PowerManagementICs"));
const CommunicationSoCs      = lazy(() => import("./pages/products/CommunicationSocs"));
const WirelineCommunicationICs = lazy(() => import("./pages/products/WirelineCommunicationICs"));

const PageLoader = () => (
  <div className="w-full min-h-screen bg-gray-950 flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-4 border-cyan-400/30 border-t-cyan-400 animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/home"     element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/analog-frontend"          element={<AnalogFrontend />} />
          <Route path="/products/ai-accelerator-chip"      element={<AIAcceleratorChip />} />
          <Route path="/products/data-converters"          element={<DataConverters />} />
          <Route path="/products/power-management-ics"     element={<PowerManagementICs />} />
          <Route path="/products/communication-socs"       element={<CommunicationSoCs />} />
          <Route path="/products/wireline-communication-ics" element={<WirelineCommunicationICs />} />
          <Route path="/silicon-ip"   element={<SiliconIp />} />
          <Route path="/about-us"     element={<About />} />
          <Route path="/careers"      element={<Careers />} />
          <Route path="/contact-us"   element={<Contact />} />
          <Route path="*"             element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
