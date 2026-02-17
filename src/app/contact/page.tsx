import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 border-b border-border">
          <div className="px-6 md:px-10">
            <h1 className="text-display max-w-3xl">Get in touch.</h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              For partnerships, venture ideas, or talent inquiries, share a note and we will respond.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 md:py-32">
          <div className="px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">EMAIL</p>
                  <a className="text-xl hover:opacity-70 transition-opacity" href="mailto:hello@intervals.studio">
                    hello@intervals.studio
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">LOCATION</p>
                  <p className="text-xl">San Francisco, CA</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">PARTNERSHIPS</p>
                  <p className="text-muted-foreground">Interested in collaborating or investing? Reach out.</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">CAREERS</p>
                  <p className="text-muted-foreground">We are always looking for exceptional people.</p>
                </div>
              </div>

              {/* Form */}
              <form className="border border-border p-8 space-y-6">
                <div>
                  <label className="text-sm text-muted-foreground" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 focus:border-foreground focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 focus:border-foreground focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="mt-2 w-full bg-transparent border-b border-border px-0 py-3 focus:border-foreground focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your idea"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-foreground bg-foreground px-6 py-4 text-sm font-medium tracking-wide text-background hover:bg-transparent hover:text-foreground transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
