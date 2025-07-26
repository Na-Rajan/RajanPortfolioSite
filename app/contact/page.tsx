"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Github, Linkedin, Mail, MapPin, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      })
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1B2951] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Let's connect to discuss collaboration, speaking opportunities, or consulting
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2951] mb-6">Get in Touch</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      name="role"
                      placeholder="Your role"
                      value={formData.role}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-[#1B2951] hover:bg-[#2A3F7A]" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2951] mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#F59E0B] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">nrajananalyst@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#F59E0B] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 518-992-8606</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#F59E0B] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Morrisville, North Carolina, USA</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-[#F59E0B] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Schedule a Meeting</h3>
                    <Button asChild variant="outline" className="mt-2 bg-transparent">
                      <Link href="#">
                        Book a Time Slot <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-6 w-6 text-[#F59E0B] mr-4 mt-1 flex items-center justify-center">
                    <span className="sr-only">Social</span>
                    <div className="h-6 w-6"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Connect</h3>
                    <div className="flex space-x-4 mt-2">
                      <Link
                        href="https://linkedin.com"
                        className="text-gray-600 hover:text-[#0077B5] transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link href="https://github.com" className="text-gray-600 hover:text-[#333] transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Collaboration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">Services & Collaboration</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Areas where I can provide expertise and value to your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2951]">AI Strategy</CardTitle>
                <CardDescription>Strategic planning and implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                    <span>AI roadmap development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Technology selection and evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                    <span>AI governance frameworks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2951]">Organizational Transformation</CardTitle>
                <CardDescription>Building AI-ready teams and processes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Team structure and hiring strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                    <span>AI skills development programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Change management for AI adoption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2951]">Industry Expertise</CardTitle>
                <CardDescription>Domain-specific AI applications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Financial services AI solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Security and compliance frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regulatory navigation for AI</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-[#1B2951] mb-4">Speaking Topics</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium">
                AI Leadership
              </span>
              <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium">
                Product Management
              </span>
              <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium">
                Behavioral Psychology
              </span>
              <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium">
                Financial AI
              </span>
              <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium">
                Security Innovation
              </span>
              <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium">
                Team Building
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
