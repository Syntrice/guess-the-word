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
                <div className="bg-theme-green py-5 w-full text-center rounded-2xl shadow-2xl">
                    <h2 className="text-2xl font-bold text-theme-foreground">
                        You Win!
                    </h2>
                    <p className="text-xl">Well done! 🎉</p>
                </div>
            );
        case GameState.Lose:
            return (
                <div className="bg-theme-darkred py-5 w-full text-center rounded-2xl shadow-2xl">
                    <h2 className="text-2xl font-bold text-theme-foreground">
                        You Lose!
                    </h2>
                    <p className="text-xl">Better luck next time!</p>
                </div>
            );
    }
}
