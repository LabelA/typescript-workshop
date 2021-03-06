/*
 * ======================================================
 * Exercise 1
 * Adding types to variables
 *
 * https://www.typescriptlang.org/docs/handbook/basic-types.html#table-of-contents
 *
 * TO RUN TEST
 * npm run test-1
 * ======================================================*/



function test01() {

  /* 01. Basic types
   * ======================================================
   * TODO:
   * 1. Type all the variables with the the correct type (stated above the variables).
   * 2. Give the variables a correct value.
   * ======================================================*/

  // number
  let a;

  // string
  let b;

  // boolean
  let c;

  // Array of strings (Use the [] syntax)
  // https://www.typescriptlang.org/docs/handbook/basic-types.html#array
  let d;

  // Object with property 'name' and value of type string
  let e;

  // string OR number
  let f;



  /* 02. Advanced types
  * ======================================================
  * TODO:
  * - Type all the variables
  * ======================================================*/

  // Array of string OR number
  let g;

  // Function that returns void
  let h;

  // Function with a parameter id of type number
  // Returns number
  let i;



  /* 03. Type Inference (automatic type assigning)
   * ======================================================
   * TODO:
   * - Add the correct value to these variables (without types)
   * - Hover over the variable to see the automically assigned type
   * ======================================================*/

  // number
  let j;

  // string
  let k;

  // boolean
  let l;

  // Array of string
  let m;

  // Object with property 'name' and value of type string
  let n;

  // string OR number
  let o;


  /* FUN FACT
   * ======================================================
   * TypeScript is (usually) pretty smart, and knows the types of variables based on the value
   * you give it. You can hover over the variables and see what type TypeScript has infered from
   * the value you have given it.
   * ======================================================*/




  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o };
};

export default test01();
