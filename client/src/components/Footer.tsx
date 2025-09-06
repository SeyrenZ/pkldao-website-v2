import React from "react";

// Data structures to eliminate redundancy
const resourceLinks = [
  { href: "#", label: "Whitepaper", testId: "link-whitepaper" },
  { href: "#roadmap", label: "Roadmap", testId: "link-roadmap" },
  { href: "#tokenomics", label: "Tokenomics", testId: "link-tokenomics" },
  { href: "#", label: "Smart Contract", testId: "link-smart-contract" },
];

const legalLinks = [
  { href: "#", label: "Risk Disclaimer", testId: "link-risk-disclaimer" },
  { href: "#", label: "Terms of Service", testId: "link-terms" },
  { href: "#", label: "Privacy Policy", testId: "link-privacy" },
  { href: "#", label: "Cookie Policy", testId: "link-cookies" },
];

const socialLinks = [
  { href: "#", icon: "fab fa-telegram", testId: "link-telegram" },
  { href: "#", icon: "fab fa-discord", testId: "link-discord" },
  { href: "#", icon: "fab fa-twitter", testId: "link-twitter" },
  { href: "#", icon: "fab fa-youtube", testId: "link-youtube" },
];

const appStoreButtons = [
  {
    icon: "fab fa-google-play",
    subtitle: "Get it on",
    title: "Google Play",
    testId: "button-google-play",
  },
  {
    icon: "fab fa-apple",
    subtitle: "Download on the",
    title: "App Store",
    testId: "button-app-store",
  },
];

// Type definitions
interface FooterLinkProps {
  href: string;
  label: string;
  testId: string;
  className?: string;
}

interface SocialIconProps {
  href: string;
  icon: string;
  testId: string;
}

interface AppStoreButtonProps {
  icon: string;
  subtitle: string;
  title: string;
  testId: string;
}

// Reusable components
const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  label,
  testId,
  className = "",
}) => (
  <a
    href={href}
    className={`block hover:text-pkl-green transition-colors ${className}`}
    data-testid={testId}
  >
    {label}
  </a>
);

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, testId }) => (
  <a
    href={href}
    className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center hover:bg-pkl-green transition-colors hover:text-white"
    data-testid={testId}
  >
    <i className={icon}></i>
  </a>
);

const AppStoreButton: React.FC<AppStoreButtonProps> = ({
  icon,
  subtitle,
  title,
  testId,
}) => (
  <button
    className="w-full bg-black text-white px-4 py-3 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors"
    data-testid={testId}
  >
    <i className={`${icon} text-lg`}></i>
    <div className="text-left">
      <div className="text-xs text-neutral-100">{subtitle}</div>
      <div className="font-semibold">{title}</div>
    </div>
  </button>
);

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="PKL.CLUB" className="w-10 h-10" />
              <span className="text-xl font-bold font-luckiest-guy tracking-widest text-pkl-green">
                PKL.CLUB
              </span>
            </div>
            <p className="text-neutral-600">
              The world's first decentralized Pickleball community. Join the
              revolution and earn $PKL tokens while playing the fastest growing
              sport.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <div className="space-y-2">
              {resourceLinks.map((link) => (
                <FooterLink
                  key={link.testId}
                  href={link.href}
                  label={link.label}
                  testId={link.testId}
                  className="text-neutral-600"
                />
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <FooterLink
                  key={link.testId}
                  href={link.href}
                  label={link.label}
                  testId={link.testId}
                  className="text-neutral-600"
                />
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Community</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.testId}
                  href={social.href}
                  icon={social.icon}
                  testId={social.testId}
                />
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="space-y-3">
              <h4 className="font-medium text-neutral-600">Download App</h4>
              <div className="space-y-2">
                {appStoreButtons.map((button) => (
                  <AppStoreButton
                    key={button.testId}
                    icon={button.icon}
                    subtitle={button.subtitle}
                    title={button.title}
                    testId={button.testId}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-800/90 text-sm">
              © 2024 PKL.CLUB. All rights reserved.
            </p>
            <p className="text-neutral-600 text-sm text-center">
              PKL.CLUB is not investment advice. Cryptocurrency may be
              unregulated in your jurisdiction.
              <a
                href="#"
                className="text-pkl-green hover:underline"
                data-testid="link-footer-risk"
              >
                Risk Disclaimer
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
