'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { careerRoles } from '@/lib/careers';

const applyLinks = [
  { href: '/', label: 'Home' },
  { href: '/careers', label: 'Careers' },
  { href: '/careers/apply', label: 'Apply' },
];

const generalRole = 'General Application';

function buildMailBody(fields: Record<string, string>) {
  return [
    `Role: ${fields.role}`,
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Location: ${fields.location}`,
    `Portfolio: ${fields.portfolio}`,
    `Availability: ${fields.availability}`,
    '',
    'Cover letter:',
    fields.coverLetter,
  ].join('\n');
}

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get('role') ?? '';

  const roleOptions = useMemo(
    () => [generalRole, ...careerRoles.map((role) => role.title)],
    []
  );

  const [selectedRole, setSelectedRole] = useState(generalRole);

  useEffect(() => {
    if (!roleParam) {
      setSelectedRole(generalRole);
      return;
    }

    const normalizedRole = roleOptions.find((role) => role === roleParam);
    setSelectedRole(normalizedRole ?? generalRole);
  }, [roleParam, roleOptions]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = {
      role: (formData.get('role') as string) || generalRole,
      name: (formData.get('name') as string) || '',
      email: (formData.get('email') as string) || '',
      location: (formData.get('location') as string) || '',
      portfolio: (formData.get('portfolio') as string) || '',
      availability: (formData.get('availability') as string) || '',
      coverLetter: (formData.get('coverLetter') as string) || '',
    };

    const subject = `Application for ${fields.role}`;
    const body = buildMailBody(fields);
    const mailto = `mailto:careers@intervals.live?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header links={applyLinks} />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold text-primary">Apply</p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight font-headline">
                Start your application.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Tell us about your work, your focus, and the kind of interval you want to build. We reply to
                every application.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <input type="hidden" name="role" value={selectedRole} />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Full name</label>
                    <Input name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input name="email" type="email" placeholder="you@domain.com" required />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Role</label>
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roleOptions.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <Input name="location" placeholder="City, Country" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Availability</label>
                    <Input name="availability" placeholder="Immediate, 2 weeks, etc." />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Portfolio or LinkedIn</label>
                  <Input name="portfolio" type="url" placeholder="https://" />
                </div>

                <div>
                  <label className="text-sm font-medium">Short cover letter</label>
                  <Textarea
                    name="coverLetter"
                    rows={6}
                    placeholder="Tell us about a project you are proud of, and why you want to join."
                  />
                </div>

                <Button type="submit" size="lg">
                  Submit application
                </Button>
              </form>
            </div>

            <div className="rounded-2xl border bg-card/60 p-8">
              <h2 className="text-xl font-semibold">What happens next</h2>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <p>We review every note within five business days.</p>
                <p>If it is a match, we schedule a 30-minute call with the team.</p>
                <p>We always share clear timelines and give feedback.</p>
              </div>
              <div className="mt-8 rounded-lg border border-dashed border-border/70 p-4 text-sm text-muted-foreground">
                Prefer email? Write us directly at{' '}
                <a className="text-primary hover:text-primary/80" href="mailto:careers@intervals.live">
                  careers@intervals.live
                </a>.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
