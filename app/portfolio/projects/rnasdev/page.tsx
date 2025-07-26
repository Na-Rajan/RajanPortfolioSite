import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Code, Download, ExternalLink, Github, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RNasDevProjectPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">RNasDEV</h1>
              <p className="text-xl mb-6 opacity-90">
                A comprehensive development toolkit for AI researchers and practitioners working in regulated industries
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" />
                  <span>245 stars</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Users className="h-4 w-4 mr-2 text-blue-400" />
                  <span>87 forks</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Code className="h-4 w-4 mr-2 text-green-400" />
                  <span>Python</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#F59E0B] hover:bg-[#E59000]">
                  <Link href="https://github.com/rnagarajan/RNasDEV">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="RNasDEV Interface"
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
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-[#1B2951] mb-6">Project Overview</h2>

                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      RNasDEV is a comprehensive development toolkit specifically designed for AI researchers and
                      practitioners working in regulated industries such as finance, healthcare, and government sectors.
                      The toolkit provides a unified framework for developing, testing, and deploying AI solutions while
                      maintaining compliance with industry regulations.
                    </p>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Problem Statement</h3>
                    <p className="text-gray-600 mb-4">
                      Developing AI solutions in regulated industries presents unique challenges including data privacy,
                      model explainability, audit trails, and compliance requirements. Traditional AI development tools
                      often lack the specialized features needed for these environments.
                    </p>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Solution</h3>
                    <p className="text-gray-600 mb-4">RNasDEV addresses these challenges by providing:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                      <li>Built-in compliance frameworks for major regulations (GDPR, CCPA, SOX)</li>
                      <li>Automated model documentation and audit trail generation</li>
                      <li>Privacy-preserving machine learning techniques</li>
                      <li>Explainable AI components for model interpretability</li>
                      <li>Secure model deployment pipelines</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Impact</h3>
                    <p className="text-gray-600">
                      Since its release, RNasDEV has been adopted by over 50 organizations worldwide, reducing AI
                      development time in regulated environments by an average of 40% while ensuring 100% compliance
                      with industry standards.
                    </p>
                  </div>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Project Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Language:</span>
                        <span className="font-medium">Python</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">License:</span>
                        <span className="font-medium">MIT</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Version:</span>
                        <span className="font-medium">v2.1.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Contributors:</span>
                        <span className="font-medium">23</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Issues:</span>
                        <span className="font-medium">12 open</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Updated:</span>
                        <span className="font-medium">2 days ago</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Technologies Used</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "TensorFlow", "PyTorch", "Scikit-learn", "FastAPI", "Docker", "Kubernetes"].map(
                          (tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-100 rounded text-sm font-medium">
                              {tech}
                            </span>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Compliance Framework",
                    description:
                      "Built-in support for GDPR, CCPA, SOX, and other regulatory requirements with automated compliance checking.",
                    icon: "🛡️",
                  },
                  {
                    title: "Model Explainability",
                    description:
                      "Integrated SHAP, LIME, and custom explainability tools for model interpretation and transparency.",
                    icon: "🔍",
                  },
                  {
                    title: "Privacy-Preserving ML",
                    description: "Differential privacy, federated learning, and homomorphic encryption capabilities.",
                    icon: "🔒",
                  },
                  {
                    title: "Audit Trail Generation",
                    description:
                      "Automatic generation of comprehensive audit trails for model development and deployment.",
                    icon: "📋",
                  },
                  {
                    title: "Secure Deployment",
                    description: "Containerized deployment with security scanning and vulnerability assessment.",
                    icon: "🚀",
                  },
                  {
                    title: "Data Governance",
                    description: "Tools for data lineage tracking, quality assessment, and governance workflows.",
                    icon: "📊",
                  },
                ].map((feature, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center text-[#1B2951]">
                        <span className="text-2xl mr-3">{feature.icon}</span>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="documentation">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#1B2951]">Documentation</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Getting Started Guide",
                      description: "Quick start guide to set up RNasDEV in your environment",
                      link: "#",
                    },
                    {
                      title: "API Reference",
                      description: "Complete API documentation with examples",
                      link: "#",
                    },
                    {
                      title: "Compliance Handbook",
                      description: "Guide to using compliance features for different regulations",
                      link: "#",
                    },
                    {
                      title: "Best Practices",
                      description: "Recommended patterns and practices for regulated AI development",
                      link: "#",
                    },
                    {
                      title: "Tutorials",
                      description: "Step-by-step tutorials for common use cases",
                      link: "#",
                    },
                    {
                      title: "FAQ",
                      description: "Frequently asked questions and troubleshooting",
                      link: "#",
                    },
                  ].map((doc, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-[#1B2951]">{doc.title}</CardTitle>
                        <CardDescription>{doc.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full bg-transparent">
                          <Link href={doc.link}>
                            <ExternalLink className="mr-2 h-4 w-4" /> View Documentation
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="usage">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#1B2951]">Usage Examples</h2>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`pip install rnasdev

# For development installation
git clone https://github.com/rnagarajan/RNasDEV.git
cd RNasDEV
pip install -e .`}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Basic Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`from rnasdev import ComplianceFramework, ModelExplainer
from rnasdev.privacy import DifferentialPrivacy

# Initialize compliance framework
compliance = ComplianceFramework(regulation='GDPR')

# Create a privacy-preserving model
dp = DifferentialPrivacy(epsilon=1.0)
model = dp.train_model(X_train, y_train)

# Generate explanations
explainer = ModelExplainer(model)
explanations = explainer.explain(X_test)`}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Advanced Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`from rnasdev.audit import AuditTrail
from rnasdev.deployment import SecureDeployment

# Create audit trail
audit = AuditTrail()
audit.log_model_training(model, metadata)

# Secure deployment
deployment = SecureDeployment()
deployment.deploy(model, compliance_check=True)`}</code>
                    </pre>
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
                <CardTitle className="text-[#1B2951]">Local RAG Application</CardTitle>
                <CardDescription>Secure document processing with RAG</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A complementary tool for secure document processing using retrieval-augmented generation.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/portfolio/projects/local-rag-application">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2951]">SQL Query Writer</CardTitle>
                <CardDescription>Automated SQL query generation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Generate optimized SQL queries for complex database schemas with multiple table mappings.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/portfolio/projects/sql-query-writer">
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
