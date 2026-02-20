export default function MaintenanceSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-16 md:px-10">
        <section className="w-full rounded-3xl border border-border bg-card/70 p-8 text-center backdrop-blur-sm sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-background/80">
            <svg
              className="h-10 w-10 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Scheduled Update
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Site Under Maintenance
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We&apos;re performing a short scheduled update to improve performance and reliability.
            We&apos;ll be back online shortly.
          </p>

          <div className="mx-auto mt-10 grid max-w-xl gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Status</p>
              <p className="mt-2 font-semibold">Maintenance in progress</p>
            </div>
            <div className="rounded-2xl border border-border bg-background/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Expected</p>
              <p className="mt-2 font-semibold">Back shortly</p>
            </div>
          </div>

          <div className="mt-10 text-sm text-muted-foreground">
            <p>Thank you for your patience.</p>
            <p className="mt-1">— Intervals Team</p>
          </div>
        </section>
      </div>
    </div>
  );
}
