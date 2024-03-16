// Javascript sourced from CodePen.io. "Responsive Navbar" by Ecem Gokdogan
// https://codepen.io/ecemgo/pen/mdzjEyX

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(e => {
  e.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove("active");
    e.classList.add("active");
  })
})


//The following code is written by me
const api_key = "live_sZRoFjNrqdQ8ML6ZM9sKbXbU4EkFLv4jdWlomJbgqtMDyYuGqcyJQJbJP1PmNZX0";
const breedId = "abys";


function getCat(word) {
  const url = `https://api.thecatapi.com/v1/breeds/`;
  
  fetch(url, {
      headers: {
        'x-api-key': api_key
      }
    })
    .then(res => res.json()) // parse response as JSON 
    .then(info => {
      // Process the data here
      console.log(info);
      let arr = []
      info.forEach(breed => {
        arr.push([breed.name, breed.id]); // Pushing each breed name into the breedNames array
      });
      console.log(arr)
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}

getCat()


// const breeds = [
//   { id: "abys", name: "Abyssinian" },
//   { id: "aege", name: "Aegean" },
//   { id: "abob", name: "American Bobtail" },
//   // Add more breed objects here
// ];

// const breedInput = document.getElementById('breedInput');
// breedInput.addEventListener('input', handleInput);

// function handleInput() {
//   const input = breedInput.value.toLowerCase();
//   const filteredBreeds = breeds.filter(breed => breed.name.toLowerCase().includes(input));
  
//   const breedOptions = document.getElementById('breedOptions');
//   breedOptions.innerHTML = ''; // Clear previous options
  
//   filteredBreeds.forEach(breed => {
//     const option = document.createElement('option');
//     option.value = breed.name;
//     breedOptions.appendChild(option);
//   });
// }
