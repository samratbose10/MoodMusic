function playMusic() {
    const mood = document.getElementById('mood').value;
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    const music = {
        happy: '