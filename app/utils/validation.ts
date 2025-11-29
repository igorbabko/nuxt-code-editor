export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const MIN_PASSWORD_LENGTH = 8

export function validateEmail(email: string): string | null {
  if (!email) {
    return 'Email is required'
  }
  if (!EMAIL_REGEX.test(email)) {
    return 'Invalid email format'
  }
  return null
}

export function validatePassword(password: string): string | null {
  if (!password) {
    return 'Password is required'
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`
  }
  return null
}

export function validatePasswordConfirmation(password: string, confirmation: string): string | null {
  if (password !== confirmation) {
    return 'Passwords do not match'
  }
  return null
}

export function validateName(name: string): string | null {
  if (!name.trim()) {
    return 'Name is required'
  }
  return null
}
