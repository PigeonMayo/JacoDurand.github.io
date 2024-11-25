console.log("AAAAAHHHHHH")

// Fetch and insert helloWorldBanner HTML content
fetch('banners/banner_name/banner_name.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('banner_name').innerHTML = data;
 
    // Dynamically load the banner_name.js script
 const script = document.createElement('script');
 script.src = 'banners/banner_name/banner_name.js';
 document.body.appendChild(script); // Or append to <head> if necessary


})
  .catch(error => {
    console.error('Error loading banner:', error);
  });