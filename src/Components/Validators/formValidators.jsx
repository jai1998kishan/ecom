export default function formValidators(e) {
  let { name, value } = e.target;

  switch (name) {
    case "name":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (value.length < 3 || value.length > 50)
        return name + " Field Length must be within 3-50 characters";
      else return "";

    case "message":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (value.length < 50 || value.length > 2000)
        return name + " Field Length must be within 50-2000 characters";
      else return "";

    default:
      return "";
  }
}
