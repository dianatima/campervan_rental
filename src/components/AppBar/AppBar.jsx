import { Navigation } from "components/Navigation/Navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { AppBarWrap } from "./AppBar.styled";

export const AppBarTop = () => {

  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}> */}
        <AppBarWrap>
          <Navigation />
        </AppBarWrap>
      {/* </Box> */}
    </>
  );
};
