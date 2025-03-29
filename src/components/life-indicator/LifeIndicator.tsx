import { Icon } from "@iconify/react";

interface LifeIndicatorProps {
    lives: number;
}

export default function LifeIndicator({ lives }: LifeIndicatorProps) {
    return (
        <section>
            <p aria-live="polite" role="status" className="sr-only">{"Lives remaining: " + lives + "."}</p>
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
        </section>
    );
}
