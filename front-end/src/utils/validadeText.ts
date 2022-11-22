function validadeEmail(email: string): boolean {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function validadePassword(password: string): boolean {
  
  // (?=.*\d)          // should contain at least one digit
  // (?=.*[a-z])       // should contain at least one lower case
  // (?=.*[A-Z])       // should contain at least one upper case
  // [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters

  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return regex.test(password);
}

export { validadeEmail, validadePassword };
