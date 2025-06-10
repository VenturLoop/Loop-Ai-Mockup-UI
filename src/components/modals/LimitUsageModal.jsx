import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  // DialogDescription, // No longer needed here as it's not used
} from "@/components/ui/dialog.jsx";
// Button import is already there and will be used later
// X import is not actively used but was part of the initial scaffold, keeping for now.

const LimitUsageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const usageItems = [
    { label: "Connection Requests to Founders", used: 0, limit: 3 },
    { label: "Investor Pitching", used: 0, limit: 1 },
    { label: "Direct Message Requests to Founders", used: 0, limit: 1 },
    { label: "Saved Investors", used: 0, limit: 3 },
    { label: "Loop Agent Tasks", used: 0, limit: 3 },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-lg mx-auto sm:w-full sm:mx-0 p-0 bg-background rounded-lg shadow-xl overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b border-border">
          <DialogTitle className="text-lg sm:text-xl font-semibold text-foreground">
            Daily Usage Limits
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 space-y-4">
          {usageItems.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground">{item.label}</span>
                <span className="text-muted-foreground">{item.used} used / {item.limit} limit</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full" // Using blue-600 for now as per existing progress bar in sidebar
                  style={{ width: `${(item.used / item.limit) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 border-t border-border flex justify-end">
          <Button
            variant="default"
            size="default"
            asChild
          >
            <a
              href="https://test.venturloop.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upgrade to Founder Pass
            </a>
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default LimitUsageModal;
