"use client";

import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { WordlePage, Form, Words, Word, Letter } from "./styles";
// @ts-ignore
import { generateWord } from "smallwords";

type AnswerType = "Correct" | "Incorrect" | "WrongPos";
type LetterType = { letter: string; status: AnswerType };

const Wordle = () => {
  const [guess, setGuess] = useState("");
  const [resultDisplay, setResultDisplay] = useState<LetterType[][]>([]);
  const [targetWord, setTargetWord] = useState(generateWord());
  const [guessCount, setGuessCount] = useState(0);

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
      }
      return { letter, status: "Incorrect" };
    });

    setResultDisplay([
      ...(resultDisplay as LetterType[][]),
      result as LetterType[],
    ]);
    setGuessCount(guessCount + 1);
    setGuess("");
  };

  const restartGame = () => {
    setGuess("");
    setResultDisplay([]);
    setGuessCount(0);

    setTargetWord(generateWord());
  };

  return (
    <WordlePage>
      <Words>
        {resultDisplay.map((guessResult, index) => (
          <Word key={index}>
            {guessResult.map((letterObject, i) => (
              <Letter key={i} status={letterObject.status}>
                {letterObject.letter}
              </Letter>
            ))}
          </Word>
        ))}
      </Words>
      <Form disabled={guessCount >= 6}>
        <input
          type="text"
          value={guess}
          onChange={handleInputChange}
          maxLength={5}
          onKeyDown={handleEnterKey}
        />
        <button
          onClick={checkGuess}
          disabled={guessCount >= 6 || guess.length !== 5}
        >
          Enter
        </button>
      </Form>
      <Form disabled={guessCount < 6}>
        <p>{targetWord}</p>
        <button onClick={restartGame}>Restart</button>
      </Form>
    </WordlePage>
  );
};

export default Wordle;
