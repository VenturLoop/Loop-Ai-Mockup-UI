import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Users, LogIn, UserPlus, Download } from 'lucide-react'; // Or any other appropriate icons

const LoginModal = ({ isOpen, onClose, onOpenAppDownloadModal }) => {
  if (!isOpen) return null;

  // TODO: Implement actual Login, Create Account, and App Download functionalities
  const handleLogin = () => {
    console.log("Login action triggered");
    // onClose(); // Potentially close modal on action
  };

  const handleCreateAccount = () => {
    console.log("Create Account action triggered");
    // onClose(); // Potentially close modal on action
  };

  const handleDownloadApp = () => {
    console.log("Download App action triggered");
    if(onOpenAppDownloadModal) {
      onOpenAppDownloadModal();
    }
    onClose(); // Close this modal to open the other
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-8 bg-white dark:bg-gray-900 rounded-lg shadow-xl">
        <DialogHeader className="flex flex-col items-center text-center">
          <Users className='w-16 h-16 text-blue-500 mb-4' />
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome to VenturLoop
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400 mt-2 mb-6">
            Join our community or access your account to continue.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Button className='w-full' size="lg" onClick={handleLogin}>
            <LogIn className="mr-2 h-5 w-5" /> Login
          </Button>
          <Button variant='outline' className='w-full' size="lg" onClick={handleCreateAccount}>
            <UserPlus className="mr-2 h-5 w-5" /> Create Account
          </Button>
          <Button
            variant='ghost'
            className='w-full text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500'
            size="lg"
            onClick={handleDownloadApp}
          >
            <Download className="mr-2 h-5 w-5" /> Download VenturLoop App
          </Button>
        </div>

        <div className="mt-8 text-center">
          <Button variant="link" onClick={onClose} className="text-sm text-gray-500 dark:text-gray-400">
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
