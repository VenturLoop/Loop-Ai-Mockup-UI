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
    const contentBaseClass = "p-4 min-h-[200px] flex items-center justify-center";
    const animationClass = "animate-fadeIn"; // Defined in Tailwind config

    switch (activeTab) {
      case 'founder':
        return <div key="founder" className={`${contentBaseClass} ${animationClass}`}><p className="text-gray-500 dark:text-gray-400">List of bookmarked founder profiles.</p></div>;
      case 'investor':
        return <div key="investor" className={`${contentBaseClass} ${animationClass}`}><p className="text-gray-500 dark:text-gray-400">List of bookmarked investor profiles.</p></div>;
      case 'projects':
        return <div key="projects" className={`${contentBaseClass} ${animationClass}`}><p className="text-gray-500 dark:text-gray-400">List of saved projects.</p></div>;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl w-full p-0 bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
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

        <div className="px-4 py-3 sm:px-6 sm:py-4 border-t border-gray-200 dark:border-zinc-700 flex justify-end">
          <Button variant="outline" onClick={onClose} className="dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MyBookmarksModal;
