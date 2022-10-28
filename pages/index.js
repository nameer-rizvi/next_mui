import { useCSR } from "../hooks";
import { useContext } from "react";
import { DataContext } from "../context";
import { Main, ThemeToggle } from "../components";
import Typography from "@mui/material/Typography";
import { APP_NAME, APP_DESCRIPTION, STRING_LOREM_IPSUM } from "../constant";

function Home() {
  const csr = useCSR();

  const dataContext = useContext(DataContext);

  return (
    <Main>
      <Typography variant="h1" sx={{ fontWeight: "bold" }} gutterBottom>
        {APP_NAME}
      </Typography>
      <Typography variant="h2" gutterBottom>
        {APP_DESCRIPTION}
      </Typography>
      {STRING_LOREM_IPSUM.map((i, index) => (
        <Typography key={index} variant="body1" gutterBottom>
          {i}
        </Typography>
      ))}
      <ThemeToggle />
      {csr.render && dataContext.data?.id && (
        <Typography variant="small" sx={{ fontWeight: "bold" }}>
          {"PAGE ID:"} {dataContext.data?.id?.toUpperCase()}
        </Typography>
      )}
    </Main>
  );
}

export default Home;
