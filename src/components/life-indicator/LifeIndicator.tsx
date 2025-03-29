import { Icon } from "@iconify/react";

interface LifeIndicatorProps {
    lives: number;
}

export default function LifeIndicator({ lives }: LifeIndicatorProps) {
    return (
        <ul className="flex justify-center gap-5">
            {[...Array(lives)].map((_, index) => (
                <li key={index}>
                    <Icon
                        icon="fluent-emoji-flat:red-heart"
                        className="text-4xl max-sm:text-2xl"
                    />
                </li>
            ))}
        </ul>
    );
}
