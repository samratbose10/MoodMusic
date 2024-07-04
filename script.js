function playMusic() {
    const mood = document.getElementById('mood').value;
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    const music = {
        happy: 'ganna/khush.mp3',
        sad: 'ganna/dhuki.mp3',
        relaxed: 'ganna/relax.mp3',
        energetic: 'ganna/energywla.mp3'

    };

    if (music[mood]) {
        audioSource.src = music[mood];
        audioPlayer.load();
        audioPlayer.play();
    } else {
        audioPlayer.pause();
        audioPlayer.src = '';
    }
}

function pauseMusic() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
}

function stopMusic() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}
