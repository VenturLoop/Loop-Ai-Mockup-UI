"use client"
import { X, Mail, MessageCircle, Calendar, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button.jsx"
import { Dialog, DialogContent } from "@/components/ui/dialog.jsx"

export function NeedHelpModal({ isOpen, onClose }) {
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
        className="max-w-xs sm:max-w-sm w-[calc(100%-2rem)] mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-xl p-0"
        hideClose
      >
        {/* Header */}
        <div className="relative p-3 sm:p-4 text-center border-b border-gray-200 dark:border-zinc-700">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
              <HelpCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">Need Help?</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 sm:right-3 sm:top-3 h-6 w-6 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          {/* Compact Illustration */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-md relative">
              <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              {/* Small floating elements */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-2 h-2 text-white" />
              </div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <Mail className="w-2 h-2 text-white" />
              </div>
            </div>
          </div>

          {/* Compact Help Text */}
          <div className="text-center mb-4">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Choose how you&apos;d like to get support</p>
          </div>

          {/* Compact Support Options */}
          <div className="space-y-2 sm:space-y-3">
            {/* Email Support */}
            <button
              onClick={handleEmailSupport}
              className="w-full flex items-center gap-3 p-2.5 sm:p-3 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors group"
            >
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Email Support</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Response within 24 hours</p>
              </div>
            </button>

            {/* WhatsApp Support */}
            <button
              onClick={handleWhatsAppSupport}
              className="w-full flex items-center gap-3 p-2.5 sm:p-3 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors group"
            >
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">WhatsApp Chat</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Instant responses</p>
              </div>
            </button>

            {/* Appointment Booking */}
            <button
              onClick={handleBookAppointment}
              className="w-full flex items-center gap-3 p-2.5 sm:p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-950/50 dark:hover:to-blue-950/50 rounded-lg transition-colors group border border-purple-200 dark:border-purple-800"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Book a Call</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">1-on-1 session</p>
              </div>
            </button>
          </div>

          {/* Compact Footer */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Urgent? Call{" "}
              <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">+91 98765 43210</button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
