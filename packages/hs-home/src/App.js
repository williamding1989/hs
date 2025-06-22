import {
  Home,
  Qrcode,
  Footer,
  Header,
  Productor,
  Cookbook,
  Prodetail,
  Cookdetail,
  Newslist,
  Newsdetail,
  Preview,
} from "./pages/index.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// 标准布局
function Standards() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

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
            {/* 首页 */}
            <Route path="/" element={<Home />} />

            {/* 产品介绍 */}
            <Route path="/productor" element={<Productor />} />

            {/* 产品详情 */}
            <Route path="/prodetail/:id" element={<Prodetail />} />

            {/* 菜谱 */}
            <Route path="/cookbook" element={<Cookbook />}>
              {/* 菜谱详情 */}
              <Route path="cookdetail/:id" element={<Cookdetail />} />
            </Route>

            {/* 新闻列表 */}
            <Route path="/newslist" element={<Newslist />} />

            {/* 新闻详情 */}
            <Route path="/newsdetail/:id" element={<Newsdetail />} />
          </Route>

          {/* 二维码 */}
          <Route path="/qrcode/:index" element={<Qrcode />} />

          {/* 预览 */}
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
