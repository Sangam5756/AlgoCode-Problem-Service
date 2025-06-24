const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require('turndown')
function sanitizeMarkdown(markdownContent) {

  // 1 convert into markdown to html
  const turndownService = new TurndownService();
  const convertedHtml = marked.parse(markdownContent);
  
  console.log("converted Html",convertedHtml);
  
  // 2 sanitize the html
  const sanitizedHtml = sanitizeHtml(convertedHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags,
  });

  console.log("sanitized Html",sanitizedHtml);

  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
  console.log("sanitized Markdown",sanitizedMarkdown);
  
  return sanitizedMarkdown;
}

// const input =`
// # Hello World
// This is a **bold** text.
// <script> alert('wohoo')</script>
// This is a [link](https://www.google.com) to google.
// `;

// sanitizeMarkdown(input);

module.exports = sanitizeMarkdown;

