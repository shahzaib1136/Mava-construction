import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "solid" | "outline" | "outline-dark";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-[1.5rem] leading-6 font-normal transition-colors duration-300 text-center";

const variants: Record<ButtonVariant, string> = {
  solid: "bg-brand text-white hover:bg-brand-hover",
  outline:
    "border border-white text-white bg-transparent hover:bg-white hover:text-accent",
  "outline-dark":
    "border border-navy text-navy bg-transparent hover:bg-navy hover:text-white",
};

export function Button({
  href,
  variant = "solid",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
