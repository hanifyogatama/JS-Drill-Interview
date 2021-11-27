// Isogram adalah kata di mana tidak ada huruf alfabet yang muncul lebih dari satu kali.

function isIsogram(str) {
    if (!str) {
      return false;
    }
  
    const set = new Set(str);
    return set.size === str.length;
}

console.log(isIsogram('')); // false
console.log(isIsogram('a')); // true
console.log(isIsogram('misconjugatedly')); // true
console.log(isIsogram('misconjugatledly')); // false