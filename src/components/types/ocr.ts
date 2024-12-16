export interface OCRResult {
  text: string;
  confidence: number;
  processingTimeMs: number;
}

export interface FileWithPreview extends File {
  preview?: string;
}

export interface DropzoneProps {
  onFileAccepted: (file: FileWithPreview) => void;
  onFileRejected: (error: string) => void;
  disabled?: boolean;
}

export interface ProcessingStatus {
  status: 'idle' | 'processing' | 'success' | 'error';
  message?: string;
  progress?: number;
}