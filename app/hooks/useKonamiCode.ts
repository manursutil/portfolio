import { useEffect, useState } from "react";

export function useKonamiCode(callback: () => void) {
  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  const [input, setInput] = useState<string[]>([]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      setInput((prev) => {
        const newInput = [...prev, e.key].slice(-konamiSequence.length);

        if (
          newInput.length === konamiSequence.length &&
          newInput.every((val, idx) => val === konamiSequence[idx])
        ) {
          callback();
        }

        return newInput;
      });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [callback]);
}
