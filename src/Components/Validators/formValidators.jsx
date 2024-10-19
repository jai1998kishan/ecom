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

    case "color":
      if (!value && value.length === 0) return name + " Field is Mendatory";
      else if (value.length < 3 || value.length > 50)
        return name + " Field Length must be within 3-50 characters";
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
