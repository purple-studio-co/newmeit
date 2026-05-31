import { useEffect, useRef } from 'react';
import Section from './sections/Section';

const wordsList: string[] = [
  'истории',
  'идеи',
  'посты',
  'курсы',
  'мнения',
  'себя',
];

type HeroProps = {
  buttonType?: 'to-application' | 'try-newme';
};

export default function Header(_props: HeroProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const cursorElement = cursorRef.current;

    let wordIndex = 0;
    let letterIndex = 0;
    let interval: ReturnType<typeof setInterval>;

    function type() {
      const fullWord = wordsList[wordIndex];
      const text = fullWord.substring(0, letterIndex - 1);

      if (textElement !== null) {
        textElement.textContent = text;
      }

      letterIndex++;

      if (text === fullWord) {
        clearInterval(interval);
        setTimeout(() => {
          interval = setInterval(del, 75);
        }, 750);
      }
    }

    function del() {
      const fullWord = wordsList[wordIndex];
      const text = fullWord.substring(0, letterIndex - 1);

      if (textElement !== null) {
        textElement.textContent = text;
      }

      letterIndex--;

      if (text === '') {
        clearInterval(interval);

        if (wordIndex === wordsList.length - 1) {
          wordIndex = 0;
        } else {
          wordIndex++;
        }

        letterIndex = 0;

        setTimeout(() => {
          if (cursorElement !== null) {
            cursorElement.style.display = 'inline-block';
          }

          interval = setInterval(type, 75);
        }, 75);
      }
    }

    interval = setInterval(type, 75);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Section
      verticalSpacing="lg"
      className="z-20 max-w-96 justify-center md:max-w-max md:pb-8"
    >
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-4 lg:gap-5">
        <h1 className="text-center text-[40px] font-extrabold leading-[40px] md:text-6xl">
          Создавайте
        </h1>
        <div className="flex h-[40px] items-center text-center md:h-[72px]">
          <span
            ref={textRef}
            className="inline-block text-[40px] font-extrabold leading-[40px] text-[#BB97DB] md:text-6xl"
          ></span>
          <span
            ref={cursorRef}
            className="typing-cursor inline-block h-10 w-0.5 bg-[#BB97DB] md:h-[68px]"
          ></span>
        </div>
      </div>
      <h1 className="w-full text-center text-[32px] font-extrabold leading-[40px] md:max-w-[1000px] md:text-6xl">
        с помощью искусственного интеллекта
      </h1>
    </Section>
  );
}
