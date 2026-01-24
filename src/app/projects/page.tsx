import Image from "next/image"
import { Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const projects = [
  {
    title: "IAM Security Implementation",
    description: "Comprehensive IAM security solution using CloudFormation, Terraform, and AWS CDK (Python)—established role-based access control for 4 teams with MFA enforcement and least-privilege policies.",
    image: "/projects/finish-design.png",
    tags: ["IAM", "CloudFormation", "Terraform", "CDK", "Python"],
    links: [
      { label: "Source", url: "https://github.com/elnala24/aws-iam-security-project", icon: "github" },
    ],
  },
  {
    title: "Healthcare Infrastructure Migration",
    description: "Migrated manual AWS infrastructure to IaC using AWS CDK with TypeScript—designed secure multi-tier VPC with public/private subnet isolation across 2 AZs, deployed EC2 and Multi-AZ RDS.",
    image: "/projects/techhealth-architecture.png",
    tags: ["CDK", "TypeScript", "VPC", "EC2", "RDS"],
    links: [
      { label: "Source", url: "https://github.com/elnala24/project2-techhealth-cdk", icon: "github" },
    ],
  },
  {
    title: "Portfolio Site with CI/CD",
    description: "Built and deployed a Next.js portfolio on AWS Amplify with CI/CD—configured automated deployments from GitHub using AWS CDK and stored credentials securely in AWS Secrets Manager.",
    image: "/projects/amplify-1.png",
    tags: ["Amplify", "CDK", "Next.js", "Secrets Manager"],
    links: [
      { label: "Website", url: "https://main.de5mugr6dhi8o.amplifyapp.com", icon: "globe" },
      { label: "Source", url: "https://github.com/elnala24/project3-portfolio", icon: "github" },
    ],
  },
  {
    title: "YouTube AI Title Generator",
    description: "Web app using TypeScript, YouTube Data API, and Groq AI—fetches video metadata and generates 4 AI-powered title variations with different tones.",
    image: "/projects/ytapp.png",
    tags: ["TypeScript", "YouTube API", "Groq AI", "REST APIs"],
    links: [
      { label: "Source", url: "https://github.com/elnala24/ytapp-project", icon: "github" },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">
          <span className="text-primary">my projects.</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-border bg-card/50 overflow-hidden flex flex-col">
              <CardContent className="p-5 flex flex-col flex-1">
                <div className="relative h-48 bg-muted rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.links.map((link, linkIndex) => (
                      <Button key={linkIndex} variant="outline" size="sm" className="gap-1.5 text-xs bg-transparent" asChild>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.icon === "globe" ? <Globe className="w-3 h-3" /> : <Github className="w-3 h-3" />}
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Footer />
      </main>
    </div>
  )
}