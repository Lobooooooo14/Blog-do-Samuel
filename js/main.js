const home = document.getElementById('home');
const posts = document.getElementById('posts-content');

home.addEventListener('click', () => {
  window.location.href = window.location.origin;
});

posts.childNodes.forEach((post) => {
  post.addEventListener('click', () => {
    let page = post.querySelector('.post-title').innerHTML;
    page = page.toLowerCase().replace(/\s+/g, '-');

    window.location.href = `./pages/${page}.html`;
  });
});
