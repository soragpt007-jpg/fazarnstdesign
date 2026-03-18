import Link from "next/link"
import { Palette } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <Palette className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Fazar<span className="text-primary">Design</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#beranda"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="#layanan"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Layanan
            </Link>
            <Link
              href="#kontak"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontak
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Fazar Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
