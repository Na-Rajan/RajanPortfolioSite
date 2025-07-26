import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PublicationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1B2951] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Books, articles, and thought leadership content on AI, finance, and security
          </p>
        </div>
      </section>

      {/* Publications Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="books" className="w-full">
            <TabsList className="grid grid-cols-2 gap-2 mb-8">
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
            </TabsList>

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
                        <BookOpen className="mr-2 h-4 w-4" /> Learn More
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
                        <BookOpen className="mr-2 h-4 w-4" /> Learn More
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Articles Tab */}
            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "The Future of AI in Regulated Financial Services",
                    publication: "Medium",
                    date: "June 2023",
                    excerpt:
                      "How financial institutions can navigate regulatory requirements while leveraging AI for innovation.",
                    tags: ["AI", "Finance", "Regulation"],
                  },
                  {
                    title: "Building Responsible AI Systems: A Framework",
                    publication: "Medium",
                    date: "April 2023",
                    excerpt:
                      "A comprehensive framework for developing AI systems that are ethical, transparent, and accountable.",
                    tags: ["AI Ethics", "Governance", "Best Practices"],
                  },
                  {
                    title: "Security Considerations for AI Model Deployment",
                    publication: "Medium",
                    date: "February 2023",
                    excerpt:
                      "Key security challenges and solutions when deploying AI models in production environments.",
                    tags: ["Security", "AI", "DevOps"],
                  },
                  {
                    title: "The Convergence of Finance, Security, and AI",
                    publication: "Medium",
                    date: "December 2022",
                    excerpt:
                      "How these three domains are increasingly interconnected and what it means for the future.",
                    tags: ["Finance", "Security", "AI"],
                  },
                  {
                    title: "Leading AI Product Teams: Lessons Learned",
                    publication: "Medium",
                    date: "October 2022",
                    excerpt: "Insights from scaling AI product teams and fostering a culture of innovation.",
                    tags: ["Leadership", "Product", "Teams"],
                  },
                  {
                    title: "Regulatory Compliance Automation with AI",
                    publication: "Medium",
                    date: "August 2022",
                    excerpt: "How AI is transforming regulatory compliance from a burden to a competitive advantage.",
                    tags: ["Compliance", "Automation", "AI"],
                  },
                  {
                    title: "The Role of AI in Threat Detection",
                    publication: "Medium",
                    date: "June 2022",
                    excerpt: "Advanced techniques for using AI to detect and respond to security threats in real-time.",
                    tags: ["Security", "Threat Detection", "AI"],
                  },
                  {
                    title: "Building Cross-Functional AI Product Teams",
                    publication: "Medium",
                    date: "April 2022",
                    excerpt:
                      "Strategies for assembling and leading effective cross-functional teams for AI product development.",
                    tags: ["Teams", "Leadership", "Product"],
                  },
                  {
                    title: "The Future of Wealth Management with AI",
                    publication: "Medium",
                    date: "February 2022",
                    excerpt:
                      "How AI is transforming wealth management and creating personalized investment experiences.",
                    tags: ["Wealth Management", "AI", "Finance"],
                  },
                ].map((article, index) => (
                  <Card key={index} className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">{article.title}</CardTitle>
                      <CardDescription className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" /> {article.publication} •
                        <Calendar className="h-4 w-4 mx-1" /> {article.date}
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
                      <Button variant="outline" className="w-full bg-transparent">
                        Read Article
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild className="bg-[#1B2951] hover:bg-[#2A3F7A]">
                  <Link href="https://medium.com">
                    View All Medium Articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Academic Publications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">Academic Publications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Peer-reviewed research papers and academic contributions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "A Framework for Secure AI Model Deployment in Financial Services",
                journal: "Journal of Financial Technology",
                year: "2023",
                authors: "Nagarajan, R., Smith, J., & Johnson, K.",
              },
              {
                title: "Privacy-Preserving Machine Learning for Financial Data Analysis",
                journal: "IEEE Transactions on Security and Privacy",
                year: "2022",
                authors: "Nagarajan, R., & Williams, T.",
              },
              {
                title: "Regulatory Compliance Automation: An AI Approach",
                journal: "International Journal of Financial Regulation",
                year: "2021",
                authors: "Nagarajan, R., Chen, L., & Patel, S.",
              },
              {
                title: "AI-Driven Threat Detection in Financial Networks",
                journal: "Cybersecurity Journal",
                year: "2020",
                authors: "Nagarajan, R., & Thompson, M.",
              },
            ].map((paper, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-[#1B2951]">{paper.title}</CardTitle>
                  <CardDescription>
                    {paper.journal} | {paper.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Authors: {paper.authors}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Publication
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1B2951] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in My Research?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Let's discuss collaboration opportunities or speaking engagements on AI, finance, or security topics.
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
