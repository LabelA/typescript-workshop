function Test02() {
  /*
  * ======================================================
  * TODO:
  * - Extract the type shape to a type variable
  * - Add the type to 'solution'
  * ======================================================*/
  const company: { name: string } = { name: 'Label A' };

  type Company = {
    name: string;
  }

  let solution: Company = {name: 'Label A' };






  /*
  * ======================================================
  * Do not touch this
  * ======================================================*/
  return { company, solution };
};

export default Test02();
