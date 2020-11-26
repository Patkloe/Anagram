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

//other version 

function anagram(a1, a2) {
  var diff = [];
  if(a1.length !== a2.length){
   alert("not anagram");
  }
 else{
  for (var i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      diff.push(a1[i]);
    }
  }
  for (i = 0; i < a2.length; i++) {
    if (a1.indexOf(a2[i]) === -1) {
      diff.push(a2[i]);
    }
  }
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
anagram("papa","pape");

/*var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcomeb");
alert(n)*/

// other version
function anagram(a1,a2){
var list1 = {};
var list2 = {};
diff = [];
if(a1.length !== a2.length){
  alert("not anagram");
  return false;
}
else{
 for(var j = 0; j < a2.length; j++){  // built first dictionary
    list2[a2[j]] = a2[j];
 }
 temp2 = Object.values(list2);
 for(var i = 0; i < a1.length; i++){  // built second dictionary
     list1[a1[i]] = a1[i]; 
 }
 temp1 = Object.values(list1);   // recupere valeurs premier dictionnaire et met dans un tableau
 for(var m of temp1){
  if(temp2.indexOf(m) === -1){ // on regarde si chaque valeur du premier disctionaire est dans le deuxieme
    diff.push(m);             // si une valeur n'est pas dans le deuxieme dictionaire, on met cette valeur dans le tableau diff
  }
 }
 for(var n of temp2){
  if(temp1.indexOf(n) === -1){ // on regarde si chaque valeur du deuxieme disctionaire est dans le premier
       diff.push(n);          // si une valeur n'est pas dans le premier dictionaire, on met cette valeur dans le tableau diff
  }
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
}// fin function
anagram("napa","anpa");

// version complete
function isAnagram(a1, a2) {
  if(a1 === a2) {
    return true;
  }
  if(a1.length !== a2.length) {
    return false;
  }
  var dict = {};   // object to count character encountered
  for(let i = 0; i < a1.length; i++) {
    let index = a1.charCodeAt(i)-97; // donne a chaque charactere a key
    dict[index] = (dict[index] || 0) + 1; // quand c nouveau 0n initialise 0, on incremente + 1
    alert("premier :" + " " + dict[index]);
  } // fin for
  for(let j = 0; j < a2.length; j++) {
    let index = a2.charCodeAt(j)-97;
    if (!dict[index]) { 
      return false; 
    } // fin if
      //dict[index]++;
    dict[index]--;
    alert("deuxieme :" + " " + dict[index]);
  }// end for
  return true;
}
//isAnagram("papa","ppaa");
isAnagram("napap","nappp");

// another complete version
function isAnagram(a1, a2) {
  if(a1 === a2) {
    return true;
  }
  if(a1.length !== a2.length) {
    return false;
  }
  var dict = {};   // object to count character encountered
  for(let i = 0; i < a1.length; i++) {
      let index = a1[i];
    dict[index] = (dict[index] || 0) + 1; // quand c nouveau 0n initialise 0, on incremente + 1
    alert("premier :" + " " + dict[index]);
  } // fin for
  for(let j = 0; j < a2.length; j++) {
      let index = a2[j];
    if (!dict[index]) { 
      return false; 
    } // fin if
      //dict[index]++;
    dict[index]--;
    alert("deuxieme :" + " " + dict[index]);
  }// end for
  return true;
}
//isAnagram("papa","ppaa");
isAnagram("napap","nappa");

//let index = a2.charCodeAt(j)-97;
//let index = a1.charCodeAt(i)-97; // donne a chaque charactere a key

