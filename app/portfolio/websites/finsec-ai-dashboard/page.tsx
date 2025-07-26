import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Globe, Monitor, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FinSecDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1B2951] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">FinSec AI Dashboard</h1>
              <p className="text-xl mb-6 opacity-90">
                A comprehensive dashboard for financial security analytics with AI-powered insights
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                  <span>2022-2023</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Users className="h-4 w-4 mr-2 text-green-400" />
                  <span>Enterprise Client</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Monitor className="h-4 w-4 mr-2 text-yellow-400" />
                  <span>Web Application</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#F59E0B] hover:bg-[#E59000]">
                  <Link href="#">
                    <Globe className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link href="#">
                    <ExternalLink className="mr-2 h-4 w-4" /> Case Study
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="FinSec AI Dashboard Interface"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-[#1B2951] mb-6">Project Overview</h2>

                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      The FinSec AI Dashboard is a sophisticated web application designed for financial institutions to
                      monitor, analyze, and respond to security threats in real-time. Built with cutting-edge AI
                      technologies, it provides comprehensive insights into financial security operations.
                    </p>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Challenge</h3>
                    <p className="text-gray-600 mb-4">
                      Financial institutions face increasingly sophisticated cyber threats that require real-time
                      monitoring and analysis. Traditional security tools often generate too many false positives and
                      lack the contextual intelligence needed for effective threat response.
                    </p>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Solution</h3>
                    <p className="text-gray-600 mb-4">
                      The FinSec AI Dashboard addresses these challenges by providing:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                      <li>Real-time threat detection and analysis using machine learning</li>
                      <li>Intelligent alert prioritization to reduce false positives</li>
                      <li>Comprehensive risk assessment and scoring</li>
                      <li>Interactive visualizations for complex security data</li>
                      <li>Automated incident response workflows</li>
                      <li>Regulatory compliance reporting and audit trails</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Impact</h3>
                    <p className="text-gray-600">
                      The dashboard has been deployed across multiple financial institutions, resulting in a 60%
                      reduction in false positive alerts, 40% faster incident response times, and improved regulatory
                      compliance scores.
                    </p>
                  </div>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Project Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">14 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Team Size:</span>
                        <span className="font-medium">12 members</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">My Role:</span>
                        <span className="font-medium">Lead Product Manager</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Users:</span>
                        <span className="font-medium">500+ analysts</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Deployment:</span>
                        <span className="font-medium">Multi-tenant SaaS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium text-green-600">Production</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Technologies Used</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "D3.js", "Python", "TensorFlow", "PostgreSQL", "Redis", "Docker"].map(
                          (tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-100 rounded text-sm font-medium">
                              {tech}
                            </span>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Key Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Data Points/Day:</span>
                          <span className="text-sm font-medium">10M+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Response Time:</span>
                          <span className="text-sm font-medium">{"<"}200ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Uptime:</span>
                          <span className="text-sm font-medium">99.95%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-[#1B2951]">Key Features</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Real-time Threat Monitoring",
                      description:
                        "Continuous monitoring of network traffic, user behavior, and system activities with AI-powered anomaly detection.",
                      icon: "🛡️",
                      details: [
                        "Machine learning-based anomaly detection",
                        "Real-time data processing pipeline",
                        "Multi-source data correlation",
                        "Behavioral analysis algorithms",
                      ],
                    },
                    {
                      title: "Interactive Risk Dashboard",
                      description:
                        "Comprehensive visualization of security metrics, risk scores, and threat landscapes with drill-down capabilities.",
                      icon: "📊",
                      details: [
                        "Customizable dashboard layouts",
                        "Interactive charts and graphs",
                        "Risk heat maps and trend analysis",
                        "Executive summary views",
                      ],
                    },
                    {
                      title: "Intelligent Alert System",
                      description:
                        "Smart alert prioritization and routing based on severity, context, and organizational policies.",
                      icon: "🚨",
                      details: [
                        "ML-powered alert scoring",
                        "False positive reduction",
                        "Automated escalation workflows",
                        "Multi-channel notifications",
                      ],
                    },
                    {
                      title: "Incident Response Automation",
                      description:
                        "Automated workflows for incident response, investigation, and remediation with human oversight.",
                      icon: "⚡",
                      details: [
                        "Playbook automation",
                        "Evidence collection",
                        "Stakeholder notifications",
                        "Remediation tracking",
                      ],
                    },
                    {
                      title: "Compliance Reporting",
                      description:
                        "Automated generation of regulatory compliance reports with audit trails and documentation.",
                      icon: "📋",
                      details: [
                        "SOX compliance reporting",
                        "PCI DSS documentation",
                        "Audit trail generation",
                        "Custom report builder",
                      ],
                    },
                    {
                      title: "Advanced Analytics",
                      description:
                        "Deep dive analytics with predictive modeling, trend analysis, and security intelligence.",
                      icon: "🔍",
                      details: [
                        "Predictive threat modeling",
                        "Historical trend analysis",
                        "Threat intelligence integration",
                        "Custom analytics queries",
                      ],
                    },
                  ].map((feature, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center text-[#1B2951]">
                          <span className="text-2xl mr-3">{feature.icon}</span>
                          {feature.title}
                        </CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {feature.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#0D9488] rounded-full mr-2 mt-2"></div>
                              <span className="text-sm text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="technical">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-[#1B2951]">Technical Architecture</h2>

                <div className="text-center mb-8">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt="Technical Architecture Diagram"
                    className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Frontend Architecture</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-sm">Framework</p>
                          <p className="text-sm text-gray-600">React 18 with TypeScript</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">State Management</p>
                          <p className="text-sm text-gray-600">Redux Toolkit with RTK Query</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Visualization</p>
                          <p className="text-sm text-gray-600">D3.js, Chart.js, Custom components</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">UI Components</p>
                          <p className="text-sm text-gray-600">Material-UI with custom theme</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Real-time Updates</p>
                          <p className="text-sm text-gray-600">WebSocket connections, Server-Sent Events</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Backend Architecture</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-sm">API Layer</p>
                          <p className="text-sm text-gray-600">Node.js with Express, GraphQL</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Microservices</p>
                          <p className="text-sm text-gray-600">Docker containers, Kubernetes orchestration</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Data Processing</p>
                          <p className="text-sm text-gray-600">Apache Kafka, Redis Streams</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">ML Pipeline</p>
                          <p className="text-sm text-gray-600">Python, TensorFlow, MLflow</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Authentication</p>
                          <p className="text-sm text-gray-600">OAuth 2.0, JWT tokens, RBAC</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Data Architecture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Operational Database</h4>
                        <p className="text-sm text-gray-600">PostgreSQL for transactional data</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Time Series Database</h4>
                        <p className="text-sm text-gray-600">InfluxDB for metrics and events</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Cache Layer</h4>
                        <p className="text-sm text-gray-600">Redis for session and query caching</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Security & Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-[#1B2951] mb-2">Security Measures</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• End-to-end encryption (TLS 1.3)</li>
                          <li>• Data encryption at rest (AES-256)</li>
                          <li>• Multi-factor authentication</li>
                          <li>• Regular security audits</li>
                          <li>• Penetration testing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1B2951] mb-2">Compliance Standards</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• SOC 2 Type II certified</li>
                          <li>• PCI DSS compliant</li>
                          <li>• GDPR data protection</li>
                          <li>• ISO 27001 aligned</li>
                          <li>• NIST Cybersecurity Framework</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="results">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-[#1B2951]">Project Results & Impact</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-[#0D9488] mb-2">60%</div>
                      <div className="text-sm text-gray-600">Reduction in False Positives</div>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-[#F59E0B] mb-2">40%</div>
                      <div className="text-sm text-gray-600">Faster Incident Response</div>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-[#1B2951] mb-2">500+</div>
                      <div className="text-sm text-gray-600">Active Users</div>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-[#0D9488] mb-2">99.95%</div>
                      <div className="text-sm text-gray-600">System Uptime</div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">User Feedback & Testimonials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <blockquote className="border-l-4 border-[#0D9488] pl-4 italic text-gray-600">
                        "The FinSec AI Dashboard has transformed our security operations. We can now identify and
                        respond to threats in minutes rather than hours, and the false positive rate has dropped
                        dramatically."
                        <footer className="mt-2 text-sm font-medium text-[#1B2951]">
                          — Sarah Johnson, CISO at Regional Bank
                        </footer>
                      </blockquote>

                      <blockquote className="border-l-4 border-[#F59E0B] pl-4 italic text-gray-600">
                        "The intuitive interface and powerful analytics have made our security team more efficient. The
                        automated reporting features alone have saved us dozens of hours each month."
                        <footer className="mt-2 text-sm font-medium text-[#1B2951]">
                          — Michael Chen, Security Analyst at Credit Union
                        </footer>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Awards & Recognition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl mr-3">🏆</div>
                        <div>
                          <p className="font-semibold text-[#1B2951]">Best Security Innovation</p>
                          <p className="text-sm text-gray-600">FinTech Security Awards 2023</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl mr-3">⭐</div>
                        <div>
                          <p className="font-semibold text-[#1B2951]">Top Rated Dashboard</p>
                          <p className="text-sm text-gray-600">Security Software Review 2023</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Lessons Learned</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>
                          <strong>User-Centric Design:</strong> Early and continuous user feedback was crucial for
                          creating an intuitive interface that security analysts actually wanted to use.
                        </li>
                        <li>
                          <strong>Performance Optimization:</strong> Real-time data processing at scale required careful
                          architecture decisions and continuous performance monitoring.
                        </li>
                        <li>
                          <strong>AI Model Accuracy:</strong> Balancing sensitivity and specificity in threat detection
                          models required extensive tuning and domain expertise.
                        </li>
                        <li>
                          <strong>Compliance Integration:</strong> Building compliance features from the ground up was
                          more effective than retrofitting them later.
                        </li>
                        <li>
                          <strong>Scalability Planning:</strong> Designing for multi-tenant architecture from the
                          beginning enabled rapid customer onboarding.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#1B2951] mb-8 text-center">Related Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2951]">Security Operations Center</CardTitle>
                <CardDescription>Real-time monitoring and threat detection interface</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A complementary interface designed specifically for security operations teams with advanced threat
                  detection capabilities.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/portfolio/websites/security-operations-center">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2951]">Regulatory Compliance Tool</CardTitle>
                <CardDescription>Web application for tracking compliance requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A specialized tool for managing and tracking regulatory compliance requirements across multiple
                  frameworks.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/portfolio/websites/regulatory-compliance-tool">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
