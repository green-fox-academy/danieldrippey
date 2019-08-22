export function isAnagram(inputWord1: string, inputWord2: string): boolean {
  console.log(inputWord1.split('').filter(ch => ch !== ' ').sort().join(''));
  console.log(inputWord2.split('').filter(ch => ch !== ' ').sort().join(''));
  console.log((inputWord1.split('').filter(ch => ch !== ' ').sort().join("")) === (inputWord2.split('').filter(ch => ch !== ' ').sort().join("")))
  if (inputWord1.split('').filter(ch => ch !== ' ').sort() === inputWord2.split('').filter(ch => ch !== ' ').sort())
    return true;
    else
    return false;
}
isAnagram("ninja", "ajnin     ")