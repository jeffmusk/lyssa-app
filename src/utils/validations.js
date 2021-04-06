export function validateEmail(email) {
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(email);
}

export function isEmpty(input) {
  if (input === "" || input.length === 0) {
    return true;
  } else {
    return false;
  }
}

export function validatePassword(input) {
  if (input.length > 5 && input.length < 10) {
    return true;
  } else {
    return false;
  }
}

export function comparePasswords(pass1, pass2) {
  if (pass1 === pass2) {
    return true;
  } else {
    return false;
  }
}
