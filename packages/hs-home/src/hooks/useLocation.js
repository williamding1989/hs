// components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation as location } from "react-router-dom";

export const useLocation = () => {
  const { pathname } = location();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};
