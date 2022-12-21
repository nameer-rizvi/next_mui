import Box from "@mui/material/Box";

export const Main = (props) => (
  <Box
    component="main"
    sx={{ flexGrow: 1, p: 3, pt: 2, overflow: "auto", minWidth: 50 }}
    {...props}
  />
);
