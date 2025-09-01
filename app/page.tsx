"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Users, Shield, Zap, Vote, Server, Play, MessageCircle } from "lucide-react"

export default function HomePage() {
  const [copied, setCopied] = useState(false)
  const serverIP = "play.sinsoft.net:25586"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverIP)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const features = [
    {
      icon: Shield,
      title: "No Pay-to-Win",
      description: "Fair gameplay for everyone. No premium ranks or shops that give unfair advantages.",
      color: "from-red-600 to-red-800",
    },
    {
      icon: Zap,
      title: "No Land Claims",
      description: "Pure survival experience. Build, explore, and survive without artificial boundaries.",
      color: "from-purple-700 to-purple-900",
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Join hundreds of players in our thriving, friendly community.",
      color: "from-rose-700 to-red-900",
    },
    {
      icon: Vote,
      title: "Player-Driven Updates",
      description: "Your voice matters. Vote on new features and shape the server's future.",
      color: "from-violet-700 to-purple-800",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/minecraft-landscape-dark-mountains-pixelated.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />

        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="bg-red-600/20 text-red-400 border-red-500/30 mb-4">
              <Server className="w-3 h-3 mr-1" />
              Now Online
            </Badge>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent font-mono drop-shadow-2xl">
            EVIL SMP
          </h1>

          <p className="text-xl md:text-2xl text-red-200 mb-4 max-w-2xl mx-auto leading-relaxed">
            The ultimate survival multiplayer experience
          </p>

          <p className="text-lg text-red-300 mb-12 font-mono">
            Powered by <span className="text-red-400">Sinsoft.net</span>
          </p>

          {/* Server IP Section */}
          <div className="max-w-md mx-auto mb-12">
            <p className="text-sm text-red-400 mb-3 uppercase tracking-wide">Server IP</p>
            <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-red-800 rounded-lg p-4">
              <code className="flex-1 text-lg font-mono text-red-400 select-all">{serverIP}</code>
              <Button
                onClick={copyToClipboard}
                size="sm"
                variant="ghost"
                className="text-red-400 hover:text-red-300 hover:bg-red-600/10"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            {copied && <p className="text-sm text-red-400 mt-2">Copied to clipboard!</p>}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold px-8 py-3 text-lg shadow-lg shadow-red-900/50"
            >
              <Play className="w-5 h-5 mr-2" />
              Join Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-400 hover:bg-red-600/10 hover:text-red-300 font-semibold px-8 py-3 text-lg bg-transparent"
              onClick={() => window.open("https://discord.gg/76dwWBWTKe", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-100 mb-6">Why Choose Evil SMP?</h2>
          <p className="text-xl text-red-300 max-w-2xl mx-auto leading-relaxed">
            Experience Minecraft the way it was meant to be played
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="bg-black/50 backdrop-blur-sm border-red-900 hover:border-red-700 transition-all duration-300 group hover:shadow-lg hover:shadow-red-900/20"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-100 mb-3">{feature.title}</h3>
                  <p className="text-red-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black/30 backdrop-blur-sm border-y border-red-900">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-red-300">Server Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-red-300">Active Players</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">Weekly</div>
              <div className="text-red-300">Updates</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-red-100 mb-6">Ready to Start Your Adventure?</h2>
        <p className="text-xl text-red-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of players in the most exciting Minecraft survival experience
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-red-800 rounded-lg p-4">
            <code className="text-lg font-mono text-red-400 select-all">{serverIP}</code>
            <Button
              onClick={copyToClipboard}
              size="sm"
              variant="ghost"
              className="text-red-400 hover:text-red-300 hover:bg-red-600/10"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <Button
          size="lg"
          variant="outline"
          className="border-red-600 text-red-400 hover:bg-red-600/10 hover:text-red-300 font-semibold px-8 py-3 text-lg bg-transparent"
          onClick={() => window.open("https://discord.gg/76dwWBWTKe", "_blank")}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Join Our Discord Community
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-red-400">
            © 2024 Evil SMP. Powered by <span className="text-red-300 font-semibold">Sinsoft.net</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
