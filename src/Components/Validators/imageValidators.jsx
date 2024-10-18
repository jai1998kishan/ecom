export default function imageValidators(e) {
  let { files } = e.target;
  if (files.length === 0) return "Pic Field is Mendatory";
  else if (files.length === 1) {
    // console.log(files);
    const pic = files[0];
    if (pic.size > 1048576) {
      return "Image size is more then 1 mb please upload an image less than 1 mb";
    } else if (
      pic.type === "image/jpeg" ||
      pic.type === "image/jpg" ||
      pic.type === "image/png" ||
      pic.type === "image/gif"
    ) {
      return "";
    } else return "Invalid Image. Please Upload .jpeg, .jpg, .png, .gif";
  } else {
    return "";
  }
}
