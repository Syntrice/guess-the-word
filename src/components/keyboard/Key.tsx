import React from "react";
import { KeyState } from "../../logic/game-logic";

interface KeyProps {
    keyState: KeyState;
    children: React.ReactNode;
    onClick?: () => void;
    forceDisable?: boolean;
}

export default function Key({ keyState, onClick, children, forceDisable }: KeyProps) {
    function getKeyColor() {
        switch (keyState) {
            case KeyState.Correct:
                return " bg-theme-green";
            case KeyState.Incorrect:
                return " bg-theme-red";
            case KeyState.Unknown:
                return " bg-theme-amber";
        }
    }

    function isKeyDisabled() {
        if (forceDisable) {
            return true
        }

        if (keyState === KeyState.Correct || keyState === KeyState.Incorrect) {
            return true;
        }
        return false;
    }

    return (
        <button
            className={
                "text-theme-dark border-2 rounded-md border-theme-foreground flex w-10 h-10 justify-center items-center text-2xl shadow-2xl" +
                getKeyColor()
            }
            onClick={onClick}
            disabled={isKeyDisabled()}
            aria-disabled={isKeyDisabled()}
        >
            {children}
        </button>
    );
}
