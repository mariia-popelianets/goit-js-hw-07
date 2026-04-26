const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log('Number of categories:', items.length);

for (const item of items) {
  const title = item.querySelector('h2').textContent;
  const count = item.querySelectorAll('li').length;

  console.log('Category:', title);
  console.log('Elements:', count);
}
