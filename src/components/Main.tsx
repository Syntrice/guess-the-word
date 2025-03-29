import useGameLogic, { GameLogic, GameState } from "../logic/game-logic";
import Button from "./common/Button";
import Keyboard from "./keyboard/Keyboard";
import LifeIndicator from "./life-indicator/LifeIndicator";
import StatusDisplay from "./status-display/StatusDisplay";
import WordDisplay from "./word-display/WordDisplay";

export default function Main() {
    const gameLogic = useGameLogic();

    return (
        <main className="flex flex-col gap-10">
            <StatusDisplay status={gameLogic.gameState} />
            <LifeIndicator lives={gameLogic.lives} />
            <WordDisplay
                word={gameLogic.correctWord}
                guessedLetters={gameLogic.gussedLetters}
            />
            <Keyboard
                onType={gameLogic.guess}
                guesses={gameLogic.gussedLetters}
                correctWord={gameLogic.correctWord}
            />
            {(gameLogic.gameState === GameState.Lose ||
                gameLogic.gameState === GameState.Win) && (
                <div className="flex justify-center">
                    <Button onClick={gameLogic.restart}>Play Again</Button>
                </div>
            )}
        </main>
    );
}
