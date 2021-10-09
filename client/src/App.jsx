import { FaqsContainer } from "./containers/faqs";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTER from "./components/constants/Router";
import { Browse, Home, SignIn, SignUp } from "./pages";

import { IsUserRedirect, ProtectedRoute } from "./helpers/Router";
import { useAuthListener } from './hooks';

function App() {
  const user = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          path={ROUTER.SIGN_IN}
          user={user}
          loggedInPath={ROUTER.BROWSE}
          component={SignIn}
        />
        <IsUserRedirect
          path={ROUTER.SIGN_UP}
          user={user}
          loggedInPath={ROUTER.BROWSE}
          component={SignUp}
        />
        <ProtectedRoute
          path={ROUTER.BROWSE}
          user={user}
          component={Browse}
        />
        <IsUserRedirect
          exact
          path={ROUTER.HOME}
          user={user}
          loggedInPath={ROUTER.BROWSE}
          component={Home}
        />
      </Switch>
    </Router>
  );
}

export default App;
