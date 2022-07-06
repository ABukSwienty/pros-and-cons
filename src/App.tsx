import { Header } from "./components/Organisms/Header";
import DarkModeProvider from "./store/DarkModeProvider";
import { AppWrapper } from "./components/Atoms/AppWrapper";
import { Route, Routes, useLocation } from "react-router-dom";
import DecisionProvider from "./store/DecisionsProvider";
import Main from "./components/pages/main";
import PageLayout from "./components/templates/PageLayout";

import Tally from "./components/pages/tally";

import { AnimatePresence } from "framer-motion";
import ProCon from "./components/pages/proCon";
import { createPortal } from "react-dom";

function App() {
  const location = useLocation();
  return (
    <DarkModeProvider>
      <DecisionProvider>
        <AppWrapper>
          <Header showModal={false} />
          <PageLayout>
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Main />} />
                <Route path="/cons" element={<ProCon pro={false} />} />
                <Route path="/pros" element={<ProCon pro={true} />} />
                <Route path="/tally" element={<Tally />} />
              </Routes>
            </AnimatePresence>
          </PageLayout>
        </AppWrapper>
      </DecisionProvider>
    </DarkModeProvider>
  );
}

export default App;
