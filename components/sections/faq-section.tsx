import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Faq {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs: Faq[];
  heading?: string;
}

export function FaqSection({
  faqs,
  heading = "Frequently asked questions",
}: FaqSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-10 text-center">
          {heading}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-ink">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
