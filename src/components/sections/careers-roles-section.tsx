import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { careerRoles } from '@/lib/careers';

function buildRoleLink(slug: string) {
  return `/careers/${slug}`;
}

export default function CareersRolesSection() {
  return (
    <section id="roles" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">Open roles</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Join the next interval.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We hire for curiosity, care, and a steady commitment to quality. If you do not see the exact role,
              we still want to hear from you.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="/careers/apply">Send a general application</a>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {careerRoles.map((role) => (
            <Card
              key={role.title}
              className="group bg-card/80 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{role.team}</Badge>
                  <Badge variant="outline">{role.location}</Badge>
                  <Badge variant="outline">{role.type}</Badge>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{role.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{role.summary}</p>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-primary">
                  <Link
                    href={buildRoleLink(role.slug)}
                    className="inline-flex items-center gap-2"
                  >
                    Role details
                    <span aria-hidden="true">→</span>
                  </Link>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    View
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
