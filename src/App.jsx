import { useState } from "react";
import SitemapApp from "./sitemap-editor/SitemapApp";
import SitemapAppPreview from "./sitemap-editor-preview/SitemapApp";
import CardSortHub from "./card-sort/CardSortHub";
import TakeCardSortStudy from "./card-sort/TakeStudy";
import TreeTestHub from "./tree-test/TreeTestHub";
import TakeTreeTestStudy from "./tree-test/TakeStudy";
import LandingPage from "./landing-page/LandingPage";

export default function App() {
  const [view, setView] = useState("landing");

  // A shared study link (?cardsort=<studyId> or ?treetest=<studyId>) always
  // takes over the whole screen for the participant, regardless of app state.
  const params = new URLSearchParams(window.location.search);
  const sharedCardSortId = params.get("cardsort");
  const sharedTreeTestId = params.get("treetest");
  if (sharedCardSortId) {
    return <TakeCardSortStudy studyId={sharedCardSortId} />;
  }
  if (sharedTreeTestId) {
    return <TakeTreeTestStudy studyId={sharedTreeTestId} />;
  }

  // Design preview: a standalone dark/monochrome (design.md) restyle of the
  // Sitemap Editor, reading the same real boards as the live editor. Not
  // linked from any nav — reach it directly via ?preview=sitemap so the
  // live editor stays completely untouched.
  if (params.get("preview") === "sitemap") {
    return <SitemapAppPreview onNavigateApp={() => {}} />;
  }

  const navigate = (target) => {
    if (target === "cardsort") setView("cardsort");
    else if (target === "treetest") setView("treetest");
    else setView("studio");
  };

  if (view === "landing") {
    return <LandingPage onGetStarted={navigate} />;
  }

  if (view === "cardsort") {
    return <CardSortHub onNavigate={navigate} />;
  }

  if (view === "treetest") {
    return <TreeTestHub onNavigate={navigate} />;
  }

  return <SitemapApp onNavigateApp={navigate} />;
}
