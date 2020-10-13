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
