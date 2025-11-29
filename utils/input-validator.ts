/**
 * Validates an email address with comprehensive checks
 * @param email - The email address to validate
 * @returns Object with isValid boolean and optional error message
 */
export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  // Check if email is empty
  if (!email || email.trim() === "") {
    return { isValid: false, error: "Email is required" };
  }

  const trimmedEmail = email.trim();

  // Check length constraints
  if (trimmedEmail.length > 254) {
    return { isValid: false, error: "Email is too long (max 254 characters)" };
  }

  // RFC 5322 compliant email regex (simplified but robust)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, error: "Please enter a valid email address" };
  }

  // Split email into local and domain parts
  const [localPart, domain] = trimmedEmail.split("@");

  // Check local part length (max 64 characters)
  if (localPart.length > 64) {
    return { isValid: false, error: "Email local part is too long" };
  }

  // Check for consecutive dots
  if (trimmedEmail.includes("..")) {
    return { isValid: false, error: "Email cannot contain consecutive dots" };
  }

  // Check if starts or ends with a dot
  if (localPart.startsWith(".") || localPart.endsWith(".")) {
    return { isValid: false, error: "Email cannot start or end with a dot" };
  }

  // Check for common typos in popular domains
  const commonTypos: Record<string, string> = {
    "gmial.com": "gmail.com",
    "gmai.com": "gmail.com",
    "gmil.com": "gmail.com",
    "yahooo.com": "yahoo.com",
    "yaho.com": "yahoo.com",
    "hotmial.com": "hotmail.com",
    "outlok.com": "outlook.com",
    "outloo.com": "outlook.com",
  };

  const suggestedDomain = commonTypos[domain.toLowerCase()];
  if (suggestedDomain) {
    return {
      isValid: false,
      error: `Did you mean ${localPart}@${suggestedDomain}?`,
    };
  }

  // Check for valid TLD (at least 2 characters)
  const domainParts = domain.split(".");
  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2) {
    return { isValid: false, error: "Invalid domain extension" };
  }

  // All checks passed
  return { isValid: true };
};

/**
 * Simple email format check (less strict, for quick validation)
 * @param email - The email address to check
 * @returns boolean indicating if email format is valid
 */
export const isValidEmailFormat = (email: string): boolean => {
  const simpleRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return simpleRegex.test(email.trim());
};

/**
 * Normalizes an email address (lowercase, trim)
 * @param email - The email address to normalize
 * @returns Normalized email address
 */
export const normalizeEmail = (email: string): string => {
  return email.trim().toLowerCase();
};