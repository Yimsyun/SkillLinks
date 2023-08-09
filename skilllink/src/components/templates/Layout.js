import { Outlet, Link } from "react-router-dom";
import Header from "@/components/organisms/Header";
// import CategoryMenu from "./CategoryMenu";
// import Link from "@mui/material/Link";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
