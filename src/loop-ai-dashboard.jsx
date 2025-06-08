"use client"

import { useEffect, useRef, useState } from "react"
import { useAppContext } from "@/context/AppContext.jsx"
import { useIsMobile } from "@/hooks/use-mobile.jsx" // Import the hook
import { Input } from "@/components/ui/input.jsx"
import { Badge } from "@/components/ui/badge.jsx"
import { Button } from "@/components/ui/button.jsx"
import {
  ChevronDown,
  Sun,
  Moon,
  Download,
  Send,
  Sparkles,
  Menu,
  X,
  Plus,
  Grid3X3,
  ChevronRight,
  User,
  MoreVertical,
  Settings,
  LogOut,
  Bookmark,
  Bell,
  UserCircle,
  Smile,
  Paperclip,
  Mic,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx"
import { AppDownloadModal } from "./components/app-download-modal.jsx"
import { BuyLimitModal } from "./components/buy-limit-modal.jsx"
import { NeedHelpModal } from "./components/need-help-modal.jsx"

export default function Component() {
  const { isDark, toggleDarkMode, sidebarOpen, setSidebarOpen: contextSetSidebarOpen, toggleSidebar } = useAppContext()
  const isMobile = useIsMobile() // Use the hook for 768px breakpoint
  const [searchQuery, setSearchQuery] = useState("")
  const [isSmallScreen, setIsSmallScreen] = useState(false) // Keep for 640px breakpoint
  const [showChat, setShowChat] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [showBuyLimitModal, setShowBuyLimitModal] = useState(false)
  const [showNeedHelpModal, setShowNeedHelpModal] = useState(false)
  const inputRef = useRef(null)
  const inputContainerRef = useRef(null)
  const [selectedAgent, setSelectedAgent] = useState("Loop Pro")

  // Sample chat messages
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm Loop AI, your startup companion. How can I help you today?",
    },
    {
      role: "user",
      content: "I'm looking for a technical co-founder for my fintech startup.",
    },
    {
      role: "assistant",
      content:
        "Great! I can help you find a technical co-founder for your fintech startup. Could you tell me more about your specific technical needs and what stage your startup is at?",
    },
  ])

  const [prevIsMobile, setPrevIsMobile] = useState(isMobile); // To track changes in isMobile from the hook

  useEffect(() => {
    const checkSmallScreenSize = () => {
      const small = window.innerWidth < 640
      setIsSmallScreen(small)
    }

    // Handle closing sidebar when transitioning to mobile view
    if (isMobile && !prevIsMobile && sidebarOpen) {
      contextSetSidebarOpen(false);
    }
    setPrevIsMobile(isMobile); // Update previous mobile state

    checkSmallScreenSize() // Initial check for small screen
    window.addEventListener("resize", checkSmallScreenSize) // Only for small screen
    return () => {
      window.removeEventListener("resize", checkSmallScreenSize)
    }
  }, [isMobile, prevIsMobile, sidebarOpen, contextSetSidebarOpen])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const handleNewTask = () => {
    setShowChat(false)
    setMessages([
      {
        role: "assistant",
        content: "Hello! I'm Loop AI, your startup companion. How can I help you today?",
      },
    ])
    if (isMobile && sidebarOpen) {
      toggleSidebar() // Use context toggle
    }
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSendMessage = () => {
    if (!searchQuery.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: searchQuery }])

    // Simulate AI response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I'll help you with "${searchQuery}". What specific details would you like to know?`,
        },
      ])
    }, 1000)

    setSearchQuery("")
    setShowChat(true)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleDownloadApp = () => {
    setShowDownloadModal(true)
  }

  const handleBuyLimit = () => {
    setShowBuyLimitModal(true)
  }

  const handleNeedHelp = () => {
    setShowNeedHelpModal(true)
  }

  const tasks = [
    {
      title: "Warning Messages Samples",
      description: "Here are three different versions of 404 error messages for an ecommerce...",
      time: "1hr",
      isNew: true,
    },
    {
      title: "Competitive Analysis research",
      description: "A competitive analysis of restaurant delivery mobile applications reveals key insights...",
      time: "1hr",
    },
    {
      title: "User Personas Research",
      description: "User persona research is a process of creating fictional but realistic representati...",
      time: "Mon",
    },
    {
      title: "Call To Action texts",
      description: 'Here are a few examples of CTA button text 1. "Get started now"...',
      time: "17 Oct",
    },
    {
      title: "Video Script Intros",
      description: "Hi, I'm [insert name here], and I'm on my way to Prague, one of the most beautiful...",
      time: "15 Oct",
    },
  ]

  // Logo and Agent component - reused in both sidebar and header
  const LogoAndAgent = ({ compact = false }) => (
    <div className="flex items-center gap-2">
      <Grid3X3 className="w-5 h-5" />
      <span className={`text-lg font-semibold ${compact ? "hidden xs:inline" : ""}`}>Loop</span>
      {!compact && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded flex items-center gap-1 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
              {selectedAgent === "Loop Pro" ? "Agent 11" : "Agent 5"}
              <ChevronDown className="w-3 h-3" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-32">
            <DropdownMenuLabel className="text-xs">Select Agent</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setSelectedAgent("Loop Pro")}
              className="text-xs flex items-center justify-between"
            >
              <span>Loop Pro</span>
              {selectedAgent === "Loop Pro" && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSelectedAgent("Loop Mini")}
              className="text-xs flex items-center justify-between"
            >
              <span>Loop Mini</span>
              {selectedAgent === "Loop Mini" && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {compact && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
              <span className="xs:hidden">{selectedAgent === "Loop Pro" ? "A11" : "A5"}</span>
              <span className="hidden xs:inline flex items-center gap-1">
                {selectedAgent === "Loop Pro" ? "Agent 11" : "Agent 5"}
                <ChevronDown className="w-3 h-3" />
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-32">
            <DropdownMenuLabel className="text-xs">Select Agent</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setSelectedAgent("Loop Pro")}
              className="text-xs flex items-center justify-between"
            >
              <span>Loop Pro</span>
              {selectedAgent === "Loop Pro" && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSelectedAgent("Loop Mini")}
              className="text-xs flex items-center justify-between"
            >
              <span>Loop Mini</span>
              {selectedAgent === "Loop Mini" && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )

  // New Chat button component - reused in both sidebar and header
  const NewTaskButton = ({ className = "", iconOnly = false }) => (
    <Button className={`bg-blue-500 hover:bg-blue-600 text-white ${className}`} onClick={handleNewTask}>
      <Plus className={`${iconOnly ? "w-5 h-5" : "w-4 h-4 mr-2"}`} />
      {!iconOnly && "New Task"}
    </Button>
  )

  return (
    <div className="flex h-screen w-full bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleSidebar} />
      )}

      {/* Sidebar */}
      <div
        className={`
        ${isMobile ? "fixed" : "relative"}
        ${sidebarOpen ? "w-72 lg:w-80" : "w-16"}
        flex flex-col shrink-0 
        bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800
        transition-all duration-500 ease-in-out z-50 h-full
        ${isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"}
      `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-zinc-700 min-h-[60px]">
          {/* Hamburger Menu - Always Visible */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-8 w-8 flex-shrink-0 hover:bg-gray-50 dark:hover:bg-zinc-800"
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* Logo and Agent - Only when expanded */}
          {sidebarOpen && (
            <div className="flex items-center gap-2 flex-1 ml-2 overflow-hidden">
              <LogoAndAgent />
            </div>
          )}

          {/* Mobile Close Button - Only on mobile when expanded */}
          {isMobile && sidebarOpen && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar} // Use context toggle
              className="h-8 w-8 md:hidden ml-2"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* New Chat Button - Only when expanded */}
        {sidebarOpen && (
          <div className="p-3 border-b border-gray-200 dark:border-zinc-700">
            <NewTaskButton className="w-full justify-center" />
          </div>
        )}

        {/* Navigation Items - Desktop Version */}
        {sidebarOpen && !isMobile && (
          <div className="px-4 py-3 border-b border-gray-200 dark:border-zinc-700">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 h-9 px-2"
                >
                  <span>Quick Access</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                <DropdownMenuLabel className="text-xs">Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-3 text-sm py-2">
                  <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded"></div>
                  </div>
                  <span>Updates</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-3 text-sm py-2">
                  <div className="w-4 h-4 bg-gray-100 dark:bg-zinc-700 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded"></div>
                  </div>
                  <span>My Bookmarks</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-3 text-sm py-2">
                  <div className="w-4 h-4 bg-gray-100 dark:bg-zinc-700 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded"></div>
                  </div>
                  <span>My Startup Profile</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleNeedHelp} className="flex items-center gap-3 text-sm py-2">
                  <div className="w-4 h-4 bg-green-100 dark:bg-green-900/50 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded"></div>
                  </div>
                  <span>Need Help</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleNewTask} className="flex items-center gap-3 text-sm py-2">
                  <Plus className="w-4 h-4 text-blue-500" />
                  <span>New Task</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        {/* Navigation Items - Mobile Dropdown Version */}
        {sidebarOpen && isMobile && (
          <div className="px-3 py-2 border-b border-gray-200 dark:border-zinc-700">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 h-8"
                >
                  <span>Quick Access</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel className="text-xs">Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2 text-sm">
                  <Bell className="w-4 h-4 text-blue-500" />
                  <span>Updates</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 text-sm">
                  <Bookmark className="w-4 h-4 text-gray-500" />
                  <span>My Bookmarks</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 text-sm">
                  <UserCircle className="w-4 h-4 text-gray-500" />
                  <span>My Startup Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleNeedHelp} className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-green-100 dark:bg-green-900/50 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded"></div>
                  </div>
                  <span>Need Help</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleNewTask} className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>New Task</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        {/* Scrollable Task List - Only when expanded */}
        {sidebarOpen && (
          <div className="flex-1 overflow-y-auto px-4 pt-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Latest Tasks</h2>
              <button className="text-blue-600 dark:text-blue-400 text-xs hover:underline">Clear</button>
            </div>

            <div className="space-y-4">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800 p-2 rounded -mx-2"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900 dark:text-gray-100 truncate">{task.title}</p>
                        {task.isNew && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-1.5 py-0.5"
                          >
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-1">{task.description}</p>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">{task.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sidebar Footer - Responsive */}
        {sidebarOpen && (
          <div
            className={`border-t border-gray-200 dark:border-zinc-800 ${isMobile ? "p-2" : "p-4"} flex flex-col ${isMobile ? "space-y-2" : "space-y-3"}`}
          >
            <div className="w-full bg-blue-500 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "0%" }}></div>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600 dark:text-gray-400">Daily Task Limit(0/3)</span>
            </div>
            <button
              onClick={handleBuyLimit}
              className={`bg-blue-600 hover:bg-blue-700 text-white text-sm ${isMobile ? "py-1.5" : "py-2"} rounded`}
            >
              Buy Limit
            </button>

            <div className={`text-xs text-gray-500 dark:text-gray-400 ${isMobile ? "space-y-0.5" : "space-y-1"}`}>
              {!isMobile && (
                <div className="flex gap-2 flex-wrap">
                  <span className="hover:underline cursor-pointer">Privacy Policy</span>
                  <span className="hover:underline cursor-pointer">Terms of Use</span>
                  <span className="hover:underline cursor-pointer">Refund Policy</span>
                </div>
              )}
              <p className={isMobile ? "text-center" : ""}>© 2025 Ventureloop App. All rights reserved.</p>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-500 ease-in-out">
        {/* Top Header - Mobile Optimized */}
        <header className="bg-white dark:bg-black border-b border-gray-200 dark:border-zinc-800 px-3 sm:px-6 py-3 flex items-center justify-between relative z-30">
          {/* Left Side - Logo and Agent (Only when sidebar is closed) */}
          <div className="flex items-center gap-2">
            {/* Mobile Hamburger - Only on mobile */}
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-8 w-8 md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            )}

            {/* Logo and Agent - Only when sidebar is closed */}
            {!sidebarOpen && <LogoAndAgent compact={isSmallScreen} />}

            {/* New Chat Button - Only when sidebar is closed */}
            {!sidebarOpen && <NewTaskButton className="ml-2 hidden sm:flex" iconOnly={isSmallScreen} />}
          </div>

          {/* Right Side - Action Buttons (Mobile Optimized) */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle - Always visible */}
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="h-8 w-8">
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Download App - Visible on medium screens */}
            <button
              onClick={handleDownloadApp}
              className="hidden sm:flex px-3 py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-full items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span className="hidden md:inline">Download App</span>
              <span className="md:hidden">App</span>
            </button>

            {/* Login - Visible on medium screens */}
            <button className="hidden sm:flex px-3 py-1.5 text-xs border border-gray-200 dark:border-zinc-700 rounded-full hover:bg-gray-50 dark:hover:bg-zinc-800">
              Login
            </button>

            {/* Mobile Menu Dropdown - Only on small screens */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:hidden">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Loop AI</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {!sidebarOpen && (
                  <DropdownMenuItem onClick={handleNewTask} className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    <span>New Task</span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleDownloadApp} className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download App</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Moon className="w-4 h-4" />
                  <span>Get Founder Pass</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  <span>Login</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Center Content */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          {/* Welcome Screen - Only shown when no chat is active */}
          {!showChat && (
            <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-4 sm:py-8">
              <div className="text-center max-w-xl w-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-full bg-zinc-300 dark:bg-zinc-600 mb-4 sm:mb-6" />
                <p className="text-sm sm:text-base md:text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed px-4">
                  Loop AI is your smart startup companion — a powerful AI chatbot designed to connect you with the right
                  co-founders and investors. Whether you're building from scratch or scaling fast, Loop AI simplifies
                  networking.
                </p>
              </div>
            </div>
          )}

          {/* Chat UI - Only shown when chat is active */}
          {showChat && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Chat Messages - Add bottom padding for fixed input */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-32">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}>
                    <div
                      className={`max-w-[80%] sm:max-w-[70%] rounded-2xl px-4 py-3 ${
                        message.role === "user"
                          ? "bg-blue-500 text-white rounded-tr-none"
                          : "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 rounded-tl-none"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {message.role === "assistant" ? (
                          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-zinc-600 flex items-center justify-center">
                            <User className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                          </div>
                        )}
                        <span className="text-xs font-medium">{message.role === "assistant" ? "Loop AI" : "You"}</span>
                      </div>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fixed Chat Input - Positioned relative to main content area */}
          {showChat && (
            <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800 p-3 sm:p-4 z-40">
              <div className="max-w-4xl mx-auto">
                <div
                  ref={inputContainerRef}
                  onClick={focusInput}
                  className={`relative flex flex-col bg-white dark:bg-zinc-900 border ${
                    isInputFocused
                      ? "border-blue-500 dark:border-blue-500 shadow-[0_0_0_1px_rgba(59,130,246,0.5)]"
                      : "border-gray-200 dark:border-zinc-700"
                  } rounded-xl px-3 py-2 sm:py-3 transition-all duration-200 hover:border-gray-300 dark:hover:border-zinc-600 ${
                    isInputFocused ? "" : "hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-2 min-h-[40px]">
                    <Input
                      ref={inputRef}
                      type="text"
                      placeholder="Type your message..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onFocus={() => setIsInputFocused(true)}
                      onBlur={() => setIsInputFocused(false)}
                      className="flex-1 border-0 focus-visible:ring-0 px-0 py-1 bg-transparent text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                    <div className="flex items-center gap-1 sm:gap-2">
                      <button className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                        <Smile className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                        <Paperclip className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleSendMessage}
                        disabled={!searchQuery.trim()}
                        className={`p-2 rounded-full transition-colors ${
                          searchQuery.trim()
                            ? "bg-blue-500 hover:bg-blue-600 text-white"
                            : "bg-gray-200 dark:bg-zinc-700 text-gray-400 dark:text-zinc-500 cursor-not-allowed"
                        }`}
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1 pb-0.5 border-t border-transparent">
                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      Loop AI may produce inaccurate information
                    </div>
                    <button className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                      <Mic className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Fixed Welcome Input Box - Positioned relative to main content area */}
          {!showChat && (
            <div className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6 z-40">
              <div className="max-w-2xl mx-auto">
                <div
                  ref={inputContainerRef}
                  onClick={focusInput}
                  className={`relative bg-white dark:bg-zinc-800 border ${
                    isInputFocused
                      ? "border-blue-500 dark:border-blue-500 shadow-[0_0_0_1px_rgba(59,130,246,0.5)]"
                      : "border-gray-200 dark:border-zinc-700"
                  } rounded-xl p-3 sm:p-4 transition-all duration-200 hover:border-gray-300 dark:hover:border-zinc-600 ${
                    isInputFocused ? "" : "hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Ask Loop "Find a cofounder"
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      ref={inputRef}
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onFocus={() => setIsInputFocused(true)}
                      onBlur={() => setIsInputFocused(false)}
                      className="flex-1 bg-transparent border-0 px-0 py-1 focus-visible:ring-0 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                    <div className="flex items-center gap-1 sm:gap-2">
                      <button className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                        <Paperclip className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleSendMessage}
                        className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2 px-4">
                  Loop can make mistakes. Check important info. See Cookie Preferences.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* App Download Modal */}
      <AppDownloadModal isOpen={showDownloadModal} onClose={() => setShowDownloadModal(false)} />

      {/* Buy Limit Modal */}
      <BuyLimitModal isOpen={showBuyLimitModal} onClose={() => setShowBuyLimitModal(false)} />

      {/* Need Help Modal */}
      <NeedHelpModal isOpen={showNeedHelpModal} onClose={() => setShowNeedHelpModal(false)} />
    </div>
  )
}
