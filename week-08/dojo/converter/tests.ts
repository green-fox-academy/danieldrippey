const test=require('tape');
import { converter } from './converter';

test("basic number to string converter", (t: any) => {
    t.equal(converter(1),"1 $ (one)");
    t.end();
});

test("2 digits number to string converter", (t: any) => {
    t.equal(converter(11),"11 $ (eleven)");
    t.end();
});

test("2 digits number higher than 19 ending zero to string", (t: any) => {
    t.equal(converter(20), "20 $ (twenty)");
    t.end();
});

test("check for negative number", (t: any) => {
    t.equal(converter(-20), "You can only send positive amount, dummy!");
    t.end();
});


test("2 digits number higher than 19 ending not-zero to string", (t: any) => {
    t.equal(converter(75), "75 $ (seventy five)");
    t.end();
});

test("3 digits number modulo 100 to string", (t: any) => {
    t.equal(converter(300), "300 $ (three hundred)");
    t.end();
});
test("WTF", (t: any) => {
    t.equal(converter(412), "412 $ (four hundred and twelve)");
    t.end();
});