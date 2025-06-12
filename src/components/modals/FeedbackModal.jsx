import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ThumbsUp, ThumbsDown, Loader2 } from 'lucide-react'; // Added Loader2
import { cn } from '@/lib/utils.js';

export default function FeedbackModal({ isOpen, onClose }) {
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(null); // 'up', 'down', or null
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loader

  if (!isOpen) {
    return null;
  }

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log({ // This is for logging the data
        rating,
        feedbackText,
      });
      setIsSubmitting(false);
      // Placeholder for Toast Notification
      console.log("TODO: Implement Toast Notification: Feedback Taken Successfully!");
      setRating(null);
      setFeedbackText("");
      onClose(); // Close the modal
    }, 1500); // Simulate 1.5 seconds delay
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-blue-600 dark:text-blue-400">How's Loop Agent Working?</DialogTitle>
          <DialogDescription>
            Help us improve your experience by sharing your thoughts on the Loop AI Agent. Your feedback is valuable!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-4 my-4">
          <Button
            variant={rating === 'up' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setRating('up')}
            aria-pressed={rating === 'up'}
            className={cn(rating === 'up' ? 'border-green-500' : '')}
            disabled={isSubmitting} // Disable when submitting
          >
            <ThumbsUp className={cn("h-5 w-5", rating === 'up' ? "text-green-500" : "text-gray-500 dark:text-gray-400")} />
          </Button>
          <Button
            variant={rating === 'down' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setRating('down')}
            aria-pressed={rating === 'down'}
            className={cn(rating === 'down' ? 'border-red-500' : '')}
            disabled={isSubmitting} // Disable when submitting
          >
            <ThumbsDown className={cn("h-5 w-5", rating === 'down' ? "text-red-500" : "text-gray-500 dark:text-gray-400")} />
          </Button>
        </div>
        <textarea
          placeholder="What do you like or dislike? How could the agent be more helpful?"
          className="w-full p-2 border rounded-md min-h-[100px] text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          disabled={isSubmitting} // Disable when submitting
        />
        <DialogFooter>
          <Button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
