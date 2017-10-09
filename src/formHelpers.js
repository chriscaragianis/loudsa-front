export const valid = (msg) => {
  console.log('validate', msg);
  const { name, street, city, state, zip, email, message } = msg;
  if (!(email && name && street && city && state && zip)) return false;
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  console.log('stuff is there')
  if (!email.match(emailRegex)) return false;
  console.log('email good')
  if (!zip.match(/^[0-9]{5}$/)) return false;
  console.log('zip good');
  return true;
};

