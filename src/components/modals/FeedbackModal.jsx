import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  // DialogDescription, // Not used, can be removed
  DialogFooter,
} from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function FeedbackModal({ isOpen, onClose }) {
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(null); // 'up', 'down', or null

  if (!isOpen) {
    return null;
  }

  const handleSubmit = () => {
    console.log({
      rating,
      feedbackText,
    });
    // Reset state for next time modal opens (if it's not unmounted)
    setRating(null);
    setFeedbackText("");
    onClose(); // Close the modal
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-md">
        <DialogHeader>
          <DialogTitle>How'd I do?</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-4 my-4">
          <Button
            variant={rating === 'up' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setRating('up')}
            aria-pressed={rating === 'up'}
          >
            <ThumbsUp className="h-6 w-6" />
          </Button>
          <Button
            variant={rating === 'down' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setRating('down')}
            aria-pressed={rating === 'down'}
          >
            <ThumbsDown className="h-6 w-6" />
          </Button>
        </div>
        <textarea
          placeholder="Tell us more..."
          className="w-full p-2 border rounded-md min-h-[100px] text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
        />
        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>Submit</Button> {/* Changed type to button from submit */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
