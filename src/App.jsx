import { useState } from "react";
import SitemapApp from "./sitemap-editor/SitemapApp";
import CardSortHub from "./card-sort/CardSortHub";
import TakeStudy from "./card-sort/TakeStudy";
import LandingPage from "./landing-page/LandingPage";

export default function App() {
  const [view, setView] = useState("landing");

  // A shared study link (?cardsort=<studyId>) always takes over the whole
  // screen for the participant, regardless of app state.
  const sharedStudyId = new URLSearchParams(window.location.search).get("cardsort");
  if (sharedStudyId) {
    return <TakeStudy studyId={sharedStudyId} />;
  }

  if (view === "landing") {
    return <LandingPage onGetStarted={(target) => setView(target === "cardsort" ? "cardsort" : "studio")} />;
  }

  if (view === "cardsort") {
    return <CardSortHub onExit={() => setView("studio")} />;
  }

  return <SitemapApp onOpenCardSort={() => setView("cardsort")} />;
}
