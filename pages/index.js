import Typography from "@mui/material/Typography";
import { APP_NAME, APP_DESCRIPTION, STRING_LOREM_IPSUM } from "../constant";
import { ThemeToggle } from "../components";

const Home = () => (
  <div style={{ padding: 50 }}>
    <Typography variant="h1" gutterBottom>
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
  </div>
);

export default Home;
