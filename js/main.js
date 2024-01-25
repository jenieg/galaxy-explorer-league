//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=ThtVRbsmRdXHLgvyOY2ftUUAaMtAkc2xoWleUNI9&date=${date}`

  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)

        if (data.media_type === 'image') {
          document.querySelector('h2').innerText = `Welcome to ${data.title}`
          document.querySelector('img').src = data.hdurl
          document.querySelector('iframe').src = ''
        } else if (data.media_type === 'video') {
          document.querySelector('iframe').src = data.url
          document.querySelector('img').src = ''
        }
        
        document.querySelector('.explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

