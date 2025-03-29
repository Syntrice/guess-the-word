interface WordDisplayProps {
    word: string;
    guessedLetters: Set<string>;
}

export default function WordDisplay({
    word,
    guessedLetters,
}: WordDisplayProps) {
    const chars = word.split("");

    return (
        <section className="flex justify-center gap-2 text-3xl">
            <p aria-live="polite" role="status" className="sr-only">
                {"Current guess: " + word.split("").map(letter => {
                    return guessedLetters.has(letter) ? letter + "." : "blank."
                }).join(" ")}
            </p>
            {chars.map((char, index) => (
                <span
                    className="bg-theme-mid w-12 h-12 border-b-theme-foreground border-b-2 text flex justify-center items-center"
                    key={index}
                >
                    {guessedLetters.has(char) ? char : ""}
                </span>
            ))}
        </section>
    );
}
