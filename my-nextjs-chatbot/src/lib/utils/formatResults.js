export function formatResult(geminiRawResult) {
  if (!geminiRawResult || typeof geminiRawResult !== "string") return "";

  // Remove leading/trailing whitespace
  let formatted = geminiRawResult.trim();

  // Replace multiple blank lines with a single blank line
  formatted = formatted.replace(/\n{3,}/g, "\n\n");

  // Fix markdown headers (ensure space after #)
  formatted = formatted.replace(/^(#+)([^\s#])/gm, "$1 $2");

  // Convert unordered lists to proper markdown
  formatted = formatted.replace(/^\s*[-*]\s*/gm, "- ");

  // Remove trailing spaces from each line
  formatted = formatted.replace(/[ \t]+$/gm, "");

  return formatted;
}