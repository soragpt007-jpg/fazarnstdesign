"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Layers, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-8 w-px h-32 bg-border" />
        <div className="absolute bottom-1/4 right-8 w-px h-32 bg-border" />
        <svg
          className="absolute left-12 top-1/3 opacity-20"
          width="80"
          height="160"
          viewBox="0 0 80 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M10 0 L70 40 L10 80 L70 120 L10 160" className="text-primary" />
          <path d="M25 0 L70 30 L25 60 L70 90 L25 120 L70 150" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Studio Desain Kreatif</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-balance">
              Wujudkan Visi
              <br />
              <span className="text-primary">Visual Brand</span>
              <br />
              Anda
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Kami membantu bisnis Anda tampil beda dengan desain grafis profesional yang memukau dan berkesan. Dari logo hingga identitas brand lengkap.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                <a
                  href="https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20dengan%20jasa%20desain%20grafis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi Gratis
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                <a href="#portfolio">Lihat Portfolio</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground">Proyek Selesai</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Klien Puas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Main visual card */}
              <div className="absolute inset-0 bg-card rounded-3xl border border-border overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-30">
                  <div className="grid grid-cols-4 h-full">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="border border-border/30" />
                    ))}
                  </div>
                </div>

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                      <Layers className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-xl font-semibold">Desain Berkualitas</p>
                    <p className="text-sm text-muted-foreground mt-1">Untuk Setiap Kebutuhan</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 border border-border shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Proses Cepat</p>
                    <p className="text-xs text-muted-foreground">3-7 Hari Kerja</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 border border-border shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Revisi Unlimited</p>
                    <p className="text-xs text-muted-foreground">Sampai Puas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
