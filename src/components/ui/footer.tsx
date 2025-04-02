import Link from "next/link"
import { Fish, Twitter, Facebook, Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Fish className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-lg">OceanExplorer</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              A Showcase website 
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Explore</h3>
            <Link
              href="/animals"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              Sea Animals
            </Link>
            <Link href="/news" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400">
              Ocean News
            </Link>
            <Link
              href="/conservation"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              Conservation
            </Link>
            <Link
              href="/expeditions"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              Expeditions
            </Link>
            <Link
              href="/gallery"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              Photo Gallery
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Resources</h3>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            <Link
              href="/research"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              Research Papers
            </Link>
            <Link
              href="/education"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              Educational Resources
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400">
              FAQ
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Company</h3>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400">
              About Us
            </Link>
            <Link href="/team" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400">
              Our Team
            </Link>
            <Link
              href="/careers"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Legal</h3>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400">
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              Cookie Policy
            </Link>
            <Link
              href="/accessibility"
              className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
            >
              Accessibility
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Contract Gmail Here!{'-->'}
            </p>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">hismm8690@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

