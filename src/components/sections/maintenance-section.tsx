export default function MaintenanceSection() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 md:px-10">
        <section className="grid w-full overflow-hidden rounded-3xl border border-border bg-card/60 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-b border-border p-8 sm:p-12 lg:border-b-0 lg:border-r">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Intervals
            </p>
            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Site under
              <br />
              maintenance.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We&apos;re applying a scheduled upgrade to improve speed and
              reliability. Service will return shortly.
            </p>

            <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/70" />
              <span>Maintenance in progress</span>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="rounded-2xl border border-border bg-background/80 p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>Status</span>
                <span>Live updates</span>
              </div>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-2/3 rounded-full bg-foreground/70" />
              </div>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Current phase</dt>
                  <dd className="font-medium">Platform update</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Estimated return</dt>
                  <dd className="font-medium">Shortly</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">Contact</dt>
                  <dd className="font-medium">hello@intervals.live</dd>
                </div>
              </dl>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Thank you for your patience — Intervals Team
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
