function newTag(currency){
  return `
    <div class="crypto_container">
    <img src=${currency.url} alt=${currency.name} class="picto-crypto">
    <h6>${currency.name}</h6>
    <div class="divider"></div>
    <p>${currency.value}</p>
  </div>
  `;
}

const litecoin = {
  name: 'Litecoin',
  url: 'https://static.lacapsule.academy/practice/cryptomonnaies/litecoin.png',
  value: '0,2€'
}

const ripple = {
  name: 'Ripple',
  url: 'https://static.lacapsule.academy/practice/cryptomonnaies/ripple.png',
  value: '39.9€'
}

const newCurrencies = [litecoin, ripple];
const currencyContainer = document.querySelector('#main_container');

for(currency of newCurrencies){
    currencyContainer.innerHTML += newTag(currency);
}

const counter = document.querySelectorAll('.crypto_container').length;
document.querySelector('#header').innerHTML += `<h4>Vous avez ${counter} cryptomonnaies dans votre portefeuille</h4>`;
