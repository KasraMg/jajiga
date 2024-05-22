import {
  Accordion as AccordionParent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/shadcn/ui/accordion";
import { FC } from "react";

interface AccordionProps {
  className?: string;
  title: string;
  text: string;
  id: number;
}

const Accordion: FC<AccordionProps> = ({ className, title, text, id }) => {
  return (
    <AccordionParent
      className={`${className ? className : ""}`}
      type="single"
      collapsible
    >
      <AccordionItem value={`item-${id}`}>
        <AccordionTrigger className="font-vazir text-sm !font-normal hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent className="text-[#404040] font-vazir font-light  text-sm  leading-6">
          {text}
        </AccordionContent>
      </AccordionItem>
    </AccordionParent>
  );
};

export default Accordion;
