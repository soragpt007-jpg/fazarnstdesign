import { Palette, PenTool, Layout, Image, FileText, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Palette,
    title: "Desain Logo",
    description: "Logo unik dan memorable yang merepresentasikan identitas brand Anda dengan sempurna.",
  },
  {
    icon: PenTool,
    title: "Branding",
    description: "Identitas visual lengkap termasuk logo, warna, tipografi, dan panduan brand.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Desain antarmuka website dan aplikasi yang intuitif dan menarik.",
  },
  {
    icon: Image,
    title: "Social Media",
    description: "Konten visual menarik untuk Instagram, Facebook, dan platform lainnya.",
  },
  {
    icon: FileText,
    title: "Print Design",
    description: "Brosur, kartu nama, poster, dan materi cetak profesional lainnya.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Desain website modern yang responsif dan sesuai dengan brand Anda.",
  },
]

export function ServicesSection() {
  return (
    <section id="layanan" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Layanan Kami
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Solusi Desain Lengkap untuk Bisnis Anda
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Berbagai layanan desain grafis profesional untuk membantu brand Anda tampil lebih menonjol di pasar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
