import React from 'react';
import { Shield, Lock, Eye, FileText, Server, ArrowLeft, UserCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#213555] text-white">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl space-y-16">
          {/* Verantwortlicher */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Verantwortlicher im Sinne der DSGVO</h2>
            <div className="text-[#D8C4B6] leading-relaxed">
              <p>
                Khaled Bakir<br />
                Finken str 51<br />
                33609 Bielefeld<br />
                E-Mail: khaled.bakir92@gmail.com
              </p>
            </div>
          </section>

          {/* Introduction */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Einleitung</h2>
            <p className="text-[#D8C4B6] leading-relaxed">
              Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. Diese Datenschutzerklärung 
              informiert Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf meiner 
              Portfolio-Website. Die rechtlichen Grundlagen des Datenschutzes finden sich in der 
              Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).
            </p>
          </section>

          {/* Umfang der Datenerhebung */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Umfang der Datenerhebung</h2>
            <div className="space-y-4 text-[#D8C4B6]">
              <p className="leading-relaxed">
                Ich erhebe und verwende personenbezogene Daten grundsätzlich nur, soweit dies zur 
                Bereitstellung einer funktionsfähigen Website sowie meiner Inhalte und Leistungen 
                erforderlich ist. Bei jedem Zugriff eines Nutzers auf meine Website werden folgende Daten 
                temporär in den Server-Logfiles gespeichert:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP-Adresse (anonymisiert)</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              </ul>
              <p className="leading-relaxed">
                Die Speicherung dieser Daten erfolgt aus Sicherheitsgründen, um die Stabilität und 
                Betriebssicherheit meines Systems zu gewährleisten. Die Rechtsgrundlage für die 
                Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Logfiles 
                werden nach spätestens 7 Tagen automatisch gelöscht.
              </p>
            </div>
          </section>

          {/* Kontaktformular */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Kontaktformular</h2>
            <div className="space-y-4 text-[#D8C4B6]">
              <p className="leading-relaxed">
                Wenn Sie das Kontaktformular auf meiner Website nutzen, werden die von Ihnen eingegebenen 
                Daten an mich übermittelt und gespeichert. Diese Daten umfassen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Nachrichteninhalt</li>
                <li>Zeitpunkt der Übermittlung</li>
              </ul>
              <p className="leading-relaxed">
                Die Verarbeitung der Daten erfolgt ausschließlich zum Zweck der Kontaktaufnahme. Die 
                Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1 lit. a DSGVO 
                (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Die Daten werden 
                gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich 
                sind, in der Regel nach Abschluss der Konversation mit Ihnen.
              </p>
            </div>
          </section>

          {/* Keine Cookies und Tracking */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Server className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Keine Cookies und Tracking</h2>
            <p className="text-[#D8C4B6] leading-relaxed">
              Auf dieser Website werden keine Cookies gesetzt und es findet kein Tracking statt. Ich 
              verzichte bewusst auf Analyse-Tools wie Google Analytics, um Ihre Privatsphäre zu schützen.
            </p>
          </section>

          {/* Datensicherheit */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Datensicherheit</h2>
            <p className="text-[#D8C4B6] leading-relaxed">
              Ich treffe nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der 
              Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung 
              sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte 
              und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um 
              ein dem Risiko angemessenes Schutzniveau zu gewährleisten. Diese Website verwendet HTTPS, um 
              Ihre Daten während der Übertragung zu schützen.
            </p>
          </section>

          {/* Ihre Rechte */}
          <section className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#415370] text-[#F5EFE7] mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Ihre Rechte</h2>
            <div className="space-y-4 text-[#D8C4B6]">
              <p className="leading-relaxed">
                Sie haben gegenüber mir folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung oder Löschung (Art. 16, 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              </ul>
              <p className="leading-relaxed">
                Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung 
                Ihrer personenbezogenen Daten zu beschweren.
              </p>
            </div>
          </section>

          {/* Änderung der Datenschutzerklärung */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#F5EFE7]">Änderung der Datenschutzerklärung</h2>
            <p className="text-[#D8C4B6] leading-relaxed">
              Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
              rechtlichen Anforderungen entspricht oder um Änderungen meiner Leistungen in der 
              Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten 
              Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;