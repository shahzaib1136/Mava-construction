import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function PageHeader({ title }: { title: string }) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-white py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-right opacity-40"
        style={{
          backgroundImage: "url('/images/hero/hero-bg-texture.png')",
          maskImage: "linear-gradient(to left, black, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent 60%)",
        }}
      />
      <Container className="relative">
        <h1 className="text-[3.2rem] font-bold text-navy">{title}</h1>
        <p className="mt-2 text-[1.4rem] text-muted">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>{" "}
          / {title}
        </p>
      </Container>
    </div>
  );
}
