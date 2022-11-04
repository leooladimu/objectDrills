/***********************************************************************
Write a function called `createAddress(street)`. The createAddress function will
return a new function. This new function will allow us to specify the rest of the address.

Look below to see how this function is invoked:


const address1 = createAddress("123 Main St");       // returns a function
address1("Los Angeles, CA 90001");                   // "123 Main St Los Angeles, CA 90001"

const address2 = createAddress("2 Grimmauld Place"); // returns a function
address2("LONDON, SW1A 2AA");                        // "2 Grimmauld Place LONDON, SW1A 2AA"

const address3 = createAddress("42 Wallaby Way");    // returns a function
address3("Blaxland NSW 2774");                       // "42 Wallaby Way Blaxland NSW 2774"

***********************************************************************/

const createAddress = (street) => {
  return function(address) {
    return `${street} ${address}`
  }
}


//"should return a function that accepts a string",

  const address = createAddress("101 Broadway");

  console.log(address("New York City, NY 12345")) // "101 Broadway New York City, NY 12345"

// "should return a new function for each initial argument"

  const address1 = createAddress("1 Street St");
  const address2 = createAddress("2 Treehouse Ln");

 console.log(address1("SF, CA 94111")) // "1 Street St SF, CA 94111"
 console.log(address2("NYC, NY 10001")) // "2 Treehouse Ln NYC, NY 10001"