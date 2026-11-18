import { useEffect, useState } from "react";
import SitemapApp from "./sitemap-editor/SitemapApp";
import SitemapAppPreview from "./sitemap-editor-preview/SitemapApp";
import CardSortHub from "./card-sort/CardSortHub";
import TakeCardSortStudy from "./card-sort/TakeStudy";
import TreeTestHub from "./tree-test/TreeTestHub";
import TakeTreeTestStudy from "./tree-test/TakeStudy";
import LandingPage from "./landing-page/LandingPage";
import Qarin from "./qarin/Qarin";
import "./styles/app-tokens.css";
import "./styles/app-dark.css";

// The landing page saves the visitor's light/dark choice here; the Sitemap,
// Card Sort and Tree Test screens inherit it (see styles/app-dark.css).
const THEME_KEY = "sortly-landing-theme";
const savedThemeIsDark = () => {
  try { return localStorage.getItem(THEME_KEY) === "dark"; } catch { return false; }
};

const APP_VIEWS = ["landing", "studio", "cardsort", "treetest"];
const viewFromState = (state) => (state && APP_VIEWS.includes(state.view) ? state.view : "landing");

export default function App() {
  // Each view change is a real history entry, so the browser's Back/Forward
  // buttons move between the landing page and the app screens.
  const [view, setView] = useState(() => viewFromState(window.history.state));

  useEffect(() => {
    // Tag the entry we loaded on so Back can restore it later.
    const st = window.history.state;
    if (!st || !st.view) window.history.replaceState({ ...(st || {}), view }, "");
    const onPop = (e) => setView(viewFromState(e.state));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Dark theme for the app screens (not the landing page, which themes itself,
  // and not the standalone ?preview= pages). Study links shared with
  // participants follow the same saved choice and default to light.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const onAppScreen = !q.get("preview") && (q.get("cardsort") || q.get("treetest") || view !== "landing");
    const html = document.documentElement;
    const apply = () => html.classList.toggle("app-dark", Boolean(onAppScreen) && savedThemeIsDark());
    apply();
    const onStorage = (e) => { if (e.key === THEME_KEY) apply(); };
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      html.classList.remove("app-dark");
    };
  }, [view]);

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

  // Qarin recreation: reach it via ?preview=qarin (landing page untouched).
  if (params.get("preview") === "qarin") {
    return <Qarin />;
  }

  const navigate = (target) => {
    const next =
      target === "cardsort" ? "cardsort"
      : target === "treetest" ? "treetest"
      : target === "landing" ? "landing"
      : "studio";
    if (next === view) return;
    window.history.pushState({ view: next }, "");
    window.scrollTo(0, 0);
    setView(next);
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
