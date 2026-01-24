import { Calendar, Clock, ExternalLink, Eye, View } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const blogPosts = [
  {
    title: "Project: YouTube Title Generator with AI & TypeScript",
    description: "Building a web app that generates AI-powered title variations using YouTube Data API and Groq AI.",
    date: "January 2026",
    readTime: "5 min read",
    views: 6,
    tags: ["TypeScript", "AI", "YouTube API"],
    url: "https://medium.com/@elnala24/project-youtube-title-generator-with-ai-ts-4e5837df6423",
  },
  {
    title: "Project: Deploying Portfolio Site with AWS Amplify and CDK",
    description: "Configuring automated CI/CD deployments from GitHub using AWS CDK and Secrets Manager.",
    date: "January 2026",
    readTime: "6 min read",
    views: 14,
    tags: ["AWS", "Amplify", "CDK"],
    url: "https://medium.com/@elnala24/project-deploying-portfolio-site-with-aws-amplify-and-cdk-5c56d9efbc6e",
  },
  {
    title: "Project: From Console Chaos to Code",
    description: "Migrating manual AWS infrastructure to Infrastructure as Code with CDK TypeScript.",
    date: "January 2026",
    readTime: "8 min read",
    views: 8,
    tags: ["AWS", "CDK", "TypeScript"],
    url: "https://medium.com/@elnala24/project-from-console-chaos-to-code-153b91223fdf",
  },
  {
    title: "Project: IAM Security Using IaC (CloudFormation)",
    description: "Implementing role-based access control with MFA enforcement using CloudFormation.",
    date: "January 2026",
    readTime: "7 min read",
    views: 13,
    tags: ["AWS", "IAM", "CloudFormation"],
    url: "https://medium.com/@elnala24/project-iam-security-using-iac-cloudformation-546ee94485e0",
  },
  {
    title: "Project: Building a VPC with Terraform",
    description: "Creating a multi-tier VPC architecture using Terraform.",
    date: "January 2026",
    readTime: "6 min read",
    views: 21,
    tags: ["Terraform", "VPC", "AWS"],
    url: "https://medium.com/@elnala24/project-building-a-vpc-with-terraform-89ba3135837d",
  },
  {
    title: "Terraform",
    description: "Terraform concepts and best practices.",
    date: "January 2026",
    readTime: "5 min read",
    views: 32,
    tags: ["Terraform", "IaC"],
    url: "https://medium.com/@elnala24/terraform-a8982dc944b4",
  },
  {
    title: "Intro to IaC: Terraform",
    description: "Getting started with Infrastructure as Code using Terraform.",
    date: "January 2026",
    readTime: "6 min read",
    views: 15,
    tags: ["Terraform", "IaC"],
    url: "https://medium.com/@elnala24/intro-to-iac-terraform-1fb691d985eb",
  },
  {
    title: "Project: RDS with CloudFormation",
    description: "Deploying Amazon RDS databases using CloudFormation templates.",
    date: "May 2025",
    readTime: "5 min read",
    views: 65,
    tags: ["AWS", "RDS", "CloudFormation"],
    url: "https://medium.com/@elnala24/project-rds-with-cloudformation-d65e7443d578",
  },
  {
    title: "Project: S3 Static Website with CloudFormation",
    description: "Hosting a static website on S3 using CloudFormation.",
    date: "May 2025",
    readTime: "4 min read",
    views: 124,
    tags: ["AWS", "S3", "CloudFormation"],
    url: "https://medium.com/@elnala24/project-s3-static-website-with-cloudformation-2253652b7405",
  },
  {
    title: "Project: Auto Scaling with CloudFormation",
    description: "Implementing auto scaling groups and policies with CloudFormation.",
    date: "May 2025",
    readTime: "6 min read",
    views: 82,
    tags: ["AWS", "Auto Scaling", "CloudFormation"],
    url: "https://medium.com/@elnala24/project-auto-scaling-with-cloudformation-35aa00f7f060",
  },
  {
    title: "Project: Application Load Balancer with CloudFormation",
    description: "Deploying an ALB with listener rules and target groups.",
    date: "May 2025",
    readTime: "5 min read",
    views: 42,
    tags: ["AWS", "ALB", "CloudFormation"],
    url: "https://medium.com/@elnala24/project-application-load-balancer-with-cloudformation-cc5d7410c76e",
  },
  {
    title: "Project: IAM Groups, Policies & Roles with CloudFormation",
    description: "Managing IAM resources using CloudFormation templates.",
    date: "May 2025",
    readTime: "6 min read",
    views: 84,
    tags: ["AWS", "IAM", "CloudFormation"],
    url: "https://medium.com/@elnala24/project-iam-groups-policies-roles-with-cloudformation-d456c8f5f05f",
  },
  {
    title: "Project: Bastion with CloudFormation",
    description: "Setting up a bastion host for secure SSH access.",
    date: "May 2025",
    readTime: "5 min read",
    views: 64,
    tags: ["AWS", "Bastion", "CloudFormation"],
    url: "https://medium.com/@elnala24/project-bastion-with-cloudformation-a55e916979ea",
  },
  {
    title: "Project: AWS Fundamentals with CloudFormation",
    description: "Learning AWS basics through hands-on CloudFormation projects.",
    date: "May 2025",
    readTime: "7 min read",
    views: 41,
    tags: ["AWS", "CloudFormation"],
    url: "https://medium.com/@elnala24/project-aws-fundamentals-with-cloudformation-051c92eaa175",
  },
  {
    title: "Week 5 Part 4: AWS CloudFormation",
    description: "Introduction to Infrastructure as Code with CloudFormation.",
    date: "May 2025",
    readTime: "6 min read",
    views: 40,
    tags: ["AWS", "CloudFormation", "IaC"],
    url: "https://medium.com/@elnala24/week-5-part-4-aws-cloudformation-98e864a43f74",
  },
  {
    title: "Week 5 Part 3: EC2 Instances",
    description: "Deep dive into Amazon EC2 instances and configurations.",
    date: "May 2025",
    readTime: "5 min read",
    views: 40,
    tags: ["AWS", "EC2"],
    url: "https://medium.com/@elnala24/week-5-part-3-ec2-instances-acad4e66c6eb",
  },
  {
    title: "Week 5 Part 2: Bastion Host",
    description: "Understanding bastion hosts for secure cloud access.",
    date: "May 2025",
    readTime: "4 min read",
    views: 54,
    tags: ["AWS", "Security", "Bastion"],
    url: "https://medium.com/@elnala24/week-5-part-2-bastion-host-493331847c2c",
  },
  {
    title: "Project: Design a VPC Architecture",
    description: "Creating VPC architecture diagrams with proper subnet design.",
    date: "May 2025",
    readTime: "5 min read",
    views: 41,
    tags: ["AWS", "VPC", "Architecture"],
    url: "https://medium.com/@elnala24/project-design-a-vpc-architecture-dc387893886b",
  },
  {
    title: "Week 5 Part 1: AWS Fundamentals",
    description: "Getting started with core AWS services and concepts.",
    date: "May 2025",
    readTime: "6 min read",
    views: 37,
    tags: ["AWS", "Cloud"],
    url: "https://medium.com/@elnala24/week-5-part-1-aws-fundamentals-3745a93798ce",
  },
  {
    title: "Week 4: Linux and Bash",
    description: "Learning Linux system administration and Bash scripting.",
    date: "May 2025",
    readTime: "5 min read",
    views: 59,
    tags: ["Linux", "Bash"],
    url: "https://medium.com/@elnala24/week-4-linux-and-bash-ac81177b2d29",
  },
  {
    title: "Project: Video Sharing Platform",
    description: "Designing a serverless video sharing platform architecture.",
    date: "March 2025",
    readTime: "6 min read",
    views: 52,
    tags: ["AWS", "Serverless", "Architecture"],
    url: "https://medium.com/@elnala24/project-video-sharing-platform-f539f9d92ec2",
  },
  {
    title: "Project: Creating 3 Architectures with Excalidraw",
    description: "Designing cloud architectures using Excalidraw diagrams.",
    date: "March 2025",
    readTime: "5 min read",
    views: 490,
    tags: ["Architecture", "Design"],
    url: "https://medium.com/@elnala24/project-creating-3-architectures-with-excalidraw-1a360a1ec5da",
  },
  {
    title: "Week 3: System Design Applications",
    description: "Understanding system design principles and patterns.",
    date: "March 2025",
    readTime: "6 min read",
    views: 86,
    tags: ["System Design"],
    url: "https://medium.com/@elnala24/week-3-system-design-applications-0208b53efc87",
  },
  {
    title: "Week 2: Git & Cloud Architecture",
    description: "Version control with Git and cloud architecture fundamentals.",
    date: "December 2024",
    readTime: "5 min read",
    views: 15,
    tags: ["Git", "Cloud"],
    url: "https://medium.com/@elnala24/week-2-git-cloud-architecture-f0ff50ff685b",
  },
  {
    title: "Cloud Engineer Academy Week 1: Learning the Fundamentals",
    description: "Starting my cloud engineering journey and relocating to Korea.",
    date: "November 2024",
    readTime: "7 min read",
    views: 47,
    tags: ["Career", "Cloud"],
    url: "https://medium.com/@elnala24/cloud-engineer-academy-week-1-moving-to-korea-learning-the-fundamentals-9a03a22dc283",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">
          <span className="text-primary">my blog.</span>
        </h1>
        
        <Card className="border-border bg-card/50">
          <CardContent className="p-0 divide-y divide-border">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="p-5 hover:bg-muted/30 transition-colors cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{post.title}</h3>
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{post.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 text-xs text-muted-foreground shrink-0">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </span>

                    </div>
                  </div>
                </article>
              </a>
            ))}
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
          <a
            href="https://medium.com/@elnala24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all posts on Medium →
          </a>
        </div>
        
        <Footer />
      </main>
    </div>
  )
}