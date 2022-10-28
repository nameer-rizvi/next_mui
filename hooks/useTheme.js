import { useState, useEffect, useMemo } from "react";
import { useLocalStore } from "./useLocalStore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";
import { STYLE_THEMES, LOCALSTORE_MODE_KEY } from "../constant";

export function useTheme() {
  const [mode, setMode] = useState(STYLE_THEMES[0]);

  const localStore = useLocalStore(LOCALSTORE_MODE_KEY);

  const preferredMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? STYLE_THEMES[1]
    : STYLE_THEMES[0];

  useEffect(() => {
    if (localStore.value) {
      setMode(localStore.value);
    } else {
      setMode(preferredMode);
      localStore.update(preferredMode);
    }
  }, [preferredMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode =
          mode === STYLE_THEMES[0] ? STYLE_THEMES[1] : STYLE_THEMES[0];
        setMode(newMode);
        localStore.update(newMode);
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return [colorMode, theme];
}
