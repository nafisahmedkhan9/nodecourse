var crypto = require('crypto-js');
var smessage = 'nafis ahmed';
var skey = '123abc';
var encryptedmessage = crypto.AES.encrypt(smessage,skey);
console.log("Encrypted-message : " +encryptedmessage);

var bytes = crypto.AES.decrypt(encryptedmessage,skey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);
console.log("Decrypted-Message : "+ decryptedMessage);