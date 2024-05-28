
async function fetchProfileData() {
const url = 'https://raw.githubusercontent.com/pedriinn11/js-developer-portfolio/portfolio/data/profile.json'
const fetching = await fetch(url)
return await fetching.json()
}