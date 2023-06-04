document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const text = document.querySelector('input[name="text"]').value;

    // Make a POST request to the '/generate' route
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `text=${encodeURIComponent(text)}`,
    })
    .then(response => response.blob())
    .then(imageBlob => {
        // Create an <img> element with the generated meme
        const imageUrl = URL.createObjectURL(imageBlob);
        const img = document.createElement('img');
        img.src = imageUrl;
        document.querySelector('#result').appendChild(img);
    });
});
s