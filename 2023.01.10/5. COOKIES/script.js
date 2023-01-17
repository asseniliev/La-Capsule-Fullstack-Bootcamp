const cookies = document.querySelectorAll('img');

function setCookieImage(cookie){
  let cookieImage = '';
  console.log(cookie.src.indexOf('cookie-1'));
  if(cookie.src.indexOf('cookie-1') !== -1)
    cookieImage = 'https://static.lacapsule.academy/practice/cookies/cookie-2.jpg';
  else{
    cookieImage = '';
    cookie.alt = ''
  }
    

  cookie.src = cookieImage;
}

function printClick(element){
  console.log(element);
}

for(const cookie of cookies){
  cookie.addEventListener('click', function() {setCookieImage(this)});
}

