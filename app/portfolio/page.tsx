import Link from "next/link"
import { ArrowRight, Book, BookOpen, Code, FileText, Globe, Lightbulb, Medal, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1B2951] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Showcasing my work across product management, development, and innovation
          </p>
        </div>
      </section>

      {/* Portfolio Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="open-source-libraries" className="w-full">
            <div className="overflow-x-auto pb-4">
              <TabsList className="inline-flex min-w-max">
                <TabsTrigger value="open-source-libraries">Open Source Libraries</TabsTrigger>
                <TabsTrigger value="prds">PRDs</TabsTrigger>
                <TabsTrigger value="open-source-contributions">Open Source Contributions</TabsTrigger>
                <TabsTrigger value="websites">Websites</TabsTrigger>
                <TabsTrigger value="patents">Patents</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
                <TabsTrigger value="books">Books</TabsTrigger>
                <TabsTrigger value="medium">Medium Stories</TabsTrigger>
              </TabsList>
            </div>

            {/* Open Source Libraries Tab */}
            <TabsContent value="open-source-libraries">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "RNasDEV",
                    description:
                      "A comprehensive development toolkit for AI researchers and practitioners working in regulated industries.",
                    language: "Python",
                    stars: 245,
                    forks: 87,
                    link: "https://github.com/rnagarajan/RNasDEV",
                  },
                  {
                    title: "Local RAG Application",
                    description:
                      "A Retrieval-Augmented Generation application that runs locally for secure document processing and question answering.",
                    language: "Python",
                    stars: 312,
                    forks: 98,
                    link: "https://github.com/rnagarajan/local-rag",
                  },
                  {
                    title: "SQL Query Writer",
                    description:
                      "A tool that generates optimized SQL queries for complex database schemas with multiple table mappings.",
                    language: "TypeScript",
                    stars: 176,
                    forks: 34,
                    link: "https://github.com/rnagarajan/sql-query-writer",
                  },
                ].map((repo, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">{repo.title}</CardTitle>
                      <CardDescription>
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-medium mr-2 ${
                            repo.language === "Python"
                              ? "bg-blue-100 text-blue-800"
                              : repo.language === "JavaScript"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                          }`}
                        >
                          {repo.language}
                        </span>
                        <span className="text-sm">
                          ⭐ {repo.stars} • 🍴 {repo.forks}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{repo.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={`/portfolio/projects/${repo.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          <Code className="mr-2 h-4 w-4" /> View Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild className="bg-[#1B2951] hover:bg-[#2A3F7A]">
                  <Link href="https://github.com/rnagarajan">
                    View All GitHub Repositories <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            {/* PRDs Tab */}
            <TabsContent value="prds">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "AI-Powered Financial Advisor",
                    description:
                      "A comprehensive PRD for an AI system that provides personalized financial advice based on user goals and risk tolerance.",
                    company: "Fidelity Investments",
                    year: "2023",
                  },
                  {
                    title: "Secure Document Management System",
                    description:
                      "PRD for a blockchain-based document verification and management system for financial institutions.",
                    company: "Fidelity Investments",
                    year: "2022",
                  },
                  {
                    title: "Threat Intelligence Platform",
                    description:
                      "PRD for an AI-powered threat detection and response system for enterprise security operations.",
                    company: "Tata Communications",
                    year: "2020",
                  },
                  {
                    title: "Wealth Management Dashboard",
                    description:
                      "PRD for a comprehensive dashboard providing real-time insights into investment portfolios.",
                    company: "Fidelity Investments",
                    year: "2021",
                  },
                  {
                    title: "Regulatory Compliance Automation",
                    description:
                      "PRD for an AI system that automates regulatory compliance checks for financial transactions.",
                    company: "Fidelity Investments",
                    year: "2022",
                  },
                  {
                    title: "Network Security Analytics",
                    description:
                      "PRD for a machine learning system that analyzes network traffic for security anomalies.",
                    company: "Tata Communications",
                    year: "2019",
                  },
                ].map((prd, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">{prd.title}</CardTitle>
                      <CardDescription>
                        {prd.company} | {prd.year}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{prd.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link
                          href={`/portfolio/prds/${prd.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[^a-z0-9-]/g, "")}`}
                        >
                          <FileText className="mr-2 h-4 w-4" /> View PRD Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Open Source Contributions Tab */}
            <TabsContent value="open-source-contributions">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "TensorFlow",
                    description:
                      "Contributed to the TensorFlow library by implementing specialized financial time-series models.",
                    contribution: "Feature Implementation",
                    pullRequests: 5,
                    link: "https://github.com/tensorflow/tensorflow",
                  },
                  {
                    title: "Hugging Face Transformers",
                    description:
                      "Added financial domain-specific tokenizers and model adaptations for improved performance in financial text analysis.",
                    contribution: "Model Enhancement",
                    pullRequests: 3,
                    link: "https://github.com/huggingface/transformers",
                  },
                  {
                    title: "LangChain",
                    description:
                      "Developed custom agents and tools for financial document processing and regulatory compliance checking.",
                    contribution: "Tool Development",
                    pullRequests: 7,
                    link: "https://github.com/langchain-ai/langchain",
                  },
                  {
                    title: "PyTorch",
                    description:
                      "Contributed optimizations for running large language models on resource-constrained environments.",
                    contribution: "Performance Optimization",
                    pullRequests: 2,
                    link: "https://github.com/pytorch/pytorch",
                  },
                  {
                    title: "Scikit-learn",
                    description: "Added specialized feature engineering tools for financial data preprocessing.",
                    contribution: "Feature Engineering",
                    pullRequests: 4,
                    link: "https://github.com/scikit-learn/scikit-learn",
                  },
                  {
                    title: "Pandas",
                    description: "Contributed financial time-series analysis functions and performance improvements.",
                    contribution: "API Enhancement",
                    pullRequests: 3,
                    link: "https://github.com/pandas-dev/pandas",
                  },
                ].map((contribution, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">{contribution.title}</CardTitle>
                      <CardDescription>
                        <span className="inline-block px-2 py-1 rounded text-xs font-medium mr-2 bg-purple-100 text-purple-800">
                          {contribution.contribution}
                        </span>
                        <span className="text-sm">PRs: {contribution.pullRequests}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{contribution.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={contribution.link}>
                          <Code className="mr-2 h-4 w-4" /> View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Websites Tab */}
            <TabsContent value="websites">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "FinSec AI Dashboard",
                    description: "A comprehensive dashboard for financial security analytics with AI-powered insights.",
                    image: "financial-dashboard",
                    technologies: ["React", "Node.js", "D3.js"],
                  },
                  {
                    title: "Wealth Management Portal",
                    description:
                      "Client-facing portal for wealth management with personalized investment recommendations.",
                    image: "wealth-management",
                    technologies: ["Angular", "Express", "MongoDB"],
                  },
                  {
                    title: "Security Operations Center",
                    description: "Real-time monitoring and threat detection interface for security operations teams.",
                    image: "security-operations",
                    technologies: ["Vue.js", "Python", "WebSockets"],
                  },
                  {
                    title: "Regulatory Compliance Tool",
                    description: "Web application for tracking and managing regulatory compliance requirements.",
                    image: "compliance-tool",
                    technologies: ["React", "GraphQL", "PostgreSQL"],
                  },
                ].map((website, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video w-full">
                      <img
                        src={`/placeholder.svg?height=300&width=600&query=${website.image}%20website%20interface`}
                        alt={website.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">{website.title}</CardTitle>
                      <CardDescription>
                        {website.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-medium mr-2 mb-2"
                          >
                            {tech}
                          </span>
                        ))}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{website.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={`/portfolio/websites/${website.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          <Globe className="mr-2 h-4 w-4" /> View Project Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Patents Tab */}
            <TabsContent value="patents">
              <div className="space-y-6">
                {[
                  {
                    title: "Local Edge Behaviour Monitoring AI System",
                    number: "US 10,XXX,XXX",
                    year: "2022",
                    description:
                      "A system for monitoring and analyzing user behavior at the edge for enhanced security and privacy while minimizing data transmission.",
                  },
                  {
                    title: "Secure Transfer of Credentials Across Systems",
                    number: "US 11,XXX,XXX",
                    year: "2021",
                    description:
                      "A method for securely transferring authentication credentials between systems without exposing sensitive information.",
                  },
                  {
                    title: "AI-Powered Anomaly Detection for Financial Transactions",
                    number: "US 11,XXX,XXX",
                    year: "2021",
                    description:
                      "A system that uses machine learning to detect anomalous patterns in financial transactions to prevent fraud and money laundering.",
                  },
                  {
                    title: "Secure Multi-Party Computation for Financial Data Analysis",
                    number: "US 10,XXX,XXX",
                    year: "2020",
                    description:
                      "A method for performing analytics on sensitive financial data while preserving privacy through secure multi-party computation.",
                  },
                ].map((patent, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">{patent.title}</CardTitle>
                      <CardDescription>
                        {patent.number} | {patent.year}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{patent.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link
                          href={`/portfolio/patents/${patent.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[^a-z0-9-]/g, "")}`}
                        >
                          <Lightbulb className="mr-2 h-4 w-4" /> View Patent Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Publications Tab */}
            <TabsContent value="publications">
              <div className="space-y-6">
                {[
                  {
                    title: "A Framework for Secure AI Model Deployment in Financial Services",
                    journal: "Journal of Financial Technology",
                    year: "2023",
                    authors: "Nagarajan, R., Smith, J., & Johnson, K.",
                    abstract:
                      "This paper presents a comprehensive framework for deploying AI models in financial services with security and regulatory compliance as primary considerations.",
                  },
                  {
                    title: "Privacy-Preserving Machine Learning for Financial Data Analysis",
                    journal: "IEEE Transactions on Security and Privacy",
                    year: "2022",
                    authors: "Nagarajan, R., & Williams, T.",
                    abstract:
                      "This research introduces novel techniques for training machine learning models on sensitive financial data while preserving privacy and meeting regulatory requirements.",
                  },
                  {
                    title: "Regulatory Compliance Automation: An AI Approach",
                    journal: "International Journal of Financial Regulation",
                    year: "2021",
                    authors: "Nagarajan, R., Chen, L., & Patel, S.",
                    abstract:
                      "This paper explores how AI can be leveraged to automate regulatory compliance processes in financial institutions, reducing costs and improving accuracy.",
                  },
                  {
                    title: "AI-Driven Threat Detection in Financial Networks",
                    journal: "Cybersecurity Journal",
                    year: "2020",
                    authors: "Nagarajan, R., & Thompson, M.",
                    abstract:
                      "This research presents a novel approach to detecting threats in financial networks using advanced AI techniques and behavioral analysis.",
                  },
                  {
                    title: "Doctoral Thesis: Secure AI Systems for Regulated Industries",
                    institution: "Stanford University",
                    year: "2018",
                    abstract:
                      "This doctoral thesis explores the intersection of AI, security, and regulatory compliance in financial services and other regulated industries.",
                  },
                ].map((publication, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">{publication.title}</CardTitle>
                      <CardDescription>
                        {publication.journal || publication.institution} | {publication.year}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {publication.authors && <p className="text-gray-600 mb-2">Authors: {publication.authors}</p>}
                      <p className="text-gray-600">{publication.abstract}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full bg-transparent">
                        <FileText className="mr-2 h-4 w-4" /> View Publication
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Certifications Tab */}
            <TabsContent value="certifications">
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
                  {
                    name: "TensorFlow Developer Certificate",
                    issuer: "Google",
                    year: "2020",
                    icon: "tensorflow",
                  },
                  {
                    name: "Certified Information Security Manager (CISM)",
                    issuer: "ISACA",
                    year: "2019",
                    icon: "isaca",
                  },
                  {
                    name: "Certified Cloud Security Professional (CCSP)",
                    issuer: "ISC²",
                    year: "2019",
                    icon: "isc2",
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
                        <Medal className="h-4 w-4 text-[#F59E0B] mr-2" />
                        <span className="text-gray-600">Issued: {cert.year}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Books Tab */}
            <TabsContent value="books">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="flex flex-col md:flex-row overflow-hidden">
                  <div className="md:w-1/3">
                    <img
                      src="/placeholder.svg?height=400&width=300"
                      alt="The Invisible Engine Book Cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-2xl text-[#1B2951]">The Invisible Engine</CardTitle>
                      <CardDescription>Published 2022 | ISBN: 978-X-XXXX-XXXX-X</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        How AI is transforming financial services and reshaping the future of banking, investments, and
                        regulatory compliance.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">AI</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Finance</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Innovation</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-[#1B2951] hover:bg-[#2A3F7A]">
                        <Book className="mr-2 h-4 w-4" /> Learn More
                      </Button>
                    </CardFooter>
                  </div>
                </Card>

                <Card className="flex flex-col md:flex-row overflow-hidden">
                  <div className="md:w-1/3">
                    <img
                      src="/placeholder.svg?height=400&width=300"
                      alt="Secure by Design Book Cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-2xl text-[#1B2951]">Secure by Design</CardTitle>
                      <CardDescription>Published 2020 | ISBN: 978-X-XXXX-XXXX-X</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        A comprehensive guide to building security into financial and enterprise systems from the ground
                        up.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Security</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Architecture</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Enterprise</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-[#1B2951] hover:bg-[#2A3F7A]">
                        <Book className="mr-2 h-4 w-4" /> Learn More
                      </Button>
                    </CardFooter>
                  </div>
                </Card>

                <Card className="flex flex-col md:flex-row overflow-hidden">
                  <div className="md:w-1/3">
                    <img
                      src="/placeholder.svg?height=400&width=300"
                      alt="AI in Regulated Industries Book Cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-2xl text-[#1B2951]">AI in Regulated Industries</CardTitle>
                      <CardDescription>Published 2021 | ISBN: 978-X-XXXX-XXXX-X</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        A practical guide to implementing AI solutions in highly regulated industries while maintaining
                        compliance and security.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">AI</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Regulation</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Compliance</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-[#1B2951] hover:bg-[#2A3F7A]">
                        <Book className="mr-2 h-4 w-4" /> Learn More
                      </Button>
                    </CardFooter>
                  </div>
                </Card>

                <Card className="flex flex-col md:flex-row overflow-hidden">
                  <div className="md:w-1/3">
                    <img
                      src="/placeholder.svg?height=400&width=300"
                      alt="Leading AI Teams Book Cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-2xl text-[#1B2951]">Leading AI Teams</CardTitle>
                      <CardDescription>Published 2023 | ISBN: 978-X-XXXX-XXXX-X</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Strategies for building, managing, and scaling high-performing AI product teams in enterprise
                        environments.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Leadership</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Teams</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Product</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-[#1B2951] hover:bg-[#2A3F7A]">
                        <Book className="mr-2 h-4 w-4" /> Learn More
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Medium Stories Tab */}
            <TabsContent value="medium">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "The Future of AI in Regulated Financial Services",
                    date: "June 2023",
                    excerpt:
                      "How financial institutions can navigate regulatory requirements while leveraging AI for innovation.",
                    tags: ["AI", "Finance", "Regulation"],
                    link: "https://medium.com/@rnagarajan/future-ai-regulated-financial-services",
                  },
                  {
                    title: "Building Responsible AI Systems: A Framework",
                    date: "April 2023",
                    excerpt:
                      "A comprehensive framework for developing AI systems that are ethical, transparent, and accountable.",
                    tags: ["AI Ethics", "Governance", "Best Practices"],
                    link: "https://medium.com/@rnagarajan/responsible-ai-framework",
                  },
                  {
                    title: "Security Considerations for AI Model Deployment",
                    date: "February 2023",
                    excerpt:
                      "Key security challenges and solutions when deploying AI models in production environments.",
                    tags: ["Security", "AI", "DevOps"],
                    link: "https://medium.com/@rnagarajan/security-ai-model-deployment",
                  },
                  {
                    title: "The Convergence of Finance, Security, and AI",
                    date: "December 2022",
                    excerpt:
                      "How these three domains are increasingly interconnected and what it means for the future.",
                    tags: ["Finance", "Security", "AI"],
                    link: "https://medium.com/@rnagarajan/convergence-finance-security-ai",
                  },
                  {
                    title: "Leading AI Product Teams: Lessons Learned",
                    date: "October 2022",
                    excerpt: "Insights from scaling AI product teams and fostering a culture of innovation.",
                    tags: ["Leadership", "Product", "Teams"],
                    link: "https://medium.com/@rnagarajan/leading-ai-product-teams",
                  },
                  {
                    title: "Regulatory Compliance Automation with AI",
                    date: "August 2022",
                    excerpt: "How AI is transforming regulatory compliance from a burden to a competitive advantage.",
                    tags: ["Compliance", "Automation", "AI"],
                    link: "https://medium.com/@rnagarajan/regulatory-compliance-automation-ai",
                  },
                  {
                    title: "The Role of AI in Threat Detection",
                    date: "June 2022",
                    excerpt: "Advanced techniques for using AI to detect and respond to security threats in real-time.",
                    tags: ["Security", "Threat Detection", "AI"],
                    link: "https://medium.com/@rnagarajan/ai-threat-detection",
                  },
                  {
                    title: "Building Cross-Functional AI Product Teams",
                    date: "April 2022",
                    excerpt:
                      "Strategies for assembling and leading effective cross-functional teams for AI product development.",
                    tags: ["Teams", "Leadership", "Product"],
                    link: "https://medium.com/@rnagarajan/cross-functional-ai-teams",
                  },
                  {
                    title: "The Future of Wealth Management with AI",
                    date: "February 2022",
                    excerpt:
                      "How AI is transforming wealth management and creating personalized investment experiences.",
                    tags: ["Wealth Management", "AI", "Finance"],
                    link: "https://medium.com/@rnagarajan/wealth-management-ai",
                  },
                ].map((article, index) => (
                  <Card key={index} className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">{article.title}</CardTitle>
                      <CardDescription className="flex items-center">
                        <PenTool className="h-4 w-4 mr-1" /> Medium • {article.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={article.link}>
                          <BookOpen className="mr-2 h-4 w-4" /> Read Article
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild className="bg-[#1B2951] hover:bg-[#2A3F7A]">
                  <Link href="https://medium.com/@rnagarajan">
                    View All Medium Articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1B2951] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaboration?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Let's discuss how we can work together on innovative projects in AI, finance, or security.
          </p>
          <Button asChild size="lg" className="bg-[#F59E0B] hover:bg-[#E59000]">
            <Link href="/contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
