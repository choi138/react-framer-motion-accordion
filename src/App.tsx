import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accordion from "./main/accordion";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Accordion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
