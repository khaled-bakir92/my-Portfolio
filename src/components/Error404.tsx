import React from 'react';
import { ArrowLeft } from 'lucide-react';

function Error404() {
  return (
    <div className="min-h-screen bg-[#213555] text-white flex items-center justify-center">
      <div className="section-container py-8 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Error Code */}
          <h1 className="text-8xl font-bold text-[#F5EFE7] mb-4">404</h1>
          
          {/* Error Message */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5EFE7]">
              Oops! Seite nicht gefunden
            </h2>
            <p className="text-[#D8C4B6] text-lg">
              Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
            </p>
          </div>

          {/* Back to Home Button */}
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D8C4B6] text-[#213555] rounded-lg
              hover:bg-[#7A6A57] hover:text-white transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error404;