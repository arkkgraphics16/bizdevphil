const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateName(value) {
  if (!value || !value.trim()) {
    return 'Please share your name.';
  }
  if (value.trim().length < 2) {
    return 'Name must be at least 2 characters.';
  }
  return '';
}

export function validateEmail(value) {
  if (!value || !value.trim()) {
    return 'Email is required.';
  }
  if (!emailPattern.test(value.trim())) {
    return 'Enter a valid email address.';
  }
  return '';
}

export function validateMessage(value) {
  if (!value || !value.trim()) {
    return 'Tell me a little about your goals.';
  }
  if (value.trim().length < 10) {
    return 'Message must be at least 10 characters.';
  }
  return '';
}

export default {
  validateName,
  validateEmail,
  validateMessage,
};
