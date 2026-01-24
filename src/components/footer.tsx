import { Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border mt-12 pt-8 pb-12">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} elnala.com
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/alantommyle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/elnala24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:elnala24@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}