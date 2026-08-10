import { FaInstagram, FaTiktok } from "react-icons/fa6";

/**
 * PLACEHOLDER: ganti URL di bawah dengan akun resmi KKN Kelompok 117.
 */
export const socials = [
  {
    label: "Instagram",
    handle: "@kkn117kaligawe",
    href: "https://instagram.com/",
    Icon: FaInstagram,
  },
  {
    label: "TikTok",
    handle: "@kkn117kaligawe",
    href: "https://tiktok.com/",
    Icon: FaTiktok,
  },
];

type Props = {
  variant?: "solid" | "outline" | "ghost";
  showHandle?: boolean;
  className?: string;
};

export default function SocialLinks({
  variant = "solid",
  showHandle = false,
  className = "",
}: Props) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5";
  const styles: Record<string, string> = {
    solid: "bg-secondary text-secondary-foreground hover:bg-ember hover:text-cream",
    outline: "border border-primary/40 bg-card text-primary hover:border-primary hover:bg-secondary/50",
    ghost: "border border-cream/25 text-cream hover:border-secondary hover:text-secondary",
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map(({ label, handle, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${base} ${styles[variant]}`}
        >
          <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          <span>{showHandle ? handle : label}</span>
        </a>
      ))}
    </div>
  );
}
