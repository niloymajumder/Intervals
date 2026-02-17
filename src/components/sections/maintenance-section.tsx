export default function MaintenanceSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <div className="max-w-2xl w-full text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <svg
            className="w-24 h-24 text-muted-foreground"
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

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Site Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          We&apos;re currently performing scheduled maintenance to improve your experience. 
          We&apos;ll be back shortly.
        </p>

        {/* Additional Info */}
        <div className="pt-8 text-sm text-muted-foreground">
          <p>Thank you for your patience.</p>
          <p className="mt-2">— The Intervals Team</p>
        </div>
      </div>
    </div>
  );
}
