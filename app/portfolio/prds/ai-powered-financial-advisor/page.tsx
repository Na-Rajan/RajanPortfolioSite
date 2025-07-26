import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, FileText, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AIFinancialAdvisorPRDPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Powered Financial Advisor</h1>
              <p className="text-xl mb-6 opacity-90">
                Product Requirements Document for an AI system that provides personalized financial advice
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                  <span>2023</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Users className="h-4 w-4 mr-2 text-green-400" />
                  <span>Fidelity Investments</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Target className="h-4 w-4 mr-2 text-yellow-400" />
                  <span>Enterprise Product</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#F59E0B] hover:bg-[#E59000]">
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" /> Download PRD
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link href="#">View Prototype</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="AI Financial Advisor Interface"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRD Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-5 gap-2 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="success">Success Metrics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-[#1B2951] mb-6">Product Overview</h2>

                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Executive Summary</h3>
                    <p className="text-gray-600 mb-4">
                      The AI-Powered Financial Advisor is a comprehensive digital platform that leverages artificial
                      intelligence to provide personalized financial advice, investment recommendations, and portfolio
                      management services to Fidelity's retail and institutional clients.
                    </p>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Problem Statement</h3>
                    <p className="text-gray-600 mb-4">
                      Traditional financial advisory services are expensive, time-consuming, and often inaccessible to
                      average investors. Many clients need immediate guidance on financial decisions but cannot access
                      human advisors 24/7. Additionally, human advisors may have biases or limited capacity to analyze
                      vast amounts of market data in real-time.
                    </p>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Solution</h3>
                    <p className="text-gray-600 mb-4">An AI-powered platform that provides:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                      <li>24/7 personalized financial advice based on individual goals and risk tolerance</li>
                      <li>Real-time portfolio optimization and rebalancing recommendations</li>
                      <li>Automated investment strategies with human oversight</li>
                      <li>Educational content tailored to user's financial literacy level</li>
                      <li>Integration with existing Fidelity accounts and services</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Target Users</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Primary: Retail Investors</h4>
                        <p className="text-sm text-gray-600">Ages 25-55, $50K-$500K investable assets</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Secondary: Small Business Owners</h4>
                        <p className="text-sm text-gray-600">Need retirement planning and business financial advice</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Project Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Company:</span>
                        <span className="font-medium">Fidelity Investments</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Year:</span>
                        <span className="font-medium">2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">18 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Team Size:</span>
                        <span className="font-medium">25 members</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium">$15M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium text-green-600">Launched</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Key Stakeholders</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium">Product Owner</p>
                          <p className="text-sm text-gray-600">Dr. Rajan Nagarajan</p>
                        </div>
                        <div>
                          <p className="font-medium">Engineering Lead</p>
                          <p className="text-sm text-gray-600">Sarah Chen</p>
                        </div>
                        <div>
                          <p className="font-medium">Design Lead</p>
                          <p className="text-sm text-gray-600">Michael Rodriguez</p>
                        </div>
                        <div>
                          <p className="font-medium">Compliance Officer</p>
                          <p className="text-sm text-gray-600">Jennifer Walsh</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="requirements">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-[#1B2951]">Functional Requirements</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Core Functionality</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#0D9488] rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-600">User onboarding and risk assessment</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#0D9488] rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-600">Goal-based financial planning</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#0D9488] rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-600">Portfolio analysis and recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#0D9488] rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-600">Real-time market insights</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#0D9488] rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-600">Automated rebalancing alerts</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">User Experience</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#F59E0B] rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-600">Conversational AI interface</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#F59E0B] rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-600">Mobile-first responsive design</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#F59E0B] rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-600">Personalized dashboard</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#F59E0B] rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-600">Educational content integration</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#F59E0B] rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-600">Multi-language support</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-[#1B2951]">Non-Functional Requirements</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>Response time: {"<"} 2 seconds</li>
                        <li>Uptime: 99.9%</li>
                        <li>Concurrent users: 10,000+</li>
                        <li>Data processing: Real-time</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>SOC 2 Type II compliance</li>
                        <li>End-to-end encryption</li>
                        <li>Multi-factor authentication</li>
                        <li>Regular security audits</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Compliance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>SEC regulations</li>
                        <li>FINRA compliance</li>
                        <li>GDPR data protection</li>
                        <li>Fiduciary standards</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-[#1B2951]">Feature Specifications</h2>

                <div className="space-y-6">
                  {[
                    {
                      title: "AI-Powered Risk Assessment",
                      description: "Comprehensive risk profiling using behavioral analysis and financial data",
                      priority: "High",
                      effort: "Large",
                      details: [
                        "Behavioral questionnaire with adaptive questions",
                        "Analysis of spending patterns and investment history",
                        "Real-time risk tolerance adjustments",
                        "Integration with external credit and financial data",
                      ],
                    },
                    {
                      title: "Goal-Based Planning Engine",
                      description: "Personalized financial planning based on user's life goals and timeline",
                      priority: "High",
                      effort: "Large",
                      details: [
                        "Multiple goal tracking (retirement, home purchase, education)",
                        "Monte Carlo simulations for goal probability",
                        "Automatic plan adjustments based on progress",
                        "Tax-efficient planning strategies",
                      ],
                    },
                    {
                      title: "Portfolio Optimization",
                      description: "AI-driven portfolio construction and rebalancing recommendations",
                      priority: "High",
                      effort: "Medium",
                      details: [
                        "Modern Portfolio Theory implementation",
                        "Factor-based investing strategies",
                        "Tax-loss harvesting opportunities",
                        "ESG investment options integration",
                      ],
                    },
                    {
                      title: "Conversational Interface",
                      description: "Natural language processing for financial queries and advice",
                      priority: "Medium",
                      effort: "Large",
                      details: [
                        "Voice and text input support",
                        "Context-aware conversations",
                        "Financial terminology understanding",
                        "Multi-turn dialogue management",
                      ],
                    },
                  ].map((feature, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-[#1B2951]">{feature.title}</CardTitle>
                          <div className="flex gap-2">
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                feature.priority === "High"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {feature.priority}
                            </span>
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                feature.effort === "Large"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {feature.effort}
                            </span>
                          </div>
                        </div>
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
                    alt="System Architecture Diagram"
                    className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Technology Stack</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-sm">Frontend</p>
                          <p className="text-sm text-gray-600">React, TypeScript, Material-UI</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Backend</p>
                          <p className="text-sm text-gray-600">Node.js, Express, GraphQL</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">AI/ML</p>
                          <p className="text-sm text-gray-600">Python, TensorFlow, scikit-learn</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Database</p>
                          <p className="text-sm text-gray-600">PostgreSQL, Redis, MongoDB</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Infrastructure</p>
                          <p className="text-sm text-gray-600">AWS, Docker, Kubernetes</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">AI Models</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-sm">Risk Assessment</p>
                          <p className="text-sm text-gray-600">Random Forest, XGBoost</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Portfolio Optimization</p>
                          <p className="text-sm text-gray-600">Mean-variance optimization, Black-Litterman</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">NLP</p>
                          <p className="text-sm text-gray-600">BERT, GPT-3.5, Custom fine-tuned models</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Market Prediction</p>
                          <p className="text-sm text-gray-600">LSTM, Transformer models</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Recommendation</p>
                          <p className="text-sm text-gray-600">Collaborative filtering, Content-based</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Integration Points</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Fidelity Core Systems</h4>
                        <p className="text-sm text-gray-600">Account data, transaction history, holdings</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Market Data Providers</h4>
                        <p className="text-sm text-gray-600">Real-time quotes, historical data, news feeds</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Third-Party Services</h4>
                        <p className="text-sm text-gray-600">Credit scores, external accounts, tax data</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="success">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-[#1B2951]">Success Metrics & KPIs</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Business Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">User Acquisition</span>
                          <span className="font-bold text-[#0D9488]">50K users in Year 1</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Assets Under Management</span>
                          <span className="font-bold text-[#0D9488]">$2B in 18 months</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Revenue Growth</span>
                          <span className="font-bold text-[#0D9488]">25% increase</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Cost Reduction</span>
                          <span className="font-bold text-[#0D9488]">40% advisory costs</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">User Experience Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">User Satisfaction</span>
                          <span className="font-bold text-[#F59E0B]">4.5+ stars</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Daily Active Users</span>
                          <span className="font-bold text-[#F59E0B]">60% of total</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Session Duration</span>
                          <span className="font-bold text-[#F59E0B]">8+ minutes</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Feature Adoption</span>
                          <span className="font-bold text-[#F59E0B]">80% core features</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Performance Benchmarks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-[#1B2951] mb-1">{"<"}2s</div>
                        <div className="text-sm text-gray-600">Response Time</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-[#1B2951] mb-1">99.9%</div>
                        <div className="text-sm text-gray-600">Uptime</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-[#1B2951] mb-1">95%</div>
                        <div className="text-sm text-gray-600">Accuracy</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-[#1B2951] mb-1">{"<"}5%</div>
                        <div className="text-sm text-gray-600">Error Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Launch Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="text-gray-600 mb-4">
                        The AI-Powered Financial Advisor launched successfully in Q4 2023, exceeding initial
                        projections:
                      </p>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>Acquired 75,000 users in the first 6 months (50% above target)</li>
                        <li>Generated $3.2B in assets under management within 12 months</li>
                        <li>Achieved 4.7-star rating in app stores</li>
                        <li>Reduced customer acquisition cost by 35%</li>
                        <li>Increased customer lifetime value by 28%</li>
                        <li>Won "Best AI Innovation" award from FinTech Weekly</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related PRDs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#1B2951] mb-8 text-center">Related PRDs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2951]">Secure Document Management System</CardTitle>
                <CardDescription>Blockchain-based document verification for financial institutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A complementary system for secure document handling and verification in financial advisory workflows.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/portfolio/prds/secure-document-management-system">
                    View PRD <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2951]">Wealth Management Dashboard</CardTitle>
                <CardDescription>Real-time insights into investment portfolios</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A comprehensive dashboard that integrates with the AI advisor to provide detailed portfolio analytics.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/portfolio/prds/wealth-management-dashboard">
                    View PRD <ArrowRight className="ml-2 h-4 w-4" />
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
