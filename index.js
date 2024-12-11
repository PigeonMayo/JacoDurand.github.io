

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

// EDUCATION
fetch('banners/banner_education/banner_education.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('banner_education').innerHTML = data;

})
  .catch(error => {
    console.error('Error loading banner:', error);
  });

// LANGUAGES
fetch('banners/banner_lang/banner_lang.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('banner_lang').innerHTML = data;

})
  .catch(error => {
    console.error('Error loading banner:', error);
  });