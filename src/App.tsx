import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { BottomTab } from "./components/BottomTab";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";

const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily:
      '"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
    backgroundColor: "#f8f9fa",
  },
};

const AppContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #f8f9fa;
  position: relative;
  padding-bottom: 60px;
  border-left: 1px solid #e9ecef;
  border-right: 1px solid #e9ecef;
`;

function App() {
  return (
    <Router>
      <Global styles={globalStyles} />
      <AppContainer>
        <AppRoutes />
        <BottomTab />
      </AppContainer>
    </Router>
  );
}

export default App;
