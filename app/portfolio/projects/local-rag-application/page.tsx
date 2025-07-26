import Link from "next/link"
import { ArrowLeft, ArrowRight, Code, Download, Github, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LocalRAGProjectPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Local RAG Application</h1>
              <p className="text-xl mb-6 opacity-90">
                A Retrieval-Augmented Generation application that runs locally for secure document processing and
                question answering
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" />
                  <span>312 stars</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Users className="h-4 w-4 mr-2 text-blue-400" />
                  <span>98 forks</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <Code className="h-4 w-4 mr-2 text-green-400" />
                  <span>Python</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#F59E0B] hover:bg-[#E59000]">
                  <Link href="https://github.com/rnagarajan/local-rag">
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
                alt="Local RAG Application Interface"
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
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-[#1B2951] mb-6">Project Overview</h2>

                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      The Local RAG Application is a privacy-first, locally-hosted solution for document processing and
                      question answering using Retrieval-Augmented Generation (RAG) technology. Designed specifically
                      for organizations that require complete data sovereignty and cannot use cloud-based AI services.
                    </p>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Key Benefits</h3>
                    <ul className="list-disc pl-6 text-gray-600 mb-6">
                      <li>
                        <strong>Complete Privacy:</strong> All processing happens locally, no data leaves your
                        environment
                      </li>
                      <li>
                        <strong>Regulatory Compliance:</strong> Meets GDPR, HIPAA, and other data protection
                        requirements
                      </li>
                      <li>
                        <strong>Cost Effective:</strong> No API costs or usage limits
                      </li>
                      <li>
                        <strong>Customizable:</strong> Fully configurable for specific use cases and domains
                      </li>
                      <li>
                        <strong>Offline Capable:</strong> Works without internet connectivity
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Use Cases</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Legal Document Analysis</h4>
                        <p className="text-sm text-gray-600">
                          Process contracts, legal briefs, and regulatory documents
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Financial Research</h4>
                        <p className="text-sm text-gray-600">
                          Analyze financial reports, market research, and compliance documents
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Medical Records</h4>
                        <p className="text-sm text-gray-600">
                          Process patient records and medical literature while maintaining HIPAA compliance
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Internal Knowledge Base</h4>
                        <p className="text-sm text-gray-600">
                          Create searchable knowledge bases from internal documentation
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-[#1B2951] mb-3">Technical Highlights</h3>
                    <p className="text-gray-600">
                      Built using state-of-the-art open-source models including Llama 2, Mistral, and various embedding
                      models. The application supports multiple document formats and provides both REST API and web
                      interface access.
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
                        <span className="font-medium">Apache 2.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Version:</span>
                        <span className="font-medium">v1.3.2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Docker Support:</span>
                        <span className="font-medium">Yes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">GPU Support:</span>
                        <span className="font-medium">Optional</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Min RAM:</span>
                        <span className="font-medium">8GB</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Supported Models</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {["Llama 2 7B/13B", "Mistral 7B", "CodeLlama", "Sentence Transformers", "BGE Embeddings"].map(
                          (model) => (
                            <div key={model} className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-sm">{model}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="architecture">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-[#1B2951]">System Architecture</h2>

                <div className="text-center mb-8">
                  <img
                    src="/placeholder.svg?height=500&width=800"
                    alt="Local RAG Architecture Diagram"
                    className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Document Processing Pipeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                        <li>Document ingestion (PDF, DOCX, TXT, HTML)</li>
                        <li>Text extraction and preprocessing</li>
                        <li>Chunking with overlap for context preservation</li>
                        <li>Embedding generation using local models</li>
                        <li>Vector storage in local database</li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1B2951]">Query Processing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                        <li>Query embedding generation</li>
                        <li>Similarity search in vector database</li>
                        <li>Context retrieval and ranking</li>
                        <li>Prompt construction with retrieved context</li>
                        <li>Local LLM inference and response generation</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Component Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Vector Database</h4>
                        <p className="text-sm text-gray-600">ChromaDB for efficient similarity search</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">LLM Engine</h4>
                        <p className="text-sm text-gray-600">Ollama for local model serving</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-[#1B2951] mb-2">Web Interface</h4>
                        <p className="text-sm text-gray-600">Streamlit for user-friendly UI</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="features">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Multi-Format Support",
                    description: "Process PDF, DOCX, TXT, HTML, and Markdown documents with automatic text extraction.",
                    icon: "📄",
                  },
                  {
                    title: "Local Processing",
                    description: "Complete offline operation with no external API dependencies or data transmission.",
                    icon: "🏠",
                  },
                  {
                    title: "Flexible Models",
                    description: "Support for multiple open-source LLMs with easy model switching and configuration.",
                    icon: "🔄",
                  },
                  {
                    title: "REST API",
                    description: "RESTful API for integration with existing applications and workflows.",
                    icon: "🔌",
                  },
                  {
                    title: "Web Interface",
                    description: "Intuitive web-based interface for document upload and interactive querying.",
                    icon: "🌐",
                  },
                  {
                    title: "Batch Processing",
                    description: "Efficient batch processing capabilities for large document collections.",
                    icon: "⚡",
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

            <TabsContent value="usage">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#1B2951]">Getting Started</h2>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Quick Start with Docker</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`# Pull and run the Docker container
docker pull rnagarajan/local-rag:latest
docker run -p 8501:8501 -v ./documents:/app/documents rnagarajan/local-rag

# Access the web interface at http://localhost:8501`}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">Manual Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`# Clone the repository
git clone https://github.com/rnagarajan/local-rag.git
cd local-rag

# Install dependencies
pip install -r requirements.txt

# Install Ollama (for LLM serving)
curl -fsSL https://ollama.ai/install.sh | sh

# Pull a model
ollama pull llama2:7b

# Start the application
streamlit run app.py`}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2951]">API Usage Example</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`import requests

# Upload a document
files = {'file': open('document.pdf', 'rb')}
response = requests.post('http://localhost:8501/api/upload', files=files)

# Query the document
query_data = {
    'question': 'What are the key findings in this document?',
    'max_tokens': 500
}
response = requests.post('http://localhost:8501/api/query', json=query_data)
answer = response.json()['answer']`}</code>
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
                <CardTitle className="text-[#1B2951]">RNasDEV</CardTitle>
                <CardDescription>AI development toolkit for regulated industries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive toolkit that complements this RAG application with compliance features.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/portfolio/projects/rnasdev">
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
