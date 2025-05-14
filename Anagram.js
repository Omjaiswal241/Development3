function isanagram(str1,str2)
{
    str1=str1.toLowerCase();
str1=str1.split("");
ar1=str1.sort();
ar1=ar1.join("");

str2=str2.toLowerCase();
str2=str2.split("");
ar2=str2.sort();
ar2=ar2.join("");

if(ar2==ar1)
{
    console.log(true);
}
else{
    console.log(false);
}
}
str1="Omom";
str2="momo";
isanagram(str1,str2);
    