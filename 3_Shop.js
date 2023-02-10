/* Q.3] A shop will give discount of 10% if the total cost of purchased quantity is more than 1000. Ask user for quantity & assume per unit cost to be 100. Judge and print total cost for user. */
let value, tprice, cost=100;
let qty = prompt("Enter qty purchased");
qty = Number.parseInt(qty);
tprice = qty*cost;
if (tprice>=1000)
{
  value=tprice*0.1;
  console.log("\n Discount allowed = %d", value);
  console.log("\n Total price without discount deducted = %d", tprice);
  console.log("\n Grand Total price = %d", tprice-value);
}
else
{
  console.log("\n No Discount allowed");
  console.log("\n Total price without discount deducted = %d", tprice);
}
