import { useState } from "react";
import { words } from "./words";

export enum GameState {
    Playing,
    Win,
    Lose
};

export interface GameLogic {
    lives: number;
    correctWord: string;
    gussedLetters: Set<string>;
    gameState: GameState;
    guess: (letter: string) => void;
    restart: () => void;
    lastGuessedLetter: string;
}

export default function useGameLogic(): GameLogic {
    const [guesses, setGuesses] = useState<Set<string>>(new Set());
    const [correctWord, setCorrectWord] = useState<string>(getRandomWord())
    const wrongGuesses = Array.from(guesses).filter(letter => !correctWord.includes(letter)).length;
    const [lastGuessedLetter, setLastGuessedLetter] = useState<string>("");

    function getRandomWord() {
        const index = Math.floor(Math.random() * words.length)
        return words[index].toUpperCase()
    }

    function guess(letter: string) {
        setGuesses(prev => new Set(prev).add(letter));
        setLastGuessedLetter(letter);
    }

    function restart() {
        setGuesses(new Set())
        setCorrectWord(getRandomWord())
        
    }

    function getGameState() {
        if (wrongGuesses === 8) {
            return GameState.Lose;
        }

        if (correctWord.split("").every(letter => guesses.has(letter))) {
            return GameState.Win;
        }

        return GameState.Playing;
    }

    return {
        lives: Math.max(0,8 - wrongGuesses),
        correctWord: correctWord,
        gussedLetters: guesses,
        gameState: getGameState(),
        guess: guess,
        restart: restart,
        lastGuessedLetter: lastGuessedLetter
    };
}
