import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import type { DropzoneProps, FileWithPreview } from '../types/ocr';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export function Dropzone({ onFileAccepted, onFileRejected, disabled }: DropzoneProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;

      const file = e.dataTransfer.files[0];
      validateAndProcessFile(file);
    },
    [disabled, onFileAccepted, onFileRejected]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) validateAndProcessFile(file);
    },
    [onFileAccepted, onFileRejected]
  );

  const validateAndProcessFile = (file: File) => {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      onFileRejected('Please upload a valid image file (JPG, PNG, or WebP)');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      onFileRejected('File size must be less than 5MB');
      return;
    }

    const fileWithPreview = file as FileWithPreview;
    fileWithPreview.preview = URL.createObjectURL(file);
    onFileAccepted(fileWithPreview);
  };

  return (
    <div
      className={`relative border-2 border-dashed rounded-lg p-8 text-center ${
        disabled ? 'bg-gray-100 cursor-not-allowed' : 'hover:border-blue-500 cursor-pointer'
      }`}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      role="button"
      tabIndex={0}
      aria-label="Drop zone for image upload"
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleFileInput}
        accept={ACCEPTED_TYPES.join(',')}
        disabled={disabled}
        aria-label="File input"
      />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        Drag and drop an image here, or click to select
      </p>
      <p className="mt-1 text-xs text-gray-500">
        Supports JPG, PNG, WebP (max 5MB)
      </p>
    </div>
  );
}