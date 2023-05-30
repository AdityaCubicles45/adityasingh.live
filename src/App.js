import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import Loading from "./subComponents/Loading";
import React from "react";

//Components
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const MySkillsPage = lazy(() => import("./components/MySkillPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));
const SoundBar = lazy(() => import("./subComponents/SoundBar"));

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <SoundBar />
          {/* Changed prop from exitBefore to mode */}
          <AnimatePresence mode="wait">
            {/* Changed Switch to Routes */}

            <Routes location={location} key={location.pathname}>
              {/* Changed component to element */}

              <Route path="/" element={<Main />} />

              <Route path="/about" element={<AboutPage />} />

              <Route path="/blog" element={<BlogPage />} />

              <Route path="/work" element={<WorkPage />} />

              <Route path="/skills" element={<MySkillsPage />} />

              <Route path="*" element={<Main />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
