export function Footer() {
  return (
    <footer className="border-t border-border mt-12 pt-8 pb-12 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Alan Le. Built with Next.js and AWS Amplify.</p>
    </footer>
  )
}