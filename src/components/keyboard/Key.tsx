import React from "react";
import { KeyState } from "./key-state";

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
                if (forceDisable) {
                    return " bg-theme-green";
                }
                return " bg-theme-green hover:bg-theme-green-accent";
            case KeyState.Incorrect:
                if (forceDisable) {
                    return " bg-theme-red";
                }
                return " bg-theme-red hover:bg-theme-red-accent";
            case KeyState.Unknown:
                if (forceDisable) {
                    return " bg-theme-amber";
                }
                return " bg-theme-amber hover:bg-theme-amber-accent";
        }
    }

    function isKeyDisabled() {
        if (forceDisable || keyState === KeyState.Correct || keyState === KeyState.Incorrect) {
            return true;
        }
        return false;
    }

    return (
        <button
            className={
                "text-theme-dark border-2 rounded-md border-theme-foreground flex w-10 h-10 justify-center items-center text-2xl shadow-2xl transition-colors" +
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
