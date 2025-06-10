import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { UploadCloud, Trash2 } from 'lucide-react'; // Removed X
import DeleteConfirmationModal from './DeleteConfirmationModal.jsx';

const MyStartupProfileModal = ({ isOpen, onClose }) => {
  const [startupName, setStartupName] = useState('');
  const [elevationPitch, setElevationPitch] = useState('');
  const [location, setLocation] = useState('');
  const [startupStage, setStartupStage] = useState('');
  const [revenueStatus, setRevenueStatus] = useState('');
  const [fundingAsk, setFundingAsk] = useState('');
  const [pitchDeckFile, setPitchDeckFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [pitchError, setPitchError] = useState('');
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  const handleElevationPitchChange = (e) => {
    const text = e.target.value;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    if (wordCount <= 120) {
      setElevationPitch(text);
      setPitchError('');
    } else {
      setPitchError('Pitch cannot exceed 120 words.');
      // Optionally, trim the text:
      // setElevationPitch(text.split(/\s+/).slice(0, 120).join(' '));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setFileError('Invalid file type. Please upload a PDF.');
        setPitchDeckFile(null);
        e.target.value = null; // Reset file input
        return;
      }
      if (file.size > 15 * 1024 * 1024) { // 15MB
        setFileError('File size exceeds 15MB.');
        setPitchDeckFile(null);
        e.target.value = null; // Reset file input
        return;
      }
      setPitchDeckFile(file);
      setFileError('');
    }
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!startupName.trim()) {
      alert("Startup Name is required."); // Replace with a better notification later
      return;
    }
    if (pitchError) {
      alert("Please fix the elevation pitch error.");
      return;
    }
    if (fileError) {
      alert("Please fix the file upload error.");
      return;
    }
    console.log("Saving data:", {
      startupName,
      elevationPitch,
      location,
      startupStage,
      revenueStatus,
      fundingAsk,
      pitchDeckFile: pitchDeckFile ? pitchDeckFile.name : null,
    });
    // onClose(); // Optionally close modal on save
  };

  const handleDelete = () => {
    setShowDeleteConfirmModal(true);
  };

  const handleConfirmDeleteAction = () => {
    // Original deletion logic (clearing form data):
    console.log("Delete action confirmed. Clearing form data.");
    setStartupName('');
    setElevationPitch('');
    setLocation('');
    setStartupStage('');
    setRevenueStatus('');
    setFundingAsk('');
    setPitchDeckFile(null);
    setFileError('');
    setPitchError('');

    // Close the confirmation modal
    setShowDeleteConfirmModal(false);

    // Optionally, close the main MyStartupProfileModal as well
    // onClose(); // Uncomment if the main modal should close after deletion
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent
          className="w-[calc(100%-2rem)] sm:w-full max-w-xl max-h-[85vh] overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-900 rounded-lg shadow-xl scrollbar-hide"
        >
        <DialogHeader className="px-4 sm:px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">My Startup Profile</DialogTitle>
          <DialogDescription className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Manage your startup's information.
          </DialogDescription>
          {/* The explicit X button is removed from here as per Dialog.jsx standard close button */}
        </DialogHeader>

        <div className="border-t border-gray-200 dark:border-gray-700"></div>

        <form onSubmit={handleSave} className="px-4 sm:px-6 pt-4 pb-6 space-y-6">
          <div>
            <label htmlFor="startupName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Startup Name
            </label>
            <Input
              id="startupName"
              name="startupName"
              type="text"
              value={startupName}
              onChange={(e) => setStartupName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              aria-label="Startup Name"
            />
          </div>

          <div>
            <label htmlFor="elevationPitch" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Elevation Pitch (upto 120 words)
            </label>
            <textarea
              id="elevationPitch"
              name="elevationPitch"
              rows="4"
              value={elevationPitch}
              onChange={handleElevationPitchChange}
              placeholder="Describe your startup in a nutshell. What problem do you solve, who is it for, and what makes you unique? (Max 120 words)"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              aria-label="Elevation Pitch"
            ></textarea>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Word count: {elevationPitch.split(/\s+/).filter(Boolean).length}/120
            </div>
            {pitchError && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{pitchError}</p>}
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Location
            </label>
            <Input
              id="location"
              name="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              aria-label="Location"
            />
          </div>

          <div>
            <label htmlFor="startupStage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Startup Stage
            </label>
            <select
              id="startupStage"
              name="startupStage"
              value={startupStage}
              onChange={(e) => setStartupStage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 py-2 px-3"
              aria-label="Startup Stage"
            >
              <option value="">Select Stage...</option>
              <option value="Idea Stage – Just an idea, not yet developed">Idea Stage – Just an idea, not yet developed</option>
              <option value="Prototype/MVP – Building or testing a minimum viable product">Prototype/MVP – Building or testing a minimum viable product</option>
              <option value="Pre-Launch – Product ready, planning launch soon">Pre-Launch – Product ready, planning launch soon</option>
              <option value="Launched – Product live, acquiring initial users">Launched – Product live, acquiring initial users</option>
              <option value="Early Traction – Some paying users or strong engagement">Early Traction – Some paying users or strong engagement</option>
              <option value="Scaling – Growing rapidly, expanding team/market">Scaling – Growing rapidly, expanding team/market</option>
              <option value="Established – Steady revenue, stable operations">Established – Steady revenue, stable operations</option>
              <option value="Pivoting – Re-evaluating model or product">Pivoting – Re-evaluating model or product</option>
              <option value="Acquired/Exited – Acquired by another company or completed exit">Acquired/Exited – Acquired by another company or completed exit</option>
              <option value="Shut Down – Previously active but now closed (for experience-sharing)">Shut Down – Previously active but now closed (for experience-sharing)</option>
            </select>
          </div>

          <div>
            <label htmlFor="revenueStatus" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Revenue Status
            </label>
            <select
              id="revenueStatus"
              name="revenueStatus"
              value={revenueStatus}
              onChange={(e) => setRevenueStatus(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 py-2 px-3"
              aria-label="Revenue Status"
            >
              <option value="">Select Revenue Status...</option>
              <option value="Pre-Revenue – No revenue yet">Pre-Revenue – No revenue yet</option>
              <option value="Some Revenue – Small but consistent income">Some Revenue – Small but consistent income</option>
              <option value="Revenue Positive – Making regular monthly revenue">Revenue Positive – Making regular monthly revenue</option>
              <option value="Break-Even – Covering operational costs">Break-Even – Covering operational costs</option>
              <option value="Profitable – Generating net profit">Profitable – Generating net profit</option>
              <option value="Funded, Not Monetized – Raised capital but no revenue">Funded, Not Monetized – Raised capital but no revenue</option>
              <option value="Declining Revenue – Revenue dropping due to market/product issues">Declining Revenue – Revenue dropping due to market/product issues</option>
              <option value="Acquisition Revenue – Income through strategic partnerships or acquisitions">Acquisition Revenue – Income through strategic partnerships or acquisitions</option>
              <option value="Paused Monetization – Temporarily stopped earning (due to pivot, strategy)">Paused Monetization – Temporarily stopped earning (due to pivot, strategy)</option>
            </select>
          </div>

          <div>
            <label htmlFor="fundingAsk" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Funding Ask
            </label>
            <Input
              id="fundingAsk"
              name="fundingAsk"
              type="text"
              value={fundingAsk}
              onChange={(e) => setFundingAsk(e.target.value)}
              placeholder="e.g., 50000 USD or 2500000 INR"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              aria-label="Funding Ask"
            />
          </div>

          <div>
            <label htmlFor="pitchDeckFileInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Pitch Deck (PDF, max 15MB)
            </label>
            <div
              className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-400"
              onClick={() => document.getElementById('pitchDeckFileInput')?.click()}
            >
              <div className="space-y-1 text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                  <span className="relative bg-white dark:bg-gray-900 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                    Upload a file
                  </span>
                  <Input
                    id="pitchDeckFileInput"
                    name="pitchDeckFile"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="sr-only"
                    aria-label="Pitch Deck File"
                  />
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500">PDF up to 15MB</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {pitchDeckFile ? pitchDeckFile.name : 'No file selected'}
            </div>
            {fileError && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{fileError}</p>}
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:justify-end sm:space-x-3 space-y-3 sm:space-y-0">
            <Button type="submit" className="w-full sm:w-auto">
              Save
            </Button>
            <Button type="button" variant="destructive" onClick={handleDelete} className="w-full sm:w-auto">
              <Trash2 size={16} className="mr-2" />
              Delete
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto">
              Cancel
            </Button>
          </div>
        </form>
        </DialogContent>
      </Dialog>
      <DeleteConfirmationModal
        isOpen={showDeleteConfirmModal}
        onClose={() => setShowDeleteConfirmModal(false)}
        onConfirm={handleConfirmDeleteAction}
      />
    </>
  );
};

export default MyStartupProfileModal;
