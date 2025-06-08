// CSP Configuration utility
export const setupCSP = () => {
  const isDevelopment = import.meta.env.DEV;
  
  // Remove existing CSP meta tag if present
  const existingCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  if (existingCSP) {
    existingCSP.remove();
  }
  
  // Create new CSP meta tag
  const cspMeta = document.createElement('meta');
  cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
  
  if (isDevelopment) {
    // More permissive CSP for development (includes unsafe-eval for HMR)
    cspMeta.setAttribute('content', 
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.emailjs.com blob: data:; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com; " +
      "img-src 'self' data: https: blob:; " +
      "connect-src 'self' https://api.emailjs.com ws: wss: http://localhost:*; " +
      "object-src 'none'; " +
      "base-uri 'self'; " +
      "worker-src 'self' blob:;"
    );
  } else {
    // Strict CSP for production (no unsafe-eval)
    cspMeta.setAttribute('content', 
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' https://cdn.emailjs.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com; " +
      "img-src 'self' data: https:; " +
      "connect-src 'self' https://api.emailjs.com; " +
      "object-src 'none'; " +
      "base-uri 'self';"
    );
  }
  
  // Add to head
  document.head.appendChild(cspMeta);
}; 