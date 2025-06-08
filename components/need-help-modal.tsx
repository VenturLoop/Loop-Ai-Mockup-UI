"use client"
import { X, Mail, MessageCircle, Calendar, HelpCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface NeedHelpModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NeedHelpModal({ isOpen, onClose }: NeedHelpModalProps) {
  const handleEmailSupport = () => {
    window.open("mailto:support@loopai.app?subject=Need Help with Loop AI", "_blank")
  }

  const handleWhatsAppSupport = () => {
    window.open("https://wa.me/1234567890?text=Hi, I need help with Loop AI", "_blank")
  }

  const handleBookAppointment = () => {
    // This would typically open a calendar booking system
    console.log("Opening appointment booking...")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-sm sm:max-w-md md:max-w-lg w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xl p-0"
        hideClose
      >
        {/* Header */}
        <div className="relative p-4 sm:p-6 pb-3 sm:pb-4 text-center border-b border-gray-200 dark:border-zinc-700">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
              <HelpCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">Need Help?</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            We're here to help you succeed with Loop AI
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-3 top-3 sm:right-4 sm:top-4 h-6 w-6 sm:h-8 sm:w-8 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Illustration Section */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative">
              {/* Main Support Illustration */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-zinc-900 rounded-xl flex items-center justify-center">
                  <div className="relative">
                    {/* Support Agent Icon */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Chat Bubbles */}
              <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="absolute top-1/2 -left-4 w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md">
                <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Help Text */}
          <div className="text-center mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              How can we assist you?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Choose your preferred way to get help. Our support team is ready to help you make the most of Loop AI.
            </p>
          </div>

          {/* Support Options */}
          <div className="space-y-3 sm:space-y-4">
            {/* Email Support */}
            <button
              onClick={handleEmailSupport}
              className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-xl transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">Email Support</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Get detailed help via email • Response within 24 hours
                </p>
              </div>
              <div className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">Send →</div>
            </button>

            {/* WhatsApp Support */}
            <button
              onClick={handleWhatsAppSupport}
              className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-xl transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">WhatsApp Chat</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Quick chat support • Instant responses during business hours
                </p>
              </div>
              <div className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">Chat →</div>
            </button>

            {/* Appointment Booking */}
            <button
              onClick={handleBookAppointment}
              className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-950/50 dark:hover:to-blue-950/50 rounded-xl transition-colors group border border-purple-200 dark:border-purple-800"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">Book a Call</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Schedule a 1-on-1 session • Personalized guidance & training
                </p>
              </div>
              <div className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium">Book →</div>
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-blue-900 dark:text-blue-100">Support Hours</span>
            </div>
            <div className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <p>• Email: 24/7 (Response within 24 hours)</p>
              <p>• WhatsApp: Mon-Fri, 9 AM - 6 PM IST</p>
              <p>• Calls: Mon-Fri, 10 AM - 5 PM IST</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Need urgent help? Call us at{" "}
              <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">+91 98765 43210</button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
