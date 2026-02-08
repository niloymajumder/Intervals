import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="container mx-auto px-6 md:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <p>Based in San Francisco, CA</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
