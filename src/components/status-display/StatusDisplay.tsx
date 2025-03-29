import { GameState } from "../../logic/game-logic";

interface StatusDisplayProps {
    status: GameState;
}

export default function StatusDisplay({ status }: StatusDisplayProps) {
    switch (status) {
        case GameState.Playing:
            return null;
        case GameState.Win:
            return (
                <section aria-live="polite" role="status" className="bg-theme-green py-5 w-full text-center rounded-2xl shadow-2xl">
                    <h2 className="text-2xl font-bold text-theme-foreground">
                        You Win!
                    </h2>
                    <p className="text-xl">Well done! 🎉</p>
                </section>
            );
        case GameState.Lose:
            return (
                <section aria-live="polite" role="status" className="bg-theme-darkred py-5 w-full text-center rounded-2xl shadow-2xl">
                    <h2 className="text-2xl font-bold text-theme-foreground">
                        You Lose!
                    </h2>
                    <p className="text-xl">Better luck next time!</p>
                </section>
            );
    }
}
