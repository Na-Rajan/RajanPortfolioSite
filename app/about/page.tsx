import Link from "next/link"
import { ArrowRight, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1B2951] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dr. Rajan Nagarajan</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            AI Product Director with unique expertise spanning Finance, Security, and AI domains
          </p>
        </div>
      </section>

      {/* Leadership Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">Building Teams, Delivering Results</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              "Leadership is about making others better as a result of your presence and ensuring that impact lasts in
              your absence."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-[#F59E0B] text-4xl font-bold mb-4">45+</div>
                <h3 className="text-xl font-semibold mb-2">Team Scaling</h3>
                <p className="text-gray-600">
                  Successfully scaled product and engineering teams from 12 to 45+ members across multiple departments,
                  fostering a culture of innovation and excellence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-[#F59E0B] text-4xl font-bold mb-4">$100M+</div>
                <h3 className="text-xl font-semibold mb-2">Revenue Impact</h3>
                <p className="text-gray-600">
                  Directly contributed to over $100M in annual recurring revenue through strategic product development
                  and market positioning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-[#F59E0B] text-4xl font-bold mb-4">12+</div>
                <h3 className="text-xl font-semibold mb-2">Product Portfolio</h3>
                <p className="text-gray-600">
                  Successfully delivered 12+ products including 7 AI solutions that transformed business operations and
                  customer experiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-[#F59E0B] mr-2" />
                  <h3 className="text-xl font-semibold">Recognition</h3>
                </div>
                <p className="text-gray-600">
                  Received multiple industry awards for innovation in AI product development and leadership excellence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-8 w-8 text-[#F59E0B] mr-2" />
                  <h3 className="text-xl font-semibold">Cross-Domain Leadership</h3>
                </div>
                <p className="text-gray-600">
                  Unique ability to bridge technical, business, and regulatory requirements across finance, security,
                  and AI domains.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-[#F59E0B] text-4xl font-bold mb-4">5K+</div>
                <h3 className="text-xl font-semibold mb-2">LinkedIn Following</h3>
                <p className="text-gray-600">
                  Built a substantial professional network and thought leadership presence with over 5,000 industry
                  followers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">
              Where Finance Meets Security Meets AI
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A unique intersection of expertise that drives innovation in regulated industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#1B2951]">
              <h3 className="text-xl font-bold mb-4 text-[#1B2951]">Financial Services</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Asset management solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regulatory compliance frameworks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Wealth management platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Risk assessment models</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Company Association:</p>
                <p className="font-medium">Fidelity Investments</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#0D9488]">
              <h3 className="text-xl font-bold mb-4 text-[#0D9488]">Cybersecurity</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Network security architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Threat detection systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Enterprise security solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Security compliance frameworks</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Company Association:</p>
                <p className="font-medium">Tata Communications</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#F59E0B]">
              <h3 className="text-xl font-bold mb-4 text-[#F59E0B]">AI Innovation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>MLOps implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Generative AI applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Responsible AI deployment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI governance frameworks</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Company Association:</p>
                <p className="font-medium">Fidelity Investments & Tata Communications</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <img
              src="/placeholder.svg?height=300&width=600"
              alt="Domain Expertise Intersection"
              className="mx-auto max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">Experience Timeline</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A journey of leadership and innovation across regulated industries
            </p>
          </div>

          <div className="relative border-l-2 border-[#1B2951] ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8 space-y-12">
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-[#1B2951] bg-white"></div>
              <div>
                <h3 className="text-xl font-bold text-[#1B2951]">Director of AI Product</h3>
                <p className="text-[#F59E0B] font-medium">Fidelity Investments | Current</p>
                <div className="mt-2 text-gray-600">
                  <p className="mb-2">Leading AI product strategy and development for financial services.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Scaled AI product team from 12 to 45+ members</li>
                    <li>Delivered 7 AI solutions driving $100M+ in revenue</li>
                    <li>Established AI governance framework for regulatory compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-[#1B2951] bg-white"></div>
              <div>
                <h3 className="text-xl font-bold text-[#1B2951]">Product Leader</h3>
                <p className="text-[#0D9488] font-medium">Tata Communications | 2018-2021</p>
                <div className="mt-2 text-gray-600">
                  <p className="mb-2">Led network security product development and strategy.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Managed portfolio of 5+ security products</li>
                    <li>Implemented threat detection systems for enterprise clients</li>
                    <li>Developed security compliance frameworks for regulated industries</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-[#1B2951] bg-white"></div>
              <div>
                <h3 className="text-xl font-bold text-[#1B2951]">Education</h3>
                <p className="text-gray-600 font-medium">Academic Achievements</p>
                <div className="mt-2 text-gray-600">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>PhD in Computer Science</li>
                    <li>Currently pursuing AI Doctorate</li>
                    <li>5 relevant degrees in technology and business</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1B2951] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Let's discuss how my expertise can drive your organization's success in the AI-powered future.
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
