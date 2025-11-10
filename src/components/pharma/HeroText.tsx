"use client";

interface HeroTextProps {
  heading: string;
  highlight?: string;
  description: string;
}

export const HeroText: React.FC<HeroTextProps> = ({
  heading,
  highlight,
  description,
}) => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        {heading.split(highlight || "").map((part, i, arr) =>
          highlight && i < arr.length - 1 ? (
            <span key={i}>
              {part}
              <span className="text-[#ffefef]">{highlight}</span>
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </h1>
      <p className="text-gray-200 max-w-xl mb-8">{description}</p>
    </div>
  );
};
