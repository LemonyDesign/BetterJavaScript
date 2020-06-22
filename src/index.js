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
