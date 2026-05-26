'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, ExternalLink, ChevronRight, Network, Zap, Cpu, BarChart3 } from 'lucide-react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center">
              <Network className="w-5 h-5 text-background font-bold" />
            </div>
            <span className="text-lg font-bold text-foreground">Port41</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-sm text-muted-foreground hover:text-foreground transition">Vision</a>
            <a href="#architecture" className="text-sm text-muted-foreground hover:text-foreground transition">Architecture</a>
            <a href="#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition">Roadmap</a>
            <a href="#github" className="text-sm text-muted-foreground hover:text-foreground transition">GitHub</a>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-background font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 network-topology">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-purple-500/50 bg-purple-500/10">
              <span className="text-sm font-medium text-purple-300">Building the Future of Network Operations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-purple-100 to-cyan-200 bg-clip-text text-transparent">
              Port41 Agent
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Autonomous AI for <span className="text-cyan-300">Network Troubleshooting</span>
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              An open-source AI networking agent that investigates incidents, analyzes telemetry, detects outages, and helps engineers resolve infrastructure issues faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 active:scale-95"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a
                href="#roadmap"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-200 font-semibold hover:bg-cyan-500/20 transition-all hover:scale-105 active:scale-95"
              >
                See Roadmap
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Telemetry Panel */}
          <div className="max-w-3xl mx-auto glass-effect rounded-3xl p-8 glow-purple">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-cyan-300">AI Agent Analysis</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {"Internet is slow in Tokyo office."}
              </h3>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                <span className="text-muted-foreground">Pulling interface telemetry…</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                <span className="text-muted-foreground">Running traceroute…</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                <span className="text-muted-foreground">Detecting WAN packet loss…</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                <span className="text-muted-foreground">Correlating firewall alerts…</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-4">
                <p className="text-sm font-medium text-green-300 mb-3">Probable cause identified:</p>
                <p className="text-foreground">Upstream ISP congestion on Tokyo backbone. Recommend failover to secondary ISP.</p>
              </div>
            </div>

            {/* Live Metrics */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">4.2%</div>
                <div className="text-xs text-muted-foreground mt-1">Packet Loss</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300">245ms</div>
                <div className="text-xs text-muted-foreground mt-1">Latency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300">OK</div>
                <div className="text-xs text-muted-foreground mt-1">BGP Status</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">94%</div>
                <div className="text-xs text-muted-foreground mt-1">AI Confidence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="vision" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Intelligent Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Purpose-built for modern infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "AI-Powered Troubleshooting",
                description: "Instant root cause analysis powered by advanced language models"
              },
              {
                icon: BarChart3,
                title: "Automatic Root Cause Analysis",
                description: "Correlate multi-source telemetry to identify the real problem"
              },
              {
                icon: Network,
                title: "Multi-Vendor Device Support",
                description: "Works seamlessly with Cisco, Juniper, Arista, and more"
              },
              {
                icon: Cpu,
                title: "Telemetry Correlation",
                description: "Connect metrics, logs, and traces in real-time"
              },
              {
                icon: ExternalLink,
                title: "Incident Summarization",
                description: "Generate actionable incident reports automatically"
              },
              {
                icon: Network,
                title: "Autonomous Diagnostics",
                description: "Self-service network diagnostics at scale"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-2xl p-8 group hover:glow-cyan transition-all duration-300 hover:border-cyan-500/50"
              >
                <feature.icon className="w-10 h-10 mb-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Modern Tech Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on proven, industry-standard technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['OpenAI API', 'Prometheus', 'Grafana', 'Netmiko', 'NAPALM', 'Pinecone', 'Weaviate'].map((tech) => (
              <div
                key={tech}
                className="glass-effect rounded-full px-6 py-3 border border-purple-500/30 hover:border-cyan-500/50 hover:glow-cyan transition-all duration-300"
              >
                <span className="text-sm font-medium text-muted-foreground group-hover:text-cyan-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="relative py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              System Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elegant, scalable infrastructure
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-12 glow-purple">
            <div className="space-y-8">
              {[
                { label: 'Network Devices', desc: 'Routers / Switches / Firewalls' },
                { label: 'Collection Layer', desc: 'Telemetry Collection' },
                { label: 'AI Core', desc: 'Port41 Agent AI Core' },
                { label: 'Analysis', desc: 'Incident Analysis' },
                { label: 'Output', desc: 'Engineer Recommendations' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  {idx < 4 && (
                    <div className="ml-5 py-3">
                      <ChevronRight className="w-4 h-4 text-purple-400 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-32 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Development Roadmap
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our vision for AI-native network operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                phase: 'Phase 1',
                title: 'Network Troubleshooting Agent',
                status: 'In Development',
                color: 'purple'
              },
              {
                phase: 'Phase 2',
                title: 'AI Incident Correlation',
                status: 'Planned',
                color: 'cyan'
              },
              {
                phase: 'Phase 3',
                title: 'Autonomous Diagnostics',
                status: 'Planned',
                color: 'purple'
              },
              {
                phase: 'Phase 4',
                title: 'Safe Automated Remediation',
                status: 'Planned',
                color: 'cyan'
              }
            ].map((roadmap, idx) => (
              <div
                key={idx}
                className={`glass-effect rounded-2xl p-8 border-l-4 transition-all duration-300 ${
                  roadmap.color === 'purple'
                    ? 'border-l-purple-500 hover:glow-purple'
                    : 'border-l-cyan-500 hover:glow-cyan'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className={`text-sm font-semibold mb-1 ${roadmap.color === 'purple' ? 'text-purple-300' : 'text-cyan-300'}`}>
                      {roadmap.phase}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {roadmap.title}
                    </h3>
                  </div>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  roadmap.status === 'In Development'
                    ? 'bg-purple-500/20 text-purple-300'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {roadmap.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section id="github" className="relative py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="glass-effect rounded-3xl p-12 glow-cyan">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Built in Public
              </h2>
              <p className="text-lg text-muted-foreground">
                Open-source from day one
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Community-Driven</p>
                  <p className="text-muted-foreground">Port41 Agent is built with transparency at its core. Every decision is made in the open.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Developer-First</p>
                  <p className="text-muted-foreground">Designed by engineers, for engineers. Every feature is driven by real-world network operations needs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Transparent Development</p>
                  <p className="text-muted-foreground">Follow development, contribute ideas, and help shape the future of AI-native network operations.</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Open Source</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300 mb-2">Apache 2.0</div>
                <p className="text-sm text-muted-foreground">License</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">Active</div>
                <p className="text-sm text-muted-foreground">Development</p>
              </div>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 active:scale-95"
            >
              Explore on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center">
                  <Network className="w-4 h-4 text-background font-bold" />
                </div>
                <span className="font-bold text-foreground">Port41 Agent</span>
              </div>
              <p className="text-sm text-muted-foreground">Autonomous AI for network troubleshooting</p>
            </div>
            
            <div>
              <p className="font-semibold text-foreground mb-4">Product</p>
              <ul className="space-y-2">
                <li><a href="#vision" className="text-sm text-muted-foreground hover:text-foreground transition">Features</a></li>
                <li><a href="#architecture" className="text-sm text-muted-foreground hover:text-foreground transition">Architecture</a></li>
                <li><a href="#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-4">Community</p>
              <ul className="space-y-2">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition">GitHub</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Documentation</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Discord</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-4">Legal</p>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">License</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
              © 2024 Port41 Agent. Building the future of network operations.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
