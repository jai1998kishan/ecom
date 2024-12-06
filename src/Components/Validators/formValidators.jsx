import passwordValidator from "password-validator";

// Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase(1) // Must have 1 uppercase letters
  .has()
  .lowercase(1) // Must have 1 lowercase letters
  .has()
  .digits(1) // Must have at least 1 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); // Blacklist these values

export default function formValidators(e) {
  let { name, value } = e.target;

  switch (name) {
    case "name":
    case "username":
    case "color":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (value.length < 3 || value.length > 50)
        return name + " Field Length must be within 3-50 characters";
      else return "";

    case "email":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (value.length < 13 || value.length > 100)
        return name + " Field Length must be within 3-100 characters";
      else return "";

    case "phone":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (value.length !== 10) return name + " Field Length must be 10";
      else if (
        !(
          value.startsWith("6") ||
          value.startsWith("7") ||
          value.startsWith("8") ||
          value.startsWith("9")
        )
      )
        return name + " Invalid Phone Number";
      else return "";

    case "password":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (!schema.validate(value))
        return " Invalid Password! its Length must be within 8-100 characters, Must Contains atleast 1 Upper case Character, 1 lower case Character and 1 Digit and it should not contains any spaces";
      else return "";

    case "message":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (value.length < 50 || value.length > 2000)
        return name + " Field Length must be within 50-2000 characters";
      else return "";

    case "size":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (value.length > 50)
        return name + " Field Length must be less than 50 characters";
      else return "";

    case "basePrice":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (parseInt(value) < 1)
        return name + " Price must be value Greater then 0";
      else return "";

    case "discount":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (parseInt(value) < 0 || parseInt(value) > 100)
        return name + " Discount must be 0 t0 100";
      else return "";

    case "stockQuantity":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (parseInt(value) < 0)
        return name + " stock quantity must be Positive value ";
      else return "";

    default:
      return "";
  }
}
