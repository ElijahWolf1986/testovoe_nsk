export const handleValidationEmail = (mail) => {
  const regExpEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
  return regExpEmail.test(mail);
};

// export const handleValidationLink = (link) => {
//   const regExpLink =
//     /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
//   return regExpLink.test(link);
// };

export const handleValidationPassword = (pass) => {
  if (pass.length < 5 || pass.length > 25 || !pass.trim()) {
    return false;
  } else {
    return true;
  }
};

export const handleValidationStatusInputRequired = (input) => {
  if (input.length < 1 || !input.trim()) {
    return false;
  } else {
    return true;
  }
};
