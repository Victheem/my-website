"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface HeroAccordionProps {
  items: { title: string; content: string }[];
}

export const HeroAccordion: React.FC<HeroAccordionProps> = ({ items }) => {
  return (
    <div className="mt-10 max-w-xl">
      <Accordion type="single" defaultValue="item-0" collapsible>
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="mb-3 bg-white/5 rounded-lg"
          >
            <AccordionTrigger className="px-4 py-3 text-left text-white font-medium">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-sm text-gray-200">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
