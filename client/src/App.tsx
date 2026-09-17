import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import MasSaintAntonin from "./pages/MasSaintAntonin";
import LaBascule from "./pages/LaBascule";

function RouterApp() {
  return (
    <Router base={import.meta.env.BASE_URL}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/mas-saint-antonin"} component={MasSaintAntonin} />
        <Route path={"/la-bascule"} component={LaBascule} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <RouterApp />
    </ErrorBoundary>
  );
}

export default App;
