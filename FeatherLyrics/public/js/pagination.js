const pagination = document.getElementById('pagination');
const paginationItems = pagination.children;
for (let i = 0; i < paginationItems.length; i++) {
  const item = paginationItems[i];
  item.addEventListener('click', function () {
    const activeItem = pagination.querySelector('.active');
    activeItem.classList.remove('active');
    activeItem.classList.add('deactive');
    item.classList.remove('deactive');
    item.classList.add('active');
  });
}
