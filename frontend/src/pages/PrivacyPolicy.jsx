import { NavLink } from "react-router-dom";

const Badge = ({ children }) => (
  <span className="inline-block bg-blue-50 text-primary text-xs font-medium px-3 py-1 rounded-full border border-blue-100">
    {children}
  </span>
);

const Section = ({ number, title, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
    <div className="flex items-start gap-4">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">
        {number}
      </span>
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
        <div className="text-gray-500 leading-7 space-y-3 text-sm">{children}</div>
      </div>
    </div>
  </div>
);

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary underline underline-offset-2 hover:opacity-75 transition-opacity"
  >
    {children}
  </a>
);

const PrivacyPolicy = () => {
  return (
    <div className="my-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <Badge>Legal</Badge>
        <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-3">Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Last updated: May 2025 &nbsp;·&nbsp; Applies to BDoctor platform</p>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-7">
          We respect your privacy. This page explains exactly what data we collect,
          why we need it, and how we protect it — in plain language.
        </p>
      </div>

      {/* Quick summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { title: "No selling", desc: "We never sell or rent your data to third parties." },
          { title: "Your control", desc: "You can request access, correction, or deletion anytime." },
          { title: "Uzbek law", desc: "Compliant with ZRU-547 Personal Data Law." },
        ].map((c) => (
          <div key={c.title} className="bg-blue-50 rounded-2xl p-5 border border-blue-100 text-center">
            <p className="font-semibold text-gray-800 text-sm mb-1">{c.title}</p>
            <p className="text-gray-500 text-xs leading-5">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        <Section number="1" title="Introduction">
          <p>
            BDoctor ("we", "our", "us") operates a doctor appointment booking platform. This Privacy
            Policy explains how we collect, use, store, and protect your personal data in compliance
            with the{" "}
            <ExternalLink href="https://lex.uz/docs/4831939">
              Law of the Republic of Uzbekistan "On Personal Data" No. ZRU-547 (July 2, 2019)
            </ExternalLink>{" "}
            and the{" "}
            <ExternalLink href="https://lex.uz/docs/111504">
              Law "On Protection of Citizens' Health" No. 265-I
            </ExternalLink>
            .
          </p>
          <p>By creating an account, you consent to the practices described in this policy.</p>
        </Section>

        <Section number="2" title="Data We Collect">
          <p>We collect the following when you register or book an appointment:</p>
          <ul className="space-y-1.5">
            {[
              "Full name, email address, phone number",
              "Date of birth, gender, home address",
              "Profile photo (uploaded by you)",
              "Appointment details: chosen doctor, date, time, speciality",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-1">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="bg-green-50 border border-green-100 rounded-xl px-4 py-2 text-green-700 text-xs">
            We do <strong>not</strong> collect payment cards, government IDs, or biometric data.
          </p>
        </Section>

        <Section number="3" title="How We Use Your Data">
          <p>Your data is used only for:</p>
          <ul className="space-y-1.5">
            {[
              "Creating and managing your account",
              "Booking, confirming, and cancelling appointments",
              "Displaying available doctors and schedules",
              "Sending service-related notifications",
              "Improving platform reliability and security",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-1">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section number="4" title="Health Data (Special Category)">
          <p>
            Appointment and doctor speciality information may constitute health-related data.
            Under Article 27 of{" "}
            <ExternalLink href="https://lex.uz/docs/4831939">ZRU-547</ExternalLink>, such
            "special personal data" requires heightened protection. It is processed only to
            fulfil your booking and is never disclosed without your explicit consent.
          </p>
        </Section>

        <Section number="5" title="Data Storage & Third-Party Services">
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="font-medium text-gray-700 text-sm mb-1">MongoDB Atlas</p>
              <p className="text-xs text-gray-500 leading-5">
                Cloud database hosting. Personal data is stored on cloud infrastructure with
                contractual security measures as permitted under Article 22 of ZRU-547.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="font-medium text-gray-700 text-sm mb-1">Cloudinary</p>
              <p className="text-xs text-gray-500 leading-5">
                Profile photo storage. Only photos you explicitly upload are sent to Cloudinary.
                No other personal data is shared.
              </p>
            </div>
          </div>
        </Section>

        <Section number="6" title="Your Rights">
          <p>
            Under{" "}
            <ExternalLink href="https://lex.uz/docs/4831939">ZRU-547</ExternalLink> you have
            the right to:
          </p>
          <ul className="space-y-1.5">
            {[
              "Access your personal data held by us",
              "Request correction of inaccurate or incomplete data",
              "Request deletion of your account and associated data",
              "Withdraw consent at any time",
              "Object to processing not necessary for stated purposes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-1">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            To exercise any right, email{" "}
            <ExternalLink href="mailto:akmalov1c09@gmail.com">akmalov1c09@gmail.com</ExternalLink>
            . We respond within 15 business days.
          </p>
        </Section>

        <Section number="7" title="Data Retention">
          <p>
            We retain your data for as long as your account is active. On account deletion,
            personal data is removed within 30 days, unless retention is required by Uzbek law.
          </p>
        </Section>

        <Section number="8" title="Security">
          <p>
            We protect your data using JWT-based authentication, HTTPS encryption in transit,
            and access-controlled database credentials. Profile photos are stored under
            access-restricted Cloudinary accounts.
          </p>
        </Section>

        <Section number="9" title="Cookies">
          <p>
            BDoctor does not use tracking cookies or third-party analytics. We store a session
            token in your browser's local storage solely to keep you logged in.
          </p>
        </Section>

        <Section number="10" title="Regulatory Authority">
          <p>
            Personal data processing is overseen by the{" "}
            <ExternalLink href="https://pd.gov.uz">
              Personalization Agency under the Ministry of Justice of the Republic of Uzbekistan
            </ExternalLink>
            . If you believe your rights have been violated, you may file a complaint there.
          </p>
        </Section>

        <Section number="11" title="Changes to This Policy">
          <p>
            We may update this policy as the platform or Uzbek law evolves. The "Last updated"
            date at the top reflects the most recent revision. Continued use after changes
            constitutes acceptance.
          </p>
        </Section>

        {/* Contact card */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 text-center">
          <p className="font-semibold text-gray-800 mb-1">Questions about your privacy?</p>
          <p className="text-gray-500 text-sm mb-4">We're happy to help — reach out anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
            <a
              href="mailto:akmalov1c09@gmail.com"
              className="bg-primary text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              akmalov1c09@gmail.com
            </a>
            <a
              href="tel:+998912019909"
              className="border border-primary text-primary px-5 py-2 rounded-full hover:bg-primary/5 transition-colors"
            >
              +998 91 201 99 09
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-300 mt-10">
        © 2025 BDoctor · Tashkent, Uzbekistan
      </p>
    </div>
  );
};

export default PrivacyPolicy;
