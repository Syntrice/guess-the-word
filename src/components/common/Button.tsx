import { ReactNode } from "react";

interface ButtonProps {
    onClick?: () => void;
    children?: ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
    return (
        <button
            className="bg-theme-blue text-2xl font-bold border-2 border-theme-foreground rounded-md p-5 text-theme-background w-full max-w-70 hover:bg-theme-blue-accent transition-colors"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
