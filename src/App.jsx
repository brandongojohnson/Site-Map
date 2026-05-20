import { useState } from "react";
import Dashboard from "./dashboard";
import VellumSitemap from "./VellumSitemap2";
import LandingPage from "./LandingPage";

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  return (
    <>
      <VellumSitemap />
    </>
  );
}