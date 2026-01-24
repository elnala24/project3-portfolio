"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, FileText, Globe, ArrowRight, Calendar, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Work experience data
const workExperience = [
  {
    company: "Abode Services",
    logo: "/logos/abode-logo.png",
    roles: [
      {
        title: "Financial Analyst",
        period: "Dec 2022 - Sep 2024",
        points: [
          "Prepared monthly reports for 12 programs extracted from Sage Intacct, Nexonia, and SharePoint",
          "Assisted development and review of program and contract budgets, reporting financial data such as profit and loss statements",
          "Managed contract renewal dates and provided financial compliance with government agencies",
        ],
      },
    ],
  },
  {
    company: "Capitol Mazda",
    logo: "/logos/mazda-logo.png",
    roles: [
      {
        title: "Online Product Specialist",
        period: "Jul 2019 - Jul 2020",
        points: [
          "Generated over $3.6M in total automotive sales with over 180 successfully closed deals",
          "Outperformed monthly goals of 12 units with customer service survey score above 95%",
        ],
      },
    ],
  },
]

// Education data
const education = [
  {
    institution: "Cloud Engineering Academy",
    logo: "/logos/cloud-logo.png",
    roles: [
      {
        title: "Cloud Engineering Program",
        period: "Nov 2024 - Present",
        points: [
          "Building production-ready AWS infrastructure using CDK, CloudFormation, and Terraform",
          "Hands-on projects: IAM security, VPC architecture, serverless applications, CI/CD pipelines",
          "AWS Certified Cloud Practitioner (May 2025)",
        ],
      },
    ],
  },
  {
    institution: "San Jose State University",
    logo: "/logos/sjsu-logo.png",
    roles: [
      {
        title: "B.S. in Finance",
        period: "Aug 2018 - Dec 2021",
        points: [
          "Foundation in financial analysis and business operations",
          "Skills in data analysis, reporting, and stakeholder communication",
        ],
      },
    ],
  },
]

// Projects data
const projects = [
  {
    title: "IAM Security Implementation",
    description: "Comprehensive IAM security solution using CloudFormation, Terraform, and AWS CDK (Python)—established role-based access control for 4 teams with MFA enforcement and least-privilege policies.",
    images: ["/projects/finish-design.png"],
    tags: ["IAM", "CloudFormation", "Terraform", "CDK", "Python"],
    links: [
      { label: "Source", url: "https://github.com/elnala24/aws-iam-security-project", icon: "github" },
    ],
  },
  {
    title: "Healthcare Infrastructure Migration",
    description: "Migrated manual AWS infrastructure to IaC using AWS CDK with TypeScript—designed secure multi-tier VPC with public/private subnet isolation across 2 AZs, deployed EC2 and Multi-AZ RDS.",
    images: ["/projects/techhealth-architecture.png"],
    tags: ["CDK", "TypeScript", "VPC", "EC2", "RDS"],
    links: [
      { label: "Source", url: "https://github.com/elnala24/project2-techhealth-cdk", icon: "github" },
    ],
  },
  {
    title: "Portfolio Site with CI/CD",
    description: "Built and deployed a Next.js portfolio on AWS Amplify with CI/CD—configured automated deployments from GitHub using AWS CDK and stored credentials securely in AWS Secrets Manager.",
    images: ["/projects/amplify-1.png"],
    tags: ["Amplify", "CDK", "Next.js", "Secrets Manager"],
    links: [
      { label: "Website", url: "https://main.dw4k8zj5zj0c5.amplifyapp.com", icon: "globe" },
      { label: "Source", url: "https://github.com/elnala24/portfolio-site", icon: "github" },
    ],
  },
  {
    title: "YouTube AI Title Generator",
    description: "Web app using TypeScript, YouTube Data API, and Groq AI—fetches video metadata and generates 4 AI-powered title variations with different tones.",
    images: ["/projects/ytapp.png"],
    tags: ["TypeScript", "YouTube API", "Groq AI", "REST APIs"],
    links: [
      { label: "Source", url: "https://github.com/elnala24/ytapp-project", icon: "github" },
    ],
  },
]

// Blog posts data
const popularPosts = [
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
    title: "Project: S3 Static Website with CloudFormation",
    description: "Hosting a static website on S3 using CloudFormation.",
    date: "May 2025",
    readTime: "4 min read",
    views: 137,
    tags: ["AWS", "S3", "CloudFormation"],
    url: "https://medium.com/@elnala24/project-s3-static-website-with-cloudformation-2253652b7405",
  }
]

function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useState(() => {
    if (!api) return
    api.on("select", onSelect)
  })

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent className="ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${title} screenshot ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                current === index ? "bg-foreground" : "bg-muted-foreground/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="text-primary">hi there. 👋</span>{" "}
            </h1>
            <p className="text-lg text-foreground mb-4">
              Cloud Engineer based in San Jose, CA 🇺🇸
            </p>
            <p className="text-foreground mb-6 leading-relaxed">
              AWS Certified Cloud Practitioner building and automating cloud infrastructure using CloudFormation, Terraform, and AWS CDK (Python / TypeScript)
            </p>
            
            <div className="flex items-center gap-4 mt-8">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                <a href="/Alan_Le_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4" />
                  Resume
                </a>
              </Button>
              <a href="https://linkedin.com/in/alantommyle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/elnala24" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:elnala24@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="relative w-48 h-48 md:w-56 md:h-56">
  <Carousel className="w-full h-full" opts={{ loop: true }}>
    <CarouselContent className="h-full ml-0">
      {["/profile.png", "/pic2.png", "/pic3.png"].map((src, index) => (
        <CarouselItem key={index} className="pl-0 h-full">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden rotate-3 ring-2 ring-border relative">
            <Image
              src={src}
              alt={`Alan Le ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</div>
        </section>

        {/* Experience Tabs */}
        <section className="mb-20">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-2 bg-secondary/50">
              <TabsTrigger value="education" className="data-[state=active]:bg-card">Education</TabsTrigger>
              <TabsTrigger value="work" className="data-[state=active]:bg-card">Work</TabsTrigger>
            </TabsList>
            
            <TabsContent value="work">
              <Card className="border-border bg-card/50">
                <CardContent className="p-6">
                  <div className="space-y-8">
                    {workExperience.map((job, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 overflow-hidden">
                          <Image src={job.logo || "/placeholder.svg"} alt={job.company} width={40} height={40} className="object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          {job.roles.map((role, roleIndex) => (
                            <div key={roleIndex} className={roleIndex > 0 ? "mt-4" : ""}>
                              <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                  <h3 className="font-semibold text-foreground">{job.company}</h3>
                                  <p className="text-sm text-muted-foreground">{role.title}</p>
                                </div>
                                <span className="text-sm text-muted-foreground whitespace-nowrap shrink-0">{role.period}</span>
                              </div>
                              <ul className="mt-3 space-y-1.5">
                                {role.points.map((point, pointIndex) => (
                                  <li key={pointIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-primary shrink-0">•</span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="education">
              <Card className="border-border bg-card/50">
                <CardContent className="p-6">
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 overflow-hidden">
                          <Image src={edu.logo || "/placeholder.svg"} alt={edu.institution} width={40} height={40} className="object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          {edu.roles.map((role, roleIndex) => (
                            <div key={roleIndex} className={roleIndex > 0 ? "mt-4" : ""}>
                              <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                  <h3 className="font-semibold text-foreground">{edu.institution}</h3>
                                  <p className="text-sm text-muted-foreground">{role.title}</p>
                                </div>
                                <span className="text-sm text-muted-foreground whitespace-nowrap shrink-0">{role.period}</span>
                              </div>
                              <ul className="mt-3 space-y-1.5">
                                {role.points.map((point, pointIndex) => (
                                  <li key={pointIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-primary shrink-0">•</span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-primary">featured projects</h2>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
              view more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-border bg-card/50 overflow-hidden flex flex-col">
                <CardContent className="p-5 flex flex-col flex-1">
                  <ProjectCarousel images={project.images} title={project.title} />
                  
                  <h3 className="font-semibold text-foreground mt-4 mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>
                  
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
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Posts */}
        <section id="posts" className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-primary">popular posts</h2>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
              view more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <Card className="border-border bg-card/50">
            <CardContent className="p-0 divide-y divide-border">
              {popularPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article key={index} className="p-5 hover:bg-muted/30 transition-colors cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{post.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">
                            +{post.tags.length - 3}
                          </span>
                        )}
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
                        {post.views} views
                      </span>
                    </div>
                  </div>
                </article>
              </a>
              ))}
            </CardContent>
          </Card>
        </section>

        <Footer />
      </main>
    </div>
  )
}
