//Object Destructuring

// const band={ bandName:"led zepplin",
// famousSong:"stairway to heaven"}

// const bandName=band.bandName;
// const famousSong=band.famousSong;
// const var1=band.bandName;
// const var2=band.famousSong;

// console.log(bandName,famousSong);
// console.log(var1,var2);

// const {bandName,famousSong}=band;
// console.log(bandName);

const band={
    bandName:"led zepplin",
    famousSong:"stairway to heaven",
    year:1968,
    anotherFamousSong:"kashmir"
}
let {bandName, famousSong,...restProps}=band;
console.log(bandName);
console.log(restProps);
