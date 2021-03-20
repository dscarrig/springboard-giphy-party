console.log("Let's get this party started!");

$("#get-gif").on("click", getAGif);
$("#remove-gifs").on("click", removeAllGifs);

async function getAGif() {
    const query = document.querySelector("#search").value;
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);

    if(response.data.data.length > 0){
        const rand = Math.floor(Math.random() * response.data.data.length);
        const newGif = document.createElement("img");

        newGif.src = response.data.data[rand].images.original.url;
        $("#gifs").append(newGif);
    }
}

function removeAllGifs() {
    $("#gifs").empty();
}

