import { Home, Qrcode, Footer, Header, Productor } from "./pages/index.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

// 标准布局
function Standards() {
  return (
    <>
      <Header />
      <Outlet /> {/* 这里会渲染子路由的内容 */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="hs_container">
      <Router>
        <Routes>
          <Route element={<Standards />}>
            <Route path="/" element={<Home />} />
            <Route path="/productor" element={<Productor />} />
          </Route>

          <Route path="/qrcode/:index" element={<Qrcode />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
