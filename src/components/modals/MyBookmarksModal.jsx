import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { cn } from "@/lib/utils.js";

const MyBookmarksModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('founder'); // 'founder', 'investor', 'projects'

  const tabs = [
    { id: 'founder', label: 'Founder Profiles' },
    { id: 'investor', label: 'Investor Profiles' },
    { id: 'projects', label: 'Saved Projects' },
  ];

  const renderContent = () => {
    const contentBaseClass = "p-4 min-h-[60vh] max-h-[65vh] overflow-y-auto";
    // const animationClass = "animate-fadeIn"; // Defined in Tailwind config - Removed as content is now simpler

    // Placeholder for actual content.
    // In a real application, this would fetch and display data based on the activeTab.
    return (
      <div key={activeTab} className={`${contentBaseClass}`}>
        <p className="text-gray-500 dark:text-gray-400">
          Content for {tabs.find(tab => tab.id === activeTab)?.label} will be displayed here.
        </p>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-xl mx-auto sm:w-full sm:mx-0 p-0 bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <DialogHeader className="px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200 dark:border-zinc-700">
          <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            My Bookmarks
          </DialogTitle>
        </DialogHeader>

        <div className="flex border-b border-gray-200 dark:border-zinc-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 py-2 px-2 text-xs sm:py-3 sm:px-4 sm:text-sm font-medium text-center focus:outline-none transition-colors duration-150",
                activeTab === tab.id
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4 sm:p-6">
          {renderContent()}
        </div>

        {/* The Dialog component handles closing via onOpenChange, so an explicit button is often not needed,
            or can be placed inside the DialogHeader or DialogFooter if provided by the component.
            For now, removing the explicit "Close" button and its container. */}
      </DialogContent>
    </Dialog>
  );
};

export default MyBookmarksModal;
