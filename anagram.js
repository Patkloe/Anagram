// version 1
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
// algorithm version
function anagram (a1, a2) {
 if(a1.length !== a2.length){
      alert("not anagram");
      return false;
  }
  else {

    var a = {}, diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    //console.log("a1");
    //for(var j in a){
     //  alert(a[j]);
    //}
    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }
    for (var k in a) {
        diff.push(k);
    }
  if(diff.length === 0){
     alert("anagram");
     return true;
   }
   else{
     alert("not anagram");
     return false;
   }
  }
}

//console.log(anagram(['a', 'b'], ['b', 'a']));
//console.log(anagram("abcd", "abcde"));
console.log(anagram("bxc", "xcb"));
