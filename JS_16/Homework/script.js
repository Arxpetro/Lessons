
const photos = [];
const content = document.querySelector(".content");

async function GetPhotos(arr, amount) {
    const photosResponse = [];
    console.log("--2");
    for (let i = 1; i <= amount; i++) {
        photosResponse.push(await fetch(`https://jsonplaceholder.typicode.com/photos/${i}`));
    }
    for (let i = 0; i < photosResponse.length; i++) {
        arr.push(await photosResponse[i].json());

        let img = document.createElement("img");
        img.src = arr[i].url;
        content.append(img);
    }
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        
        
    }
}

GetPhotos(photos, 50);

//console.log(photos);

// for (let index = 0; index < photos.length; index++) {
//     const img = document.createElement("img");
//     console.log(photos[i].url);
    
//     img.src = photos[i].url;
//     content.append(img);
    
// }















