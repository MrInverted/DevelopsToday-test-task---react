import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";

import Error from "./components/Error";
import Layout from "./layouts/Layout";
import OneCountry from "./pages/OneCountry";
import AllCountries from "./pages/AllCountries";



function App() {
  return (
    <ErrorBoundary fallback={<Error />} >
      <Layout>
        <Routes>
          <Route path="/" Component={AllCountries} />
          <Route path="/:countryCode" Component={OneCountry} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  )
}

export default App
