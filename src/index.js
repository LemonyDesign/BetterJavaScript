import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/// Functional programming

// Immutable vs mutable
// Use immutable - don't update variables too often
// pure function - always returns the same thing, with the same input = do one thing and do it the same each time

// PURE - self-contained, local state is x
const addTwo = x => x + 2;
console.log(addTwo(2));
console.log(addTwo(2));

// NOT PURE!!
let multi = 3; // relies on external state - no control over multi
const addThree = x => x + multi;
console.log(addThree(2));
multi = 4;
console.log(addThree(2));

// Use but don't modify external state
let multiple = 2;
const addFour = x => {
  multiple += 2;
  return x + multiple;
};

console.log(addFour(2));
console.log(addFour(2));
console.log(addFour(2));

// Functional refactor
// not so great - not testable
// subtotal correct?
// total correct?
// email sent?

const cart = [10, 5, 15];
const fakeAPICharge = total => true;
const fakeSendReceipt = total => true;

const badCheckout = cart => {
  let total = cart.reduce((tempTotal, item) => tempTotal + item);
  total = total + 10;
  const orderSuccess = fakeAPICharge(total);
  if (orderSuccess) {
    fakeSendReceipt({
      email: "fakeemail@gmail.com",
      total
    });
  }
  return orderSuccess;
};

// refactor

const SHIPPING_COST = 10;

// smaller responsibility functions
// can now test on subTotal and total by extrapolating logic away from checkout
// reusables
const getSubTotal = cart => cart.reduce((tempTotal, item) => tempTotal + item);
const getTotal = subTotal => subTotal + SHIPPING_COST;
const sendReceipt = ({ email, total }) =>
  fakeSendReceipt({
    email,
    total
  });

const checkout = cart => {
  const subTotal = getSubTotal(cart);
  console.log(subTotal);
  const total = getTotal(subTotal);
  console.log(total);
  const orderSuccess = fakeAPICharge(total);
  if (orderSuccess) {
    sendReceipt({ email: "fakeemail@gmail.com", total });
  }
  return orderSuccess;
};

console.log(checkout(cart));
