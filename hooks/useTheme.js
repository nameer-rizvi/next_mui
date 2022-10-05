import { useState, useEffect, useMemo } from "react";
import { STYLE_THEMES, LOCALSTORAGE_MODE } from "../constant";
import { support } from "simpul";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";

export function useTheme() {
  const [mode, setMode] = useState(STYLE_THEMES[0]);

  const storedMode =
    support.window() && localStorage.getItem(LOCALSTORAGE_MODE);

  const preferredMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? STYLE_THEMES[1]
    : STYLE_THEMES[0];

  useEffect(() => {
    if (storedMode) {
      setMode(storedMode);
    } else setMode(preferredMode);
  }, [preferredMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode =
          mode === STYLE_THEMES[0] ? STYLE_THEMES[1] : STYLE_THEMES[0];
        setMode(newMode);
        localStorage.setItem(LOCALSTORAGE_MODE, newMode);
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return [colorMode, theme];
}
