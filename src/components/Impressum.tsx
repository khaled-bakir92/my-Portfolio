import React from 'react';
import { ArrowLeft, Building2, Phone, Mail, MapPin, Scale, Info } from 'lucide-react';

function Impressum() {
  return (
    <div className="min-h-screen bg-[#213555] text-white">
      {/* Header */}
      <div className="section-container py-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#F5EFE7] hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Zurück zur Startseite
        </a>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5EFE7] mb-4">
          Impressum
        </h1>
      </div>

      {/* Content */}
      <div className="section-container py-12">
        <div className="max-w-4xl space-y-16">
          {/* Company Information */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2 text-[#D8C4B6]">
              <p>Khaled</p>
              <p>Webentwicklung & Design</p>
              <p>Finken str 51 </p>
              <p>33609 Bielefeld</p>
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Kontakt</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#D8C4B6]">
                <Phone className="w-5 h-5" />
                <p>Telefon: +49 (0) 17666338979</p>
              </div>
              <div className="flex items-center gap-3 text-[#D8C4B6]">
                <Mail className="w-5 h-5" />
                <p>E-Mail: khaled.bakir92@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 text-[#D8C4B6]">
                <MapPin className="w-5 h-5" />
                <p>Erreichbar: Mo-Fr 9:00 - 17:00 Uhr</p>
              </div>
            </div>
          </section>

          {/* Legal Representative */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Scale className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Rechtliche Angaben</h2>
            <div className="space-y-2 text-[#D8C4B6]">
              <p>Umsatzsteuer-ID: DE---------</p>
              <p>Handelsregister: HRB -----</p>
              <p>Registergericht: Amtsgericht Bielefeld</p>
            </div>
          </section>

          {/* Responsibility */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Info className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Inhaltlich Verantwortlicher</h2>
            <div className="space-y-2 text-[#D8C4B6]">
              <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
              <p>Khaled Bakir</p>
              <p>Finken str 51</p>
              <p>33609 Bielefeld</p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mt-12 pt-12 border-t border-[#415370]">
            <p className="text-sm text-[#D8C4B6] italic">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Impressum;