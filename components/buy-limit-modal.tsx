"use client"
import { X, Check, Zap, Star, Crown, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState } from "react"

interface BuyLimitModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BuyLimitModal({ isOpen, onClose }: BuyLimitModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: "basic",
      name: "Basic",
      tasks: 2,
      price: 99,
      icon: Zap,
      color: "blue",
      popular: false,
    },
    {
      id: "pro",
      name: "Pro",
      tasks: 5,
      price: 199,
      icon: Star,
      color: "purple",
      popular: true,
    },
    {
      id: "premium",
      name: "Premium",
      tasks: 10,
      price: 299,
      icon: Crown,
      color: "orange",
      popular: false,
    },
  ]

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handlePurchase = () => {
    if (selectedPlan) {
      console.log(`Purchasing plan: ${selectedPlan}`)
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-md sm:max-w-2xl w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xl p-0"
        hideClose
      >
        {/* Header */}
        <div className="relative p-4 sm:p-6 pb-3 sm:pb-4 text-center">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2">
            Upgrade Your Limits
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Choose your perfect plan and unlock more AI tasks
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

        {/* Perfectly Centered Pricing Cards Container */}
        <div className="px-4 sm:px-6 pb-6">
          {/* Centered Cards Wrapper */}
          <div className="flex justify-center items-center mb-6">
            <div className="flex gap-2 sm:gap-3">
              {plans.map((plan) => {
                const IconComponent = plan.icon
                const isSelected = selectedPlan === plan.id

                return (
                  <div
                    key={plan.id}
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`relative cursor-pointer rounded-lg border-2 transition-all duration-200 w-[110px] sm:w-[140px] md:w-[160px] ${
                      isSelected
                        ? "border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20 scale-[1.02]"
                        : "border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600 hover:shadow-md"
                    } ${plan.popular ? "ring-1 ring-blue-500 ring-opacity-30" : ""}`}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm">
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="p-2 sm:p-3 text-center">
                      {/* Icon */}
                      <div className="flex justify-center mb-1.5 sm:mb-2">
                        <div
                          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                            plan.color === "blue"
                              ? "bg-blue-100 dark:bg-blue-900/50"
                              : plan.color === "purple"
                                ? "bg-purple-100 dark:bg-purple-900/50"
                                : "bg-orange-100 dark:bg-orange-900/50"
                          }`}
                        >
                          <IconComponent
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              plan.color === "blue"
                                ? "text-blue-600 dark:text-blue-400"
                                : plan.color === "purple"
                                  ? "text-purple-600 dark:text-purple-400"
                                  : "text-orange-600 dark:text-orange-400"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Plan Name */}
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {plan.name}
                      </h3>

                      {/* Tasks */}
                      <div className="mb-1.5 sm:mb-2">
                        <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                          {plan.tasks}
                        </span>
                        <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 block">tasks</span>
                      </div>

                      {/* Price */}
                      <div className="mb-2 sm:mb-3">
                        <span className="text-sm sm:text-lg font-bold text-gray-900 dark:text-gray-100">
                          ₹{plan.price}
                        </span>
                      </div>

                      {/* Select Indicator */}
                      <div className="flex justify-center">
                        <div
                          className={`w-4 h-4 rounded-full border-2 transition-colors ${
                            isSelected ? "bg-blue-500 border-blue-500" : "border-gray-300 dark:border-zinc-600"
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 text-white m-0.5" />}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Purchase Section */}
          {selectedPlan && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-3 sm:p-4 mb-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
                <div className="text-center sm:text-left">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
                    {plans.find((p) => p.id === selectedPlan)?.name} Plan Selected
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Get {plans.find((p) => p.id === selectedPlan)?.tasks} AI tasks instantly
                  </p>
                </div>
                <button
                  onClick={handlePurchase}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
                  Pay ₹{plans.find((p) => p.id === selectedPlan)?.price}
                </button>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="text-center space-y-2 mb-3 sm:mb-4">
            <div className="flex items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
                <span>Instant activation</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
                <span>No expiry</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="text-center border-t border-gray-200 dark:border-zinc-700 pt-3 sm:pt-4">
            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
              Secure payment • All major payment methods accepted
            </p>
            <div className="flex justify-center items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">
              <span>UPI</span>
              <span>•</span>
              <span>Cards</span>
              <span>•</span>
              <span>Net Banking</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
