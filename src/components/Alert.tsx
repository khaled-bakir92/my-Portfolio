import React, { useEffect } from 'react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
  subMessage?: string;
  isOpen: boolean;
  onClose: () => void;
}

function Alert({ type, message, subMessage, isOpen, onClose }: AlertProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Close after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`
        relative bg-white rounded-lg shadow-xl p-6 max-w-md w-full transform transition-all
        ${type === 'success' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}
      `}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-start gap-4">
          {type === 'success' ? (
            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
          ) : (
            <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          )}
          
          <div className="flex-1">
            <h3 className={`text-lg font-medium ${
              type === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {message}
            </h3>
            {subMessage && (
              <p className={`mt-1 text-sm ${
                type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}>
                {subMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;