const validator = require('validator');
console.log(validator.isMobilePhone('08527679347', 'id-ID'));
console.log(validator.isStrongPassword('Arpan5636at', {minSymbols: 0}));
