import React from 'react';
import { Shield, Lock, Eye, FileText, Server, ArrowLeft } from 'lucide-react';

function PrivacyPolicy() {
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
          Datenschutzerklärung
        </h1>
        <p className="text-[#D8C4B6] text-lg">
          Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
        </p>
      </div>

      {/* Content */}
      <div className="section-container py-12">
        <div className="max-w-4xl space-y-16">
          {/* Introduction */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Einleitung</h2>
            <p className="text-[#D8C4B6] leading-relaxed">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung informieren wir Sie über die Erhebung, Verarbeitung und Nutzung Ihrer Daten bei der Nutzung unserer Website.
            </p>
          </section>

          {/* Data Collection */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Datenerhebung</h2>
            <div className="space-y-4 text-[#D8C4B6]">
              <p className="leading-relaxed">
                Bei der Nutzung unserer Website werden folgende Daten erhoben:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Browsertyp und Browserversion</li>
                <li>Betriebssystem</li>
                <li>Referrer URL (die zuvor besuchte Seite)</li>
              </ul>
            </div>
          </section>

          {/* Contact Form */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Kontaktformular</h2>
            <p className="text-[#D8C4B6] leading-relaxed">
              Wenn Sie das Kontaktformular nutzen, werden folgende Daten gespeichert:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#D8C4B6]">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Nachrichteninhalt</li>
              <li>Zeitpunkt der Übermittlung</li>
            </ul>
          </section>

          {/* Data Storage */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Server className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Datenspeicherung</h2>
            <p className="text-[#D8C4B6] leading-relaxed">
              Ihre Daten werden auf sicheren Servern in Deutschland gespeichert und nach den geltenden Datenschutzgesetzen behandelt. Wir verwenden modernste Sicherheitstechnologien, um Ihre Daten vor unbefugtem Zugriff zu schützen.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Ihre Rechte</h2>
            <div className="space-y-4 text-[#D8C4B6]">
              <p className="leading-relaxed">
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Recht auf Auskunft</li>
                <li>Recht auf Berichtigung</li>
                <li>Recht auf Löschung</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Widerspruchsrecht</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;