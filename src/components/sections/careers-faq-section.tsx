import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Do you hire internationally?',
    answer: 'Yes. We are remote-friendly and currently work across time zones near UTC+6.',
  },
  {
    question: 'Can I apply if I do not meet every requirement?',
    answer: 'Absolutely. We care more about craft, curiosity, and alignment than a perfect checklist.',
  },
  {
    question: 'What should I include in my application?',
    answer: 'A short note, your portfolio or samples, and a few sentences about what you want to build.',
  },
  {
    question: 'How long does the process take?',
    answer: 'Most roles move from first contact to offer within two to three weeks.',
  },
];

export default function CareersFAQSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            A few answers before you apply.
          </h2>
        </div>
        <div className="mt-10 max-w-2xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
