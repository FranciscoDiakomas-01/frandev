'use cleint'

import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  pauseDuration?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  pauseDuration = 1500,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= current.length) {
      setCurrentText(current.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      setCurrentText(current.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), typingSpeed / 2);
    } else {
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, pauseDuration]);

  return (
    <div className="flex gap-1  min-h-[30px] items-center">
      <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-3xl overflow-hidden">
        {currentText}
      </h2>
      <span className=" text-white border-l-3  h-[30px]"></span>
    </div>
  );
};

export default TypingEffect;
