console.log("Let's get this party started!");



async function getAGif() {
    let response = await axios.get("https://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym");
    console.log("got", response.data.data[0]);

    let $newImage = ("<img>", {
        src: response.data.data[0].images.original.url
    })
    let $testDiv = ("<div>")

    $("#gifs").append($newImage);
    $("#gifs").append($testDiv);

    return response.data.data[0];
  }

