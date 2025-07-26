import Link from "next/link"
import { Linkedin, Github, FileText, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1B2951] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Rajan Nagarajan</h3>
            <p className="text-gray-300 mb-4">AI Product Director | Finance & Security Leader</p>
            <p className="text-gray-300">
              Transforming regulated industries through AI innovation while building world-class product teams
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-300 hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/credentials" className="text-gray-300 hover:text-white transition-colors">
                  Credentials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://medium.com" className="text-gray-300 hover:text-white transition-colors">
                <FileText className="h-6 w-6" />
                <span className="sr-only">Medium</span>
              </Link>
              <Link href="mailto:nrajananalyst@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-gray-300">
              <span className="block">nrajananalyst@gmail.com</span>
              <span className="block">+1 518-992-8606</span>
              <span className="block">Morrisville, North Carolina, USA</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Dr. Rajan Nagarajan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
