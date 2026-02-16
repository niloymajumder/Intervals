const steps = [
  {
    title: 'Start with a short note',
    description: 'Send a brief intro, links to work, and what kind of interval you want to build.',
  },
  {
    title: 'Conversation with the team',
    description: 'We talk through your approach, values, and the kind of problems you enjoy.',
  },
  {
    title: 'Small paid exercise',
    description: 'A focused task that mirrors the real work, scoped to a few hours.',
  },
  {
    title: 'Final alignment',
    description: 'We confirm scope, timeline, and what success looks like for the role.',
  },
];

export default function CareersProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">Hiring process</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Clear, considerate, and fast.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We keep the process human. You will always know where you stand, and we will never ask for unpaid work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-lg border bg-background/70 p-6">
              <div className="text-sm font-semibold text-primary">Step {index + 1}</div>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
