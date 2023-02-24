const totalCategoriesEl = categories.querySelectorAll(".item").length;
console.log("Number of categories:", totalCategoriesEl);

const items = categories.querySelectorAll(".item");
// console.log(items);

items.forEach((item) => {
  let titleEl = item.firstElementChild.textContent;
  let totalEl = item.lastElementChild.children.length;

  console.log("Categories:", titleEl);
  console.log("Elements:", totalEl);
});
