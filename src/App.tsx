import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FundDetailLookFeel01 from "./pages/FundDetailLookFeel01";
import MarketplaceLookFeel2 from "./pages/MarketplaceLookFeel2";
import SubscribeComplete from "./pages/SubscribeComplete";
import SubscribeListComplete from "./pages/SubscribeListComplete";
import SubscribeList2 from "./pages/SubscribeList2";
import Subscribe19 from "./pages/Subscribe19";
import Subscribe111 from "./pages/Subscribe111";
import Subscribe110 from "./pages/Subscribe110";
import Subscribe18 from "./pages/Subscribe18";
import Subscribe17 from "./pages/Subscribe17";
import Subscribe16 from "./pages/Subscribe16";
import Subscribe15 from "./pages/Subscribe15";
import Subscribe11 from "./pages/Subscribe11";
import SubscribeList from "./pages/SubscribeList";
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
      case "/marketplace-look-feel-2":
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
      case "/subscribe-list-2":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-1-9":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-1-11":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-1-10":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-1-8":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-1-7":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-1-6":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-1-5":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-1-1":
        title = "";
        metaDescription = "";
        break;
      case "/subscribe-list":
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
      <Route path="/" element={<FundDetailLookFeel01 />} />
      <Route
        path="/marketplace-look-feel-2"
        element={<MarketplaceLookFeel2 />}
      />
      <Route path="/subscribe-complete" element={<SubscribeComplete />} />
      <Route
        path="/subscribe-list-complete"
        element={<SubscribeListComplete />}
      />
      <Route path="/subscribe-list-2" element={<SubscribeList2 />} />
      <Route path="/subscribe-1-9" element={<Subscribe19 />} />
      <Route path="/subscribe-1-11" element={<Subscribe111 />} />
      <Route path="/subscribe-1-10" element={<Subscribe110 />} />
      <Route path="/subscribe-1-8" element={<Subscribe18 />} />
      <Route path="/subscribe-1-7" element={<Subscribe17 />} />
      <Route path="/subscribe-1-6" element={<Subscribe16 />} />
      <Route path="/subscribe-1-5" element={<Subscribe15 />} />
      <Route path="/subscribe-1-1" element={<Subscribe11 />} />
      <Route path="/subscribe-list" element={<SubscribeList />} />
    </Routes>
  );
}
export default App;
