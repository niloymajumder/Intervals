import { Card, CardContent } from '@/components/ui/card';

const culturePoints = [
  {
    title: 'Interdisciplinary by nature',
    description: 'Editorial, design, and technology sit at the same table from day one.',
  },
  {
    title: 'Slow is a strategy',
    description: 'We pause to reflect, refine, and make sure the work is worth making.',
  },
  {
    title: 'Clarity over hype',
    description: 'We prefer calm systems and well-considered ideas to loud launches.',
  },
];

const benefits = [
  'Remote-friendly schedule with core hours for collaboration.',
  'Annual retreat for shared learning and planning.',
  'Creative budget for tools, books, and courses.',
  'Project rotation across ventures to keep work fresh.',
  'Paid time for research and experimentation.',
  'Health and wellness stipend for full-time roles.',
];

export default function CareersCultureSection() {
  return (
    <section id="culture" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-primary">Culture</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              A studio built for depth.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We are a small team that moves deliberately. We value autonomy, shared responsibility, and
              the space to do careful work. If you want to build ideas that last, you will feel at home here.
            </p>
          </div>
          <div className="grid gap-4">
            {culturePoints.map((point) => (
              <Card key={point.title} className="bg-background/80">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold font-headline">Benefits and support</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-lg border bg-background/70 p-4 text-sm text-muted-foreground">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
