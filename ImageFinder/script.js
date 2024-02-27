const btn = document.querySelector('button');
const headerDiv = document.querySelector('.c2')

async function apiHandle(searchTerm){
    const apiKey = 'YOUR_API_KEY'                           // to get your api go -----   https://pixabay.com/service/about/api/
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&pretty=true`

  try {
    const response = await fetch(apiUrl)
          if(!response.ok){
              throw new Error('Something went wrong')
          }
          const data = await response.json();
          
          if(data.hits.length === 0){
              alert('Data Not Found')
          }else{
            return data.hits
            console.log(data.hits)
          }
  } catch (error) {
    console.log(error)
    throw error
  }
}




btn.addEventListener('click', () => {
    const input = document.querySelector('input');
    const inputValues = input.value

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
  });

    apiHandle(inputValues)
    .then(imagesData => renderingImages(imagesData))
    .catch(error => {
        alert(error)
    })


});




function renderingImages(ImagesData) {
  const parentDiv = document.querySelector('.c2');
  parentDiv.innerHTML = '';

  ImagesData.forEach(data => {
      const childDiv = document.createElement('div');
      childDiv.className = 'c3';

      childDiv.innerHTML += `<div class='img-controller'><img src='${data.webformatURL}' alt='${data.username}'></div>`;
      childDiv.innerHTML += `<p><span>Views: ${data.views} </span><span>Likes: ${data.likes}</span> <span>Downloads: ${data.downloads}</span></p>`;
      childDiv.innerHTML += `<p>Owner: ${data.user}</p>`;

      parentDiv.appendChild(childDiv);
  });
}

document.addEventListener('DOMContentLoaded', async function () {
  try {
    const imagesData = await apiHandle('flower'); 
    renderingImages(imagesData);
  } catch (error) {
    alert(error.message);
  }
});




