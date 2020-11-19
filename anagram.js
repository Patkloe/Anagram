var s = "anagram";
var t = "nagarak";
var first = s.split("");
var second =  t.split("");
var difference = first.filter(x => second.indexOf(x) === -1);
difference;
var size = difference.length;
if( size == 0)
   {
    alert ("anagram");
   }
else
   {
    alert ("not anagram");
   }
first;
difference;
// another version
var s = "anagram";
var t = "nagarak";
var first = s.split("");
var second =  t.split("");
//var difference = first.filter(x => second.indexOf(x) === -1);
//difference;
//var size = difference.length;
var s1 = first.sort().join("");
var s2 = second.sort().join("");

if( s1 === s2)
   {
    alert ("anagram");
   }
else
   {
    alert ("not anagram");
   }
//first;
//difference;
