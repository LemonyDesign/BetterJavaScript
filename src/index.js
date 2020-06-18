import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/// funciton expression
const sayHi = () => console.log("hi");
sayHi();

// array destructuring
const newArray = ["hi", "melanie", "ashby"];
// OLD const a = newArray[0]
const [a, b] = newArray;
console.log(a, b);

// object destructuring
const makePerson = (name, age, job) => {
  return {
    name,
    age,
    job
  };
};

const dev = makePerson("scott", 32, "web dev");
// OLD const name = dev.name
// destructuring - means you don't have to reassign
const { name, ...rest } = dev;
console.log(name, rest);

// console.log(makePerson({...person}))
