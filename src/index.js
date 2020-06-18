import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// NAMING THINGS
// parameters = function parameters
// arguments = passed into the function

// Call function with named parameters and pass in destructured object
// order of params no longer matters. Code is less breakable

// object destructuring
const makePerson = ({ firstName, age, job, lastName }) => {
  return {
    name: `${firstName} ${lastName}`,
    age,
    job
  };
};

const dev = makePerson({
  firstName: "Mel",
  job: "web dev",
  lastName: "Ashby",
  age: 32
});

console.log(dev);
