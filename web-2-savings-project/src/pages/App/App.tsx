import React, { useState, useEffect } from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { createHttpLink } from "apollo-link-http";
import { useAuthState } from "react-firebase-hooks/auth";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import firebase from "../../services/firebase";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../components/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Pages } from "../Pages";

export const App: React.FC = () => {
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Router>
            <Pages />
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};
