function add(a,b)
{
    return a+b;
}
function subtract(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
function divide(a,b)
{
    return a/b;
}
function final(a,b,op)
{
    return op(a,b);
}
console.log(final(10,15,add));