import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./utils/ContextApi";
import { lazy, Suspense } from "react";
import Error from "./components/Error";
import Loader from "./components/Loader";

// Dynamic imports
const Home = lazy(() => import("./components/Home"));
const SearchResult = lazy(() => import("./components/SearchResult"));

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
            errorElement={<Error />}
          />
          <Route
            path="/:query/:startIndex"
            element={
              <Suspense fallback={<Loader />}>
                <SearchResult />
              </Suspense>
            }
          />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
