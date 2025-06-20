function playVideo() {
    let youtubeLink = document.getElementById('youtubeLink').value;
    let videoId = extractVideoId(youtubeLink);

    if (videoId) {
        // Replace the content of the 'player' div with an iframe
        document.getElementById('player').innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
        alert('Invalid YouTube Link');
    }
}

function extractVideoId(link) {
    // Regular expression to extract video ID from various YouTube link formats
    let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    let match = link.match(regExp);
    return (match && match[2].length == 11) ? match[2] : null;
}