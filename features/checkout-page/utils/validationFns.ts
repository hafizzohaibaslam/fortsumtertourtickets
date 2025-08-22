export const validateCardNumber = (
  number: string
): { isValid: boolean; error?: string } => {
  // Remove spaces and dashes
  const cleanNumber = number.replace(/\s+/g, "").replace(/-/g, "");

  // Check if it's all digits
  if (!/^\d+$/.test(cleanNumber)) {
    return { isValid: false, error: "Card number must contain only digits" };
  }

  // Check length
  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return { isValid: false, error: "Card number must be 13-19 digits long" };
  }

  // Luhn algorithm
  let sum = 0;
  let isEven = false;

  // Loop through values starting from the rightmost side
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber.charAt(i));

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  if (sum % 10 !== 0) {
    return { isValid: false, error: "Invalid card number" };
  }

  return { isValid: true };
};

export const getCardType = (number: string): string => {
  const cleanNumber = number.replace(/\s+/g, "").replace(/-/g, "");

  // Visa
  if (/^4/.test(cleanNumber)) return "visa";
  // Mastercard
  if (/^5[1-5]/.test(cleanNumber) || /^2[2-7]/.test(cleanNumber))
    return "mastercard";
  // American Express
  if (/^3[47]/.test(cleanNumber)) return "amex";
  // Discover
  if (/^6(?:011|5)/.test(cleanNumber)) return "discover";

  return "unknown";
};

export const validateCVC = (
  cvc: string,
  cardType: string
): { isValid: boolean; error?: string } => {
  // Remove spaces
  const cleanCVC = cvc.replace(/\s+/g, "");

  // Check if it's all digits
  if (!/^\d+$/.test(cleanCVC)) {
    return { isValid: false, error: "CVC must contain only digits" };
  }

  // Check length based on card type
  const expectedLength = cardType === "amex" ? 4 : 3;

  if (cleanCVC.length !== expectedLength) {
    return {
      isValid: false,
      error: `CVC must be ${expectedLength} digits for ${cardType.toUpperCase()} cards`,
    };
  }

  return { isValid: true };
};

export const validateExpiry = (
  expiry: string
): { isValid: boolean; error?: string } => {
  // Check format MM/YY
  if (!/^\d{2}\/\d{2}$/.test(expiry)) {
    return { isValid: false, error: "Expiry must be in MM/YY format" };
  }

  const [month, year] = expiry.split("/");
  const monthNum = parseInt(month);
  const yearNum = parseInt(year);

  // Check month range
  if (monthNum < 1 || monthNum > 12) {
    return { isValid: false, error: "Month must be between 01 and 12" };
  }

  // Check if card is expired
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits
  const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11

  if (
    yearNum < currentYear ||
    (yearNum === currentYear && monthNum < currentMonth)
  ) {
    return { isValid: false, error: "Card has expired" };
  }

  return { isValid: true };
};

export const formatCardNumber = (value: string): string => {
  // Remove all non-digits
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return v;
  }
};

export const formatExpiry = (value: string): string => {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  if (v.length >= 2) {
    return v.substring(0, 2) + "/" + v.substring(2, 4);
  }
  return v;
};

// Personal Information Validation
export const validateFirstName = (firstName: string): { isValid: boolean; error?: string } => {
  if (!firstName || firstName.trim() === "") {
    return { isValid: false, error: "First name is required" };
  }
  if (firstName.trim().length < 2) {
    return { isValid: false, error: "First name must be at least 2 characters" };
  }
  if (!/^[a-zA-Z\s'-]+$/.test(firstName.trim())) {
    return { isValid: false, error: "First name can only contain letters, spaces, hyphens, and apostrophes" };
  }
  return { isValid: true };
};

export const validateLastName = (lastName: string): { isValid: boolean; error?: string } => {
  if (!lastName || lastName.trim() === "") {
    return { isValid: false, error: "Last name is required" };
  }
  if (lastName.trim().length < 2) {
    return { isValid: false, error: "Last name must be at least 2 characters" };
  }
  if (!/^[a-zA-Z\s'-]+$/.test(lastName.trim())) {
    return { isValid: false, error: "Last name can only contain letters, spaces, hyphens, and apostrophes" };
  }
  return { isValid: true };
};

export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  if (!email || email.trim() === "") {
    return { isValid: false, error: "Email is required" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { isValid: false, error: "Please enter a valid email address" };
  }
  return { isValid: true };
};

export const validatePhone = (phone: string): { isValid: boolean; error?: string } => {
  if (!phone || phone.trim() === "") {
    return { isValid: false, error: "Phone number is required" };
  }
  // Remove all non-digit characters for validation
  const cleanPhone = phone.replace(/\D/g, "");
  if (cleanPhone.length < 10) {
    return { isValid: false, error: "Phone number must be at least 10 digits" };
  }
  if (cleanPhone.length > 15) {
    return { isValid: false, error: "Phone number cannot exceed 15 digits" };
  }
  return { isValid: true };
};

// Address Validation
export const validateCountry = (country: string): { isValid: boolean; error?: string } => {
  if (!country || country.trim() === "") {
    return { isValid: false, error: "Country is required" };
  }
  return { isValid: true };
};

export const validateAddress = (address: string): { isValid: boolean; error?: string } => {
  if (!address || address.trim() === "") {
    return { isValid: false, error: "Address is required" };
  }
  if (address.trim().length < 5) {
    return { isValid: false, error: "Address must be at least 5 characters" };
  }
  return { isValid: true };
};

export const validateCity = (city: string): { isValid: boolean; error?: string } => {
  if (!city || city.trim() === "") {
    return { isValid: false, error: "City is required" };
  }
  if (city.trim().length < 2) {
    return { isValid: false, error: "City must be at least 2 characters" };
  }
  if (!/^[a-zA-Z\s'-]+$/.test(city.trim())) {
    return { isValid: false, error: "City can only contain letters, spaces, hyphens, and apostrophes" };
  }
  return { isValid: true };
};

export const validateProvince = (province: string): { isValid: boolean; error?: string } => {
  if (!province || province.trim() === "") {
    return { isValid: false, error: "Province/State is required" };
  }
  if (province.trim().length < 2) {
    return { isValid: false, error: "Province/State must be at least 2 characters" };
  }
  if (!/^[a-zA-Z\s'-]+$/.test(province.trim())) {
    return { isValid: false, error: "Province/State can only contain letters, spaces, hyphens, and apostrophes" };
  }
  return { isValid: true };
};

export const validatePostalCode = (postalCode: string): { isValid: boolean; error?: string } => {
  if (!postalCode || postalCode.trim() === "") {
    return { isValid: false, error: "Postal code is required" };
  }
  if (postalCode.trim().length < 3) {
    return { isValid: false, error: "Postal code must be at least 3 characters" };
  }
  return { isValid: true };
};

// Credit Card Validation (if needed for future use)
export const validateCreditCard = (ccNumber: string, ccExpiry: string, ccCvc: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (ccNumber) {
    const cardValidation = validateCardNumber(ccNumber);
    if (!cardValidation.isValid) {
      errors.push(cardValidation.error || "Invalid card number");
    }
  }
  
  if (ccExpiry) {
    const expiryValidation = validateExpiry(ccExpiry);
    if (!expiryValidation.isValid) {
      errors.push(expiryValidation.error || "Invalid expiry date");
    }
  }
  
  if (ccCvc) {
    const cardType = getCardType(ccNumber);
    const cvcValidation = validateCVC(ccCvc, cardType);
    if (!cvcValidation.isValid) {
      errors.push(cvcValidation.error || "Invalid CVC");
    }
  }
  
  return { isValid: errors.length === 0, errors };
};

// Complete form validation
export const validateCheckoutForm = (checkoutData: any): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  
  // Personal Information
  const firstNameValidation = validateFirstName(checkoutData?.firstName || "");
  if (!firstNameValidation.isValid) {
    errors.firstName = firstNameValidation.error || "";
  }
  
  const lastNameValidation = validateLastName(checkoutData?.lastName || "");
  if (!lastNameValidation.isValid) {
    errors.lastName = lastNameValidation.error || "";
  }
  
  const emailValidation = validateEmail(checkoutData?.email || "");
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error || "";
  }
  
  const phoneValidation = validatePhone(checkoutData?.phone || "");
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error || "";
  }
  
  // Address Information
  const countryValidation = validateCountry(checkoutData?.country || "");
  if (!countryValidation.isValid) {
    errors.country = countryValidation.error || "";
  }
  
  const addressValidation = validateAddress(checkoutData?.address || "");
  if (!addressValidation.isValid) {
    errors.address = addressValidation.error || "";
  }
  
  const cityValidation = validateCity(checkoutData?.city || "");
  if (!cityValidation.isValid) {
    errors.city = cityValidation.error || "";
  }
  
  const provinceValidation = validateProvince(checkoutData?.province || "");
  if (!provinceValidation.isValid) {
    errors.province = provinceValidation.error || "";
  }
  
  const postalCodeValidation = validatePostalCode(checkoutData?.postalCode || "");
  if (!postalCodeValidation.isValid) {
    errors.postalCode = postalCodeValidation.error || "";
  }
  
  // Credit Card Information
  const ccNumberValidation = validateCardNumber(checkoutData?.ccNumber || "");
  if (!ccNumberValidation.isValid) {
    errors.ccNumber = ccNumberValidation.error || "";
  }
  
  const ccExpiryValidation = validateExpiry(checkoutData?.ccExpiry || "");
  if (!ccExpiryValidation.isValid) {
    errors.ccExpiry = ccExpiryValidation.error || "";
  }
  
  const cardType = getCardType(checkoutData?.ccNumber || "");
  const ccCvcValidation = validateCVC(checkoutData?.ccCvc || "", cardType);
  if (!ccCvcValidation.isValid) {
    errors.ccCvc = ccCvcValidation.error || "";
  }
  
  return { isValid: Object.keys(errors).length === 0, errors };
};
