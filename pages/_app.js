import ContextProvider from "src/utils/ContextProvider";
import GlobalStyles from "@assets/styles/GlobalStyles";
const App = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default App;
