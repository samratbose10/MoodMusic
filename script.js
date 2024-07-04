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

function startMusic() {
    playMusic();
    const container = document.getElementById('mainContainer');
    const floatingControls = document.getElementById('floatingControls');
    container.style.opacity = 1;
    setTimeout(() => {
        container.style.opacity = 0;
        floatingControls.style.display = 'block';
    }, 50);
}

function pauseMusic() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
}

function resumeMusic() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
}

function stopMusic() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    const container = document.getElementById('mainContainer');
    const floatingControls = document.getElementById('floatingControls');
    container.style.opacity = 1;
    floatingControls.style.display = 'none';
}

function updateBackground() {
    const mood = document.getElementById('mood').value;
    document.body.classList.remove('happy-bg', 'sad-bg', 'relaxed-bg', 'energetic-bg');
    if (mood === 'happy') {
        document.body.classList.add('happy-bg');
    } else if (mood === 'sad') {
        document.body.classList.add('sad-bg');
    } else if (mood === 'relaxed') {
        document.body.classList.add('relaxed-bg');
    } else if (mood === 'energetic') {
        document.body.classList.add('energetic-bg');
    }
}
