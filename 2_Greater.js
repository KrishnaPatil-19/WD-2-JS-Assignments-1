/* Q.2] Take two int values from user & print greatest among them. */
let a = prompt("Enter first value : ");
a = Number.parseInt(a);
let b = prompt("Enter second value : ");
b = Number.parseInt(b);
if (a>b)
{
    console.log("%d is greater than %d", a, b);
}
else
{
    console.log("%d is greater than %d", b, a);
}