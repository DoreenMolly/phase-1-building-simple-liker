// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const some = document.querySelectorAll('.like-glyph')


function clickLike(event)

  console.log(event.target)
  mimicServerCall()
  .then((obj)=> {
    
    if(event.target.innerText === EMPTY_HEART){
      event.target.innerText = FULL_HEART
      some.event.classList.add('activated-heart')
    }else{
      event.target.innerText = EMPTY_HEART
      some.event.classList.remove('activated-heart')
    }
    
  })
  .catch(()=>{
    let error = document.querySelector('div#modal')
    setTimeout(()=>{
      error.classList.remove('.hidden')
      console.log(error)
    }, 1000)
  })
}

some.forEach(some => {
  some.addEventListener('click', clickLike)
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
