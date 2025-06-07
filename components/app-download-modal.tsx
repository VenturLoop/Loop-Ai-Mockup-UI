"use client"
import { X, Download, Smartphone, Play, Copy, Check, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState } from "react"

interface AppDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AppDownloadModal({ isOpen, onClose }: AppDownloadModalProps) {
  const [copied, setCopied] = useState(false)
  const downloadLink = "https://loopai.app/download"

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(downloadLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = downloadLink
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-sm sm:max-w-md md:max-w-lg w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-lg max-h-[90vh] sm:max-h-[85vh] p-0"
        hideClose
      >
        {/* Header with Close Button */}
        <div className="relative p-4 sm:p-5 border-b border-gray-200 dark:border-zinc-700">
          <h2 className="text-lg sm:text-xl font-bold text-center text-gray-900 dark:text-gray-100 pr-8">
            Download Loop AI
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 sm:right-3 sm:top-3 h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto">
          {/* Mobile Layout - Stacked */}
          <div className="block md:hidden space-y-4">
            {/* Greeting Text */}
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Get Loop AI on your mobile device for networking on the go.
              </p>
            </div>

            {/* Phone Illustration - Smaller for Mobile */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-20 h-36 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1.2rem] p-1 shadow-lg">
                  <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[1rem] flex flex-col">
                    {/* Phone Screen Header */}
                    <div className="h-4 bg-gray-100 dark:bg-zinc-800 rounded-t-[1rem] flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-gray-300 dark:bg-zinc-600 rounded-full"></div>
                    </div>

                    {/* Phone Screen Content */}
                    <div className="flex-1 p-1.5 flex flex-col">
                      <div className="flex items-center gap-1 mb-1.5">
                        <div className="w-2 h-2 bg-blue-500 rounded"></div>
                        <div className="text-xs font-semibold text-gray-900 dark:text-gray-100">Loop</div>
                      </div>

                      <div className="space-y-1 flex-1">
                        <div className="h-1 bg-gray-200 dark:bg-zinc-700 rounded w-3/4"></div>
                        <div className="h-1 bg-gray-200 dark:bg-zinc-700 rounded w-1/2"></div>
                        <div className="h-1 bg-gray-200 dark:bg-zinc-700 rounded w-2/3"></div>
                      </div>

                      <div className="mt-auto">
                        <div className="h-4 bg-blue-500 rounded flex items-center justify-center">
                          <Smartphone className="w-2 h-2 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                <Play className="w-5 h-5 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>

              <button className="w-full flex items-center justify-center gap-2 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Direct Download</span>
              </button>

              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 p-3 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm font-medium">Copy Download Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Desktop/Tablet Layout - Side by Side */}
          <div className="hidden md:flex items-center gap-6">
            {/* Left Side - Illustration and Link Copy */}
            <div className="flex-1 flex flex-col items-center space-y-4">
              {/* Greeting Text */}
              <div className="text-center mb-2">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Take Loop AI with you everywhere! Download our mobile app for seamless startup networking on the go.
                </p>
              </div>

              {/* Phone Illustration */}
              <div className="relative">
                <div className="w-28 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1.5rem] p-1 shadow-lg">
                  <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[1.2rem] flex flex-col">
                    {/* Phone Screen Header */}
                    <div className="h-5 bg-gray-100 dark:bg-zinc-800 rounded-t-[1.2rem] flex items-center justify-center">
                      <div className="w-10 h-0.5 bg-gray-300 dark:bg-zinc-600 rounded-full"></div>
                    </div>

                    {/* Phone Screen Content */}
                    <div className="flex-1 p-2 flex flex-col">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded"></div>
                        <div className="text-xs font-semibold text-gray-900 dark:text-gray-100">Loop</div>
                        <div className="text-xs px-1 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                          Pro
                        </div>
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <div className="h-1.5 bg-gray-200 dark:bg-zinc-700 rounded w-3/4"></div>
                        <div className="h-1.5 bg-gray-200 dark:bg-zinc-700 rounded w-1/2"></div>
                        <div className="h-1.5 bg-gray-200 dark:bg-zinc-700 rounded w-2/3"></div>
                      </div>

                      <div className="mt-auto">
                        <div className="h-6 bg-blue-500 rounded-md flex items-center justify-center">
                          <Smartphone className="w-2.5 h-2.5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Copy Link Section */}
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg border border-gray-200 dark:border-zinc-700 shadow-sm w-full max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Link className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Share Download Link</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-50 dark:bg-zinc-700 rounded px-2 py-1.5 text-xs text-gray-600 dark:text-gray-400 truncate">
                    {downloadLink}
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                {copied && <p className="text-xs text-green-600 dark:text-green-400 mt-1">Link copied to clipboard!</p>}
              </div>
            </div>

            {/* Right Side - Download Options */}
            <div className="flex-1 w-full max-w-xs space-y-4">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">Get the App</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Available for Android devices</p>
              </div>

              {/* Download Buttons */}
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                  <Play className="w-5 h-5 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>

                <button className="w-full flex items-center justify-center gap-2 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Direct Download</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center justify-center gap-2 p-3 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-sm font-medium">Copy Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Features List - Only on larger screens */}
              <div className="pt-3 border-t border-gray-200 dark:border-zinc-700">
                <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Key Features:</h4>
                <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    AI-powered networking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    Offline task management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    Push notifications
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Note - Only on larger screens */}
          <div className="hidden md:block mt-4 pt-3 border-t border-gray-200 dark:border-zinc-700 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By downloading the app, you agree to our <button className="text-blue-500 hover:underline">Terms</button>{" "}
              and <button className="text-blue-500 hover:underline">Privacy Policy</button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
