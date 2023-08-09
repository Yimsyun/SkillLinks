import { Outlet } from "react-router-dom";

import Stack from "@mui/material/Stack";

export default function SpaceLayout({ children }) {
  return (
    <Stack sx={{ padding: "0 150px" }}>
      {children ? children : <Outlet />}
    </Stack>
  );
}
