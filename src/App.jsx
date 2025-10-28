import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BooksPage from "./pages/books/Books";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/books" element={<BooksPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
