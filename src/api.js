const url = "https://api.covid19api.com";

function getCasosChile() {
  console.log(`${url}/dayone/country/chile`);
  return fetch(`${url}/dayone/country/chile`)
    .then(res => res.json())
    .then(res => res)
}

export default {
  getCasosChile
};
