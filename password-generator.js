const generatePassword = require('generate-password');
function generateRandomPassword() {
    const passwordOptions = {
        length: 10, 
        numbers: true,
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: true,
      };
      const password = generatePassword.generate(passwordOptions);
  return password;
}
const randomPassword = generateRandomPassword();
console.log('Generated Password:', randomPassword);


