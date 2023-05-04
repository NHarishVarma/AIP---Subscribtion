import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SubscribeList from "./pages/SubscribeList";
import SubscribeComplete from "./pages/SubscribeComplete";
import SubscribeListComplete from "./pages/SubscribeListComplete";
import Subscribe19 from "./pages/Subscribe19";
import SubscribeList2 from "./pages/SubscribeList2";
import SubscribeSignDocs from "./pages/SubscribeSignDocs";
import SubscribeConfirm from "./pages/SubscribeConfirm";
import SubscribeQuestion14 from "./pages/SubscribeQuestion14";
import FundDetailLookFeel01 from "./pages/FundDetailLookFeel01";
import MarketplaceLookFeel2 from "./pages/MarketplaceLookFeel2";
import SubscribeQuestion141 from "./pages/SubscribeQuestion141";
import SubscribeQuestion13 from "./pages/SubscribeQuestion13";
import SubscribeQuestion12 from "./pages/SubscribeQuestion12";
import SubscribeQuestion11 from "./pages/SubscribeQuestion11";
import SubscribeQuestion10 from "./pages/SubscribeQuestion10";
import SubscribeQuestion9 from "./pages/SubscribeQuestion9";
import SubscribeQuestion8 from "./pages/SubscribeQuestion8";
import SubscribeQuestion7 from "./pages/SubscribeQuestion7";
import SubscribeQuestion6 from "./pages/SubscribeQuestion6";
import SubscribeQuestion52 from "./pages/SubscribeQuestion52";
import SubscribeQuestion5 from "./pages/SubscribeQuestion5";
import SubscribeQuestion43 from "./pages/SubscribeQuestion43";
import SubscribeQuestion42 from "./pages/SubscribeQuestion42";
import SubscribeQuestion4 from "./pages/SubscribeQuestion4";
import SubscribeQuestion3 from "./pages/SubscribeQuestion3";
import SubscribeQuestion2 from "./pages/SubscribeQuestion2";
import SubscribeQuestion1 from "./pages/SubscribeQuestion1";
import SubscribeListError from "./pages/SubscribeListError";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-complete":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-list-complete":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-1-9":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-list-2":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-sign-docs":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-confirm":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-141":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-look-feel-01":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace-look-feel-2":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-14":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-13":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-12":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-11":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-10":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-9":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-8":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-7":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-6":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-5-2":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-5":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-4-3":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-4-2":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-4":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-3":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-2":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-question-1":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-list-error":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SubscribeList />} />
      <Route path="/subscribe-complete" element={<SubscribeComplete />} />
      <Route
        path="/subscribe-list-complete"
        element={<SubscribeListComplete />}
      />
      <Route path="/subscribe-1-9" element={<Subscribe19 />} />
      <Route path="/subscribe-list-2" element={<SubscribeList2 />} />
      <Route path="/subscribe-sign-docs" element={<SubscribeSignDocs />} />
      <Route path="/subscribe-confirm" element={<SubscribeConfirm />} />
      <Route path="/subscribe-question-141" element={<SubscribeQuestion14 />} />
      <Route
        path="/fund-detail-look-feel-01"
        element={<FundDetailLookFeel01 />}
      />
      <Route
        path="/marketplace-look-feel-2"
        element={<MarketplaceLookFeel2 />}
      />
      <Route path="/subscribe-question-14" element={<SubscribeQuestion141 />} />
      <Route path="/subscribe-question-13" element={<SubscribeQuestion13 />} />
      <Route path="/subscribe-question-12" element={<SubscribeQuestion12 />} />
      <Route path="/subscribe-question-11" element={<SubscribeQuestion11 />} />
      <Route path="/subscribe-question-10" element={<SubscribeQuestion10 />} />
      <Route path="/subscribe-question-9" element={<SubscribeQuestion9 />} />
      <Route path="/subscribe-question-8" element={<SubscribeQuestion8 />} />
      <Route path="/subscribe-question-7" element={<SubscribeQuestion7 />} />
      <Route path="/subscribe-question-6" element={<SubscribeQuestion6 />} />
      <Route path="/subscribe-question-5-2" element={<SubscribeQuestion52 />} />
      <Route path="/subscribe-question-5" element={<SubscribeQuestion5 />} />
      <Route path="/subscribe-question-4-3" element={<SubscribeQuestion43 />} />
      <Route path="/subscribe-question-4-2" element={<SubscribeQuestion42 />} />
      <Route path="/subscribe-question-4" element={<SubscribeQuestion4 />} />
      <Route path="/subscribe-question-3" element={<SubscribeQuestion3 />} />
      <Route path="/subscribe-question-2" element={<SubscribeQuestion2 />} />
      <Route path="/subscribe-question-1" element={<SubscribeQuestion1 />} />
      <Route path="/subscribe-list-error" element={<SubscribeListError />} />
    </Routes>
  );
}
export default App;
