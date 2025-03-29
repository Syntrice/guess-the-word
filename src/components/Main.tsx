import useGameLogic, { GameState } from "../logic/game-logic";
import Button from "./common/Button";
import Keyboard from "./keyboard/Keyboard";
import LifeIndicator from "./life-indicator/LifeIndicator";
import StatusDisplay from "./status-display/StatusDisplay";
import WordDisplay from "./word-display/WordDisplay";

export default function Main() {
    const gameLogic = useGameLogic();

    function getAriaAlertMessage() {
        if (gameLogic.lastGuessedLetter != "") {
            if (gameLogic.correctWord.includes(gameLogic.lastGuessedLetter)) {
                return `Correct! The letter ${gameLogic.lastGuessedLetter} is in the word.`
            } else
            return `Incorrect! The letter ${gameLogic.lastGuessedLetter} is not in the word.`
        }
    }

    return (
        <main className="flex flex-col gap-10">
            <StatusDisplay status={gameLogic.gameState} />
            <LifeIndicator lives={gameLogic.lives} />
            <WordDisplay
                word={gameLogic.correctWord}
                guessedLetters={gameLogic.gussedLetters}
                gameState={gameLogic.gameState}
            />
            <Keyboard
                onType={gameLogic.guess}
                guesses={gameLogic.gussedLetters}
                correctWord={gameLogic.correctWord}
                disabled={
                    gameLogic.gameState === GameState.Lose ||
                    gameLogic.gameState === GameState.Win
                }
            />
            {(gameLogic.gameState === GameState.Lose ||
                gameLogic.gameState === GameState.Win) && (
                <div className="flex justify-center">
                    <Button onClick={gameLogic.restart}>Play Again</Button>
                </div>
            )}
            <p aria-live="polite" role="status" className="sr-only">
                {getAriaAlertMessage()}
            </p>
        </main>
    );
}
