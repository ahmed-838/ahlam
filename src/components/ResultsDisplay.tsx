import React from 'react';
import { Copy, Check } from 'lucide-react';
import type { OCRResult } from '../types/ocr';

interface ResultsDisplayProps {
  result: OCRResult;
  onReset: () => void;
}

export function ResultsDisplay({ result, onReset }: ResultsDisplayProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Results</h3>
        <button
          onClick={onReset}
          className="text-sm text-red-600 hover:text-red-700"
          aria-label="Reset results"
        >
          Clear
        </button>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border">
        <div className="flex justify-between items-center mb-2">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">
              Confidence: {(result.confidence * 100).toFixed(1)}%
            </p>
            <p className="text-sm text-gray-500">
              Processing Time: {result.processingTimeMs}ms
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Copy text to clipboard"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <p className="whitespace-pre-wrap">{result.text}</p>
        </div>
      </div>
    </div>
  );
}