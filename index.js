

// Fetch and insert helloWorldBanner HTML content
fetch('banners/banner_name/banner_name.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('banner_name').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading banner:', error);
  });