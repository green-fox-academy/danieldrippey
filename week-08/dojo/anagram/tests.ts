import test=require("tape");
import { isAnagram } from './anagram';

test('compare two words', (t: any) => {
  let word1: string = 'ninja';
  let word2: string = 'coffee';
  t.equals(typeof isAnagram(word1, word2), 'boolean');
  t.end();
});

test('see the length of two words', (t: any) => {
  let word1: string = 'ninja';
  let word2: string = 'ninja';
  t.equals(isAnagram(word1, word2), true);
  t.end();
});

test('see the length of two words', (t: any) => {
  let word1: string = 'ninja';
  let word2: string = 'ninjaa';
  t.equals(isAnagram(word1, word2), false);
  t.end();
});

test('filter out word with whitespace', (t: any) => {
  let word1: string = 'ninja';
  let word2: string = 'ninja     ';
  t.equals(isAnagram(word1, word2), true);
  t.end();
});

test('filter out word with whitespace', (t: any) => {
  let word1: string = 'ninja';
  let word2: string = 'aijnn';
  t.Equal(isAnagram(word1, word2), true);
  t.end();
});