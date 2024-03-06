const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/;
const phoneRegex = /^\+?[\d\s()-]{8,20}$/;

module.exports = {
  emailRegex,
  passwordRegex,
  phoneRegex,
};
