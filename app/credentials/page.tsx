import Link from "next/link"
import { ArrowRight, Award, CheckCircle, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CredentialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1B2951] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Credentials</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Academic achievements, certifications, and professional qualifications
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">Education</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Five relevant degrees spanning technology, business, and leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                degree: "PhD in Computer Science",
                institution: "Stanford University",
                year: "2018",
                focus: "AI and Machine Learning",
                logo: "stanford",
              },
              {
                degree: "AI Doctorate (In Progress)",
                institution: "MIT",
                year: "Expected 2025",
                focus: "Responsible AI in Financial Services",
                logo: "mit",
              },
              {
                degree: "MBA",
                institution: "Harvard Business School",
                year: "2015",
                focus: "Technology Management",
                logo: "harvard",
              },
              {
                degree: "MS in Cybersecurity",
                institution: "Carnegie Mellon University",
                year: "2013",
                focus: "Network Security",
                logo: "cmu",
              },
              {
                degree: "BS in Computer Engineering",
                institution: "University of California, Berkeley",
                year: "2011",
                focus: "Computer Architecture",
                logo: "berkeley",
              },
            ].map((education, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={`/placeholder.svg?height=64&width=64&query=${education.logo}%20university%20logo`}
                      alt={`${education.institution} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-[#1B2951]">{education.degree}</CardTitle>
                    <CardDescription>{education.institution}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 text-[#F59E0B] mr-2" />
                      <span className="text-gray-600">Graduated: {education.year}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#0D9488] mr-2" />
                      <span className="text-gray-600">Focus: {education.focus}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">Professional Certifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-recognized certifications and qualifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "AWS Certified Machine Learning – Specialty",
                issuer: "Amazon Web Services",
                year: "2023",
                icon: "aws",
              },
              {
                name: "Certified Information Systems Security Professional (CISSP)",
                issuer: "ISC²",
                year: "2022",
                icon: "isc2",
              },
              {
                name: "Google Cloud Professional Machine Learning Engineer",
                issuer: "Google Cloud",
                year: "2022",
                icon: "google",
              },
              {
                name: "Microsoft Certified: Azure AI Engineer Associate",
                issuer: "Microsoft",
                year: "2021",
                icon: "microsoft",
              },
              {
                name: "Certified Financial Technologist (CFT)",
                issuer: "Financial Technology Association",
                year: "2021",
                icon: "finance",
              },
              {
                name: "Certified Ethical Hacker (CEH)",
                issuer: "EC-Council",
                year: "2020",
                icon: "eccouncil",
              },
            ].map((cert, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={`/placeholder.svg?height=48&width=48&query=${cert.icon}%20certification%20logo`}
                      alt={`${cert.issuer} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-[#1B2951] text-base">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-[#F59E0B] mr-2" />
                    <span className="text-gray-600">Issued: {cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">Awards & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry recognition for leadership and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Top 50 AI Leaders in Finance",
                issuer: "Financial Technology Magazine",
                year: "2023",
                description: "Recognized for pioneering AI applications in financial services.",
              },
              {
                name: "Innovation Excellence Award",
                issuer: "Fidelity Investments",
                year: "2022",
                description:
                  "For developing an AI-powered financial advisor platform that increased client engagement by 45%.",
              },
              {
                name: "Security Product of the Year",
                issuer: "Cybersecurity Excellence Awards",
                year: "2021",
                description: "For leading the development of an AI-based threat detection system.",
              },
              {
                name: "Leadership in Technology",
                issuer: "North Carolina Tech Association",
                year: "2021",
                description: "Recognized for contributions to the local technology ecosystem and mentorship.",
              },
            ].map((award, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-[#1B2951]">{award.name}</CardTitle>
                  <CardDescription>
                    {award.issuer} | {award.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1B2951] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Let's discuss how my expertise and credentials can benefit your organization.
          </p>
          <Button asChild size="lg" className="bg-[#F59E0B] hover:bg-[#E59000]">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
