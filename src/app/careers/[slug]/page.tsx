import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { careerRoles, getCareerRoleBySlug } from '@/lib/careers';

const careerLinks = [
  { href: '/', label: 'Home' },
  { href: '/careers', label: 'Careers' },
  { href: '/careers#roles', label: 'Roles' },
  { href: '/careers#process', label: 'Process' },
  { href: '/careers#apply', label: 'Apply' },
];

function buildApplyLink(roleTitle: string) {
  const roleParam = encodeURIComponent(roleTitle);
  return `/careers/apply?role=${roleParam}`;
}

export default function CareerRolePage({ params }: { params: { slug: string } }) {
  const role = getCareerRoleBySlug(params.slug);

  if (!role) {
    notFound();
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header links={careerLinks} />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Link href="/careers" className="text-sm font-semibold text-primary">
                Back to roles
              </Link>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight font-headline">
                {role.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{role.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary">{role.team}</Badge>
                <Badge variant="outline">{role.location}</Badge>
                <Badge variant="outline">{role.type}</Badge>
              </div>

              <div className="mt-10 grid gap-8">
                <div>
                  <h2 className="text-xl font-semibold">What you will do</h2>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">What we are looking for</h2>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {role.qualifications.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Card className="border bg-card/70">
              <CardContent className="p-8">
                <p className="text-sm font-semibold text-primary">Apply</p>
                <h2 className="mt-3 text-2xl font-semibold">Ready to join?</h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  Share your portfolio and a short note on why this role feels right. We reply to every
                  application.
                </p>
                <Button className="mt-6 w-full" size="lg" asChild>
                  <Link href={buildApplyLink(role.title)}>Apply now</Link>
                </Button>
                <div className="mt-6 text-xs text-muted-foreground">
                  Prefer email? Write us at{' '}
                  <a className="text-primary hover:text-primary/80" href="mailto:careers@intervals.live">
                    careers@intervals.live
                  </a>.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return careerRoles.map((role) => ({ slug: role.slug }));
}
