let pageName = window.location.pathname
  .split('/')[2]
  .replace(/-/g, ' ')
  .replace('.html', '');

pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

document.title = pageName;
