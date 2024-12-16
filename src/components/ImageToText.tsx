import { Loader2 } from 'lucide-react';
import { Dropzone } from './Dropzone';
import { ResultsDisplay } from './ResultsDisplay';
import type { FileWithPreview, OCRResult, ProcessingStatus } from './types/ocr';
import { useState } from 'react';

export function ImageToText() {
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>({ status: 'idle' });
  const [result, setResult] = useState<OCRResult | null>(null);

  const handleFileAccepted = (acceptedFile: FileWithPreview) => {
    setFile(acceptedFile);
    setStatus({ status: 'idle' });
    setResult(null);
  };

  const handleFileRejected = (error: string) => {
    setStatus({ status: 'error', message: error });
  };

  const handleProcess = async () => {
    if (!file) return;

    setStatus({ status: 'processing', progress: 0 });
    
    // Simulate processing with progress
    // In a real implementation, this would be replaced with actual API calls
    try {
      for (let i = 0; i <= 100; i += 20) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setStatus({ status: 'processing', progress: i });
      }

      // Simulate API response
      const mockResult: OCRResult = {
        text: "This is a simulated OCR result. In a real implementation, this would be replaced with actual text extracted from the image.",
        confidence: 0.95,
        processingTimeMs: 1234
      };

      setResult(mockResult);
      setStatus({ status: 'success' });
    } catch (error) {
      setStatus({ 
        status: 'error', 
        message: 'An error occurred while processing the image. Please try again.' 
      });
    }
  };

  const handleReset = () => {
    if (file?.preview) URL.revokeObjectURL(file.preview);
    setFile(null);
    setStatus({ status: 'idle' });
    setResult(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Image to Text Converter</h1>
        <p className="mt-2 text-gray-600">
          Upload an image and we'll extract the text content using advanced OCR technology
        </p>
      </div>

      <div className="space-y-6">
        <Dropzone
          onFileAccepted={handleFileAccepted}
          onFileRejected={handleFileRejected}
          disabled={status.status === 'processing'}
        />

        {status.status === 'error' && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md" role="alert">
            {status.message}
          </div>
        )}

        {file && (
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <img
                src={file.preview}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            </div>

            {status.status !== 'processing' && !result && (
              <button
                onClick={handleProcess}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Process image"
              >
                Process Image
              </button>
            )}

            {status.status === 'processing' && (
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Processing image...</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${status.progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {result && <ResultsDisplay result={result} onReset={handleReset} />}
      </div>
    </div>
  );
}