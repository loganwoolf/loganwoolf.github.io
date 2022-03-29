import { useState } from "react";

export default function useView(initialMode) {
  const [view, setView] = useState(initialMode);

  const transition = (newMode) => {
    setView(newMode);
  };

  return {view, transition};
}
