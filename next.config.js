/**
 * This is a wrapper configuration that delegates to the actual Next.js project
 * in the mentalhealthwithsonakshi subfolder. This allows Vercel to properly
 * detect and build the project from the root directory.
 */
module.exports = require('./mentalhealthwithsonakshi/next.config.ts');
