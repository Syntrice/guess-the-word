import { GameState } from "../../logic/game-logic";

interface WordDisplayProps {
    word: string;
    guessedLetters: Set<string>;
    gameState: GameState;
}

export default function WordDisplay({
    word,
    guessedLetters,
    gameState,
}: WordDisplayProps) {
    const chars = word.split("");

    function renderDisplay() {
        switch (gameState) {
            case GameState.Playing:
                return (
                    <>
                        <p aria-live="polite" role="status" className="sr-only">
                            {"Current guess: " +
                                word
                                    .split("")
                                    .map((letter) => {
                                        return guessedLetters.has(letter)
                                            ? letter + "."
                                            : "blank.";
                                    })
                                    .join(" ")}
                        </p>
                        {chars.map((char, index) => (
                            <span
                                className="bg-theme-mid w-12 h-12 border-b-theme-foreground border-b-2 text flex justify-center items-center"
                                key={index}
                            >
                                {guessedLetters.has(char) ? char : ""}
                            </span>
                        ))}
                    </>
                );
            case GameState.Win:
                return (
                    <>
                        <p aria-live="polite" role="status" className="sr-only">
                            {"The word was: " + word + "."}
                        </p>
                        {chars.map((char, index) => (
                            <span
                                className="bg-theme-mid w-12 h-12 border-b-theme-foreground border-b-2 text flex justify-center items-center"
                                key={index}
                            >
                                {char}
                            </span>
                        ))}
                    </>
                );
            case GameState.Lose:
                return (
                    <>
                        <p aria-live="polite" role="status" className="sr-only">
                            {"The word was: " +
                                word +
                                ". Your guess: " +
                                word
                                    .split("")
                                    .map((letter) => {
                                        return guessedLetters.has(letter)
                                            ? letter + "."
                                            : "blank.";
                                    })
                                    .join(" ")}
                        </p>
                        {chars.map((char, index) => (
                            <span
                                className={"bg-theme-mid w-12 h-12 border-b-theme-foreground border-b-2 flex justify-center items-center " + (guessedLetters.has(char) ? "" : "text-theme-red")}
                                key={index}
                            >{char}</span>
                        ))}
                    </>
                );
        }
    }

    return (
        <section className="flex justify-center gap-2 text-3xl">
            {renderDisplay()}
        </section>
    );
}
