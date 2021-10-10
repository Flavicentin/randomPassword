const password = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
                  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W', 
                  'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
                  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
                  'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', 
                  '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '&', '*'];
const randomPassword = [];


for (let i = 0; i < 20; i++){
  let random = Math.floor(Math.random()*67);
  randomPassword.push(password[random]);
}

console.log('suggested password: '+randomPassword.join(''));
window.alert('suggested password: '+randomPassword.join(''));