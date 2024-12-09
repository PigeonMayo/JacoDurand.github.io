

// HEADER
fetch('banners/banner_name/banner_name.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('banner_name').innerHTML = data;
 
 const script = document.createElement('script');
 script.src = 'banners/banner_name/banner_name.js';
 document.body.appendChild(script); 


})
  .catch(error => {
    console.error('Error loading banner:', error);
  });



// ABOUT
fetch('banners/banner_about/banner_about.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('banner_about').innerHTML = data;

})
  .catch(error => {
    console.error('Error loading banner:', error);
  });


// EXPERIENCE
fetch('banners/banner_experience/banner_experience.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('banner_experience').innerHTML = data;

    const script = document.createElement('script');
    script.src = 'banners/banner_experience/banner_experience.js';
    document.body.appendChild(script); 

})
  .catch(error => {
    console.error('Error loading banner:', error);
  });