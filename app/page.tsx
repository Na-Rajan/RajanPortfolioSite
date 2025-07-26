import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Code,
  GraduationCap,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1B2951] to-[#2A3F7A] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Rajan Nagarajan</h1>
              <p className="text-xl md:text-2xl font-medium mb-4">
                AI Product Director | Scaling Teams to $100M+ Impact | Finance & Security Leader
              </p>
              <p className="text-lg opacity-90 mb-8">
                Transforming regulated industries through AI innovation while building world-class product teams
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-[#F59E0B] hover:bg-[#E59000] text-white">
                  Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Dr. Rajan Nagarajan"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="container mx-auto px-4 md:px-6 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { label: "Team Members Led", value: "45+" },
              { label: "ARR Growth", value: "$100M" },
              { label: "Products Shipped", value: "12+" },
              { label: "AI Solutions", value: "7" },
              { label: "LinkedIn Following", value: "5K" },
              { label: "Published Author", value: "Yes" },
            ].map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#F59E0B]">{metric.value}</div>
                <div className="text-sm opacity-80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Other Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1B2951]">Explore My Profile</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "About Me",
                description: "Leadership impact and strategic expertise across Finance, Security, and AI domains.",
                icon: <Briefcase className="h-8 w-8 text-[#0D9488]" />,
                link: "/about",
              },
              {
                title: "Portfolio",
                description: "PRDs, GitHub repositories, websites, patents, and publications.",
                icon: <Code className="h-8 w-8 text-[#0D9488]" />,
                link: "/portfolio",
              },
              {
                title: "Publications",
                description: "Books authored and Medium articles on industry topics.",
                icon: <BookOpen className="h-8 w-8 text-[#0D9488]" />,
                link: "/publications",
              },
              {
                title: "Credentials",
                description: "Academic achievements, certifications, and education background.",
                icon: <GraduationCap className="h-8 w-8 text-[#0D9488]" />,
                link: "/credentials",
              },
              {
                title: "Thought Leadership",
                description: "Influencing the industry conversation through expertise and insights.",
                icon: <Lightbulb className="h-8 w-8 text-[#0D9488]" />,
                link: "/thought-leadership",
              },
              {
                title: "Contact",
                description: "Get in touch for consulting, speaking opportunities, or collaboration.",
                icon: <Mail className="h-8 w-8 text-[#0D9488]" />,
                link: "/contact",
              },
            ].map((item, index) => (
              <Link href={item.link} key={index}>
                <Card className="h-full transition-all hover:shadow-lg hover:border-[#F59E0B] cursor-pointer">
                  <CardHeader>
                    <div className="mb-2">{item.icon}</div>
                    <CardTitle className="text-xl text-[#1B2951]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Impact Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">Building Teams, Delivering Results</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              "Leadership is about making others better as a result of your presence and ensuring that impact lasts in
              your absence."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-[#F59E0B] text-4xl font-bold">45+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">Team Members Led</p>
                <p className="text-gray-600 mt-2">Scaled team from 12 to 45+ members across multiple departments</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-[#F59E0B] text-4xl font-bold">$100M+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">Revenue Impact</p>
                <p className="text-gray-600 mt-2">Directly contributed to over $100M in annual recurring revenue</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-[#F59E0B] text-4xl font-bold">12+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">Products Shipped</p>
                <p className="text-gray-600 mt-2">Successfully delivered 12+ products including 7 AI solutions</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-[#1B2951] hover:bg-[#2A3F7A]">
              <Link href="/about">
                Learn More About My Leadership <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-[#1B2951] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
              <p className="text-lg mb-8 opacity-90">
                Interested in AI leadership, product strategy, or transforming your organization? Let's discuss how my
                expertise can drive your success.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-[#F59E0B]" />
                  <span>nrajananalyst@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-[#F59E0B]" />
                  <span>+1 518-992-8606</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-[#F59E0B]" />
                  <span>Morrisville, North Carolina, USA</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-[#F59E0B]" />
                  <Link href="https://linkedin.com" className="hover:underline">
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <Button asChild size="lg" className="bg-[#F59E0B] hover:bg-[#E59000]">
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
