import React, { useState, useEffect } from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
// import { createUploadLink } from "apollo-upload-client";
import { createHttpLink } from "apollo-link-http";
import { useAuthState } from "react-firebase-hooks/auth";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import firebase from "../../services/firebase";
// import routes from "../Routing/routes";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../Theme";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Layout from "../Layout";
// import Landing from "../Landing";
// import BottomNavigation from "../BottomNavigation";
// import AppBar from "../AppBar";
// import * as R from "../Routing/constants";
// import RoutesProject from "../RoutesProject";
// import PrivateRoute from "../Routing/PrivateRoute";
// import { ReadProjects } from "../ReadProjects";
import { Routes } from "../Routes/Routes";

const App: React.FC = () => {
  const [isLoggedIn, setIsLogin] = useState(false);
  const [user] = useAuthState(firebase.auth());
  // const isMobile = useMediaQuery("(max-width:600px)");

  const uri =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_SERVER_URI
      : "http://localhost:4000";

  const httpLink = createHttpLink({ uri });

  const authLink = setContext(async (_, { headers }) => {
    if (typeof user !== "undefined" && user !== null) {
      const token = await user.getIdToken();
      return { headers: { ...headers, authorization: `Bearer ${token}` } };
    } else return headers;
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  useEffect(() => {
    if (isLoggedIn && !user) {
      client.resetStore();
      setIsLogin(false);
    } else if (user) {
      setIsLogin(true);
    }
  }, [isLoggedIn, user, client]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
