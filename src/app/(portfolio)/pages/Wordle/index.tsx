"use client";

import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
} from "react";
import {
  WordlePage,
  Form,
  Submit,
  Keyboard,
  Key,
  Words,
  Word,
  Letter,
} from "./styles";
import { generate } from "random-words";
import { IoIosBackspace } from "react-icons/io";
import { PiKeyReturnFill } from "react-icons/pi";

type AnswerType = "Correct" | "Incorrect" | "WrongPos";
type LetterType = { letter: string; status: AnswerType };

const Wordle = () => {
  const [guess, setGuess] = useState("");
  const [resultList, setResultList] = useState<LetterType[][]>([]);
  const [targetWord, setTargetWord] = useState<string>(
    generate({
      minLength: 5,
      maxLength: 5,
      exactly: 1,
    })[0].toUpperCase()
  );
  const [guessCount, setGuessCount] = useState(0);
  const [correct, setCorrect] = useState(false);
  const wordsRef = useRef<HTMLDivElement>(null);
  const keys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  // Tracks keyboard colours
  const correctLettersRef = useRef<string[]>([]);
  const wrongPosLettersRef = useRef<string[]>([]);
  const incorrectLettersRef = useRef<string[]>([]);

  // On-screen keyboard handling
  const handleLetterClick = (letter: string) => {
    if (guess.length < 5 && guessCount < 6 && !correct) {
      setGuess(guess + letter);
    }
  };

  const handleBackspace = () => {
    if (guess.length > 0 && guessCount < 6 && !correct) {
      setGuess(guess.slice(0, -1));
    }
  };

  // Input field handling
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.toUpperCase().replace(/[^A-Z]/g, ""); // Only allow Latin letters
    setGuess(input.slice(0, 5)); // Limit to 5 characters
  };

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (guess.length === 5 && guessCount < 6) {
        checkGuess();
      }
    }
  };

  useEffect(() => {
    // Scroll to the bottom when the resultList changes
    if (wordsRef.current) {
      wordsRef.current.scrollTop = wordsRef.current.scrollHeight;
    }
  }, [resultList]);

  // Game logic
  const checkGuess = () => {
    // Count the frequency of each letter in the target word
    const targetMap = targetWord
      .split("")
      .reduce((map: Map<string, number>, letter: string) => {
        map.set(letter, (map.get(letter) || 0) + 1);
        return map;
      }, new Map<string, number>());

    // Compare the guess against the target word and generate the result array
    const result = guess.split("").map((letter, i) => {
      if (letter === targetWord[i]) {
        targetMap.set(letter, targetMap.get(letter)! - 1);
        return { letter, status: "Correct" };
      } else if (targetMap.has(letter) && targetMap.get(letter)! > 0) {
        targetMap.set(letter, targetMap.get(letter)! - 1);
        return { letter, status: "WrongPos" };
      } else {
        return { letter, status: "Incorrect" };
      }
    });

    // Track colours
    result.forEach(({ letter, status }) => {
      if (status === "Correct") {
        correctLettersRef.current.push(letter);
      } else if (status === "WrongPos") {
        wrongPosLettersRef.current.push(letter);
      } else {
        incorrectLettersRef.current.push(letter);
      }
    });

    setResultList([...(resultList as LetterType[][]), result as LetterType[]]);
    setGuessCount(guessCount + 1);
    setGuess("");

    if (resultList.length >= 1) {
      setCorrect(guess === targetWord);
    }
  };

  const getKeyColor = (key: string) => {
    if (correctLettersRef.current.includes(key)) {
      return "Correct";
    } else if (wrongPosLettersRef.current.includes(key)) {
      return "WrongPos";
    } else if (incorrectLettersRef.current.includes(key)) {
      return "Incorrect";
    } else {
      return;
    }
  };

  const restartGame = () => {
    setGuess("");
    setResultList([]);
    setGuessCount(0);
    setCorrect(false);

    correctLettersRef.current = [];
    wrongPosLettersRef.current = [];
    incorrectLettersRef.current = [];

    setTargetWord(
      generate({
        minLength: 5,
        maxLength: 5,
        exactly: 1,
      })[0].toUpperCase()
    );
  };

  return (
    <WordlePage>
      <Words ref={wordsRef}>
        {resultList.map((guessResult, index) => (
          <Word key={index}>
            {guessResult.map((letterObject, i) => (
              <Letter key={i} status={letterObject.status}>
                {letterObject.letter}
              </Letter>
            ))}
          </Word>
        ))}
      </Words>
      <Form disabled={guessCount >= 6 || correct}>
        <div>
          <input
            type="text"
            value={guess}
            onChange={handleInputChange}
            maxLength={5}
            onKeyDown={handleEnterKey}
          />
          <Submit
            onClick={checkGuess}
            disabled={guessCount >= 6 || guess.length !== 5}
          >
            Enter
          </Submit>
        </div>
        <Keyboard>
          {keys.map((row, rowIndex) => (
            <span key={rowIndex}>
              {rowIndex === 2 && (
                <Key
                  onClick={checkGuess}
                  disabled={guessCount >= 6 || guess.length !== 5 || correct}
                >
                  <PiKeyReturnFill />
                </Key>
              )}
              {row.split("").map((key, index) => (
                <Key
                  key={index}
                  onClick={() => handleLetterClick(key)}
                  status={getKeyColor(key)}
                >
                  {key}
                </Key>
              ))}
              {rowIndex === 2 && (
                <Key
                  onClick={handleBackspace}
                  disabled={guess.length === 0 || guessCount >= 6 || correct}
                >
                  <IoIosBackspace />
                </Key>
              )}
            </span>
          ))}
        </Keyboard>
      </Form>
      <Form disabled={guessCount < 6 && !correct}>
        <div>
          <p>{targetWord}</p>
          <Submit onClick={restartGame}>Restart</Submit>
        </div>
      </Form>
    </WordlePage>
  );
};

export default Wordle;
