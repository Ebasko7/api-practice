const PokeFetch = async () => {
    let choice = document.querySelector('input').value.toLowerCase()
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${choice}`)
        const data = await response.json()
        console.log(data)
        return data
    } catch(error){
        console.error(error)
    }
}

const displayShinyImage = (data) => {
    const shinyImageUrl = data.sprites.front_shiny
    const image = document.querySelector('img')
    image.classList.remove('hidden')
    image.src = shinyImageUrl
}

document.querySelector('button').addEventListener("click", async () => {
    const data = await PokeFetch();
    if (data) {
        displayShinyImage(data);
    }
})