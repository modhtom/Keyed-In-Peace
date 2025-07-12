const cardData = [
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/PD5ChZivdq4/hqdefault.jpg",
    title: "Womier WK61",
    switches: "KTT Kang Whites.",
    stabilizers: "Krytox 205g0, holee modded",
    audioSrc: "/audio/audio_keyboard_1.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/k1O4T5VYwGk/hqdefault.jpg",
    title: "Tiger80",
    switches: "KTT Kang Whites",
    case: "aluminium",
    audioSrc: "/audio/audio_keyboard_2.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/9ubd5OoYtOk/hqdefault.jpg",
    title: "Gas67",
    switches: "KTT Kang Whites",
    case: "Smokey (Semi-Translucent) Black",
    audioSrc: "/audio/audio_keyboard_3.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/kIp1vQMt2VE/hqdefault.jpg",
    title: "Akko SPR67",
    switches: "KNC Tofu Linears",
    case: "White aluminium",
    audioSrc: "/audio/audio_keyboard_4.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/76uJCfQN9rA/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT Kang Whites",
    case: "Akko MOD007v2",
    audioSrc: "/audio/audio_keyboard_5.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/ZZO1j-R_WJs/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT Kang Whites",
    case: "Akko MOD006",
    audioSrc: "/audio/audio_keyboard_6.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/gJC67c-2crE/hqdefault.jpg",
    title: "RK61",
    switches: "--",
    case: "--",
    audioSrc: "/audio/audio_keyboard_7.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/tTxIY2iTCCY/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT Kang Whites",
    case: "Leaf65",
    audioSrc: "/audio/audio_keyboard_8.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/if5ghkuhXAs/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT Roses",
    case: "Next Time 75",
    audioSrc: "/audio/audio_keyboard_9.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/KCBDClhUsjU/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT Peaches",
    case: "YMDK Melody 96",
    audioSrc: "/audio/audio_keyboard_10.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/GCdFmBZLk3U/hqdefault.jpg",
    title: "Custom Build",
    switches: "Quartz V2",
    case: "Size.L Green",
    audioSrc: "/audio/audio_keyboard_11.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/uIL97ELHJEw/hqdefault.jpg",
    title: "Custom Build",
    switches: "KTT HaloHalus",
    case: "Savage65",
    audioSrc: "/audio/audio_keyboard_12.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/ecaTtRRAlSQ/hqdefault.jpg",
    title: "Custom Build",
    switches: "--",
    case: "--",
    audioSrc: "/audio/audio_keyboard_13.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/q56nEOjZlq8/hqdefault.jpg",
    title: "Custom Build",
    switches: "--",
    case: "--",
    audioSrc: "/audio/audio_keyboard_14.mp3",
  },
  {
    category: "keyboard",
    imgSrc: "https://i.ytimg.com/vi/EfGFygmGpHo/hqdefault.jpg",
    title: "Custom Build",
    switches: "--",
    case: "--",
    audioSrc: "/audio/audio_keyboard_15.mp3",
  },
  {
    category: "other",
    imgSrc:
      "https://images.theconversation.com/files/272916/original/file-20190506-103075-yq4lnf.jpg",
    title: "Rain",
    switches: "Raindrops",
    emoji: "⛈️🌧️🌧️",
    audioSrc: "/audio/audio_Rain.mp3",
  },
  {
    category: "other",
    imgSrc: "https://i.ytimg.com/vi/qsOUv9EzKsg/maxresdefault.jpg",
    title: "Fire",
    switches: "Campfire crackling",
    case: "🔥🔥🔥",
    audioSrc: "/audio/audio_Fire.mp3",
  },
  {
    category: "other",
    imgSrc:
      "https://www.lego.com/cdn/cs/set/assets/blt07d89d3bb6115752/21336.png",
    title: "Office",
    switches: "Fun Office",
    case: "🏢🏢🏢",
    audioSrc: "/audio/audio_Office.mp3",
  },
  {
    category: "other",
    imgSrc:
      "https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "AirPlane",
    switches: "Airplane White Noise",
    case: "✈️✈️✈️",
    audioSrc: "/audio/audio_Airplane.mp3",
  },
  {
    category: "other",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1682145344450-34d8323dec84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyJTIwY29uZGl0aW9uZXJ8ZW58MHx8MHx8fDA%3D",
    title: "Air Conditioner",
    switches: "Sweet Sound of Wind",
    case: "🍃🍃🍃",
    audioSrc: (src =
      "https://cdn.pixabay.com/audio/2022/03/10/audio_b009525c9a.mp3"),
  },
  {
    category: "other",
    imgSrc:
      "https://images.unsplash.com/photo-1547083723-7c73eaf54cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG9jZWFufGVufDB8fDB8fHww",
    title: "Ocean",
    switches: "Sweet Sound of Waves",
    case: "🌊🌊🌊",
    audioSrc: "/audio/audio_Ocean.mp3",
  },
];

const scenes = [
    { name: "Rainy Day Cafe", config: { "sound-15": 0.1, "sound-2": 0.35, "sound-17": 0.75 } },
    { name: "Forest Campfire", config: { "sound-16": 0.8 } },
];
document.addEventListener("DOMContentLoaded", function () {

    const cardsContainer = document.getElementById("cards-container");
    const body = document.body;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const sources = {}; 
    let notificationSound = new Audio('https://cdn.pixabay.com/audio/2025/03/22/audio_13c95b3c9f.mp3');


    function togglePlay(soundId) {
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        const { audio } = sources[soundId];
        const btn = document.querySelector(`.play-pause-btn[data-sound-id="${soundId}"]`);
        if (audio.paused) {
            audio.play();
            btn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            btn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    function setVolume(soundId, volume) {
        if (sources[soundId]) {
            sources[soundId].gainNode.gain.value = volume;
        }
    }

    function loadCombination(config, isScene = false) {
        const combination = isScene ? config : JSON.parse(localStorage.getItem(`combination-${config}`));
        if (!combination) return;

        if (isScene) {
            Object.values(sources).forEach(({ audio }) => {
                if (!audio.paused) togglePlay(audio.id);
            });
        }

        Object.entries(combination).forEach(([id, volume]) => {
            setVolume(id, volume);
            const slider = document.querySelector(`.volume-slider[data-sound-id="${id}"]`);
            if (slider) slider.value = volume;
            if (sources[id] && sources[id].audio.paused) {
                togglePlay(id);
            }
        });
    }

    cardData.forEach((data, index) => {
        const card = document.createElement("div");
        card.className = "Card";
        card.setAttribute("data-category", data.category);
        const soundId = `sound-${index}`;

        card.innerHTML = `
            <img src="${data.imgSrc}" alt="${data.title}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/2c3e50/badee5?text=Sound';">
            <div class="Card-info">
                <h2>${data.title}</h2>
                <p>${data.description}</p>
                <div class="audio-controls">
                    <button class="play-pause-btn" data-sound-id="${soundId}" title="Play/Pause"><i class="fas fa-play"></i></button>
                    <div class="volume-control">
                        <i class="fas fa-volume-down"></i>
                        <input type="range" class="volume-slider" min="0" max="1" value="0.5" step="0.01" data-sound-id="${soundId}" title="Volume">
                    </div>
                </div>
                <audio id="${soundId}" src="${data.audioSrc}" loop crossOrigin="anonymous"></audio>
            </div>
        `;
        cardsContainer.appendChild(card);

        const audioEl = document.getElementById(soundId);
        const sourceNode = audioContext.createMediaElementSource(audioEl);
        const gainNode = audioContext.createGain();
        gainNode.gain.value = 0.5;
        sourceNode.connect(gainNode).connect(audioContext.destination);
        sources[soundId] = { audio: audioEl, gainNode: gainNode, sourceNode: sourceNode };

        card.querySelector('.play-pause-btn').addEventListener('click', () => togglePlay(soundId));
        card.querySelector('.volume-slider').addEventListener('input', (e) => setVolume(soundId, e.target.value));
    });

    setupThemeSwitcher();
    setupFocusMode();
    setupPomodoroTimer();
    setupScenes();
    setupSavedMixes();
    setupGlobalControls();
    setupKeyboardShortcuts();
    setupShortcutsModal();

    function setupThemeSwitcher() {
        const themeSwitcherBtn = document.getElementById('theme-switcher-btn');
        themeSwitcherBtn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const isLight = body.classList.contains('light-theme');
            themeSwitcherBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
        if (localStorage.getItem('theme') === 'light') {
            body.classList.add('light-theme');
            themeSwitcherBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    function setupFocusMode() {
        const focusModeBtn = document.getElementById('focus-mode-btn');
        focusModeBtn.addEventListener('click', () => {
            body.classList.toggle('focus-mode');
            const isFocused = body.classList.contains('focus-mode');
            focusModeBtn.innerHTML = isFocused ? '<i class="fas fa-expand"></i>' : '<i class="fas fa-compress"></i>';
        });
    }

    function setupPomodoroTimer() {
        const timeDisplay = document.getElementById('pomodoro-time');
        const modeDisplay = document.getElementById('pomodoro-mode');
        const startPauseBtn = document.getElementById('pomo-start-pause-btn');
        const resetBtn = document.getElementById('pomo-reset-btn');
        const settingsBtn = document.getElementById('pomo-settings-btn');
        const settingsPanel = document.getElementById('pomodoro-settings-panel');
        const applyBtn = document.getElementById('pomo-apply-settings-btn');
        const workInput = document.getElementById('pomo-work-time');
        const shortBreakInput = document.getElementById('pomo-short-break-time');
        const longBreakInput = document.getElementById('pomo-long-break-time');

        let interval;
        let state = { isRunning: false, mode: 'work' };

        const loadSettings = () => {
            const saved = JSON.parse(localStorage.getItem('pomoSettings')) || {};
            state.workTime = (saved.workTime || 25) * 60;
            state.shortBreakTime = (saved.shortBreakTime || 5) * 60;
            state.longBreakTime = (saved.longBreakTime || 15) * 60;
            workInput.value = state.workTime / 60;
            shortBreakInput.value = state.shortBreakTime / 60;
            longBreakInput.value = state.longBreakTime / 60;
            resetTimer();
        };

        const updateDisplay = () => {
            const minutes = Math.floor(state.currentTime / 60);
            const seconds = state.currentTime % 60;
            timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            document.title = `${timeDisplay.textContent} - ${state.mode} | Keyed In Peace`;
        };

        const switchMode = (newMode) => {
            state.mode = newMode;
            modeDisplay.textContent = newMode.replace(/([A-Z])/g, ' $1').trim();
            state.currentTime = state[`${newMode}Time`];
            updateDisplay();
        };

        const startPauseTimer = () => {
            state.isRunning = !state.isRunning;
            startPauseBtn.textContent = state.isRunning ? 'Pause' : 'Start';
            if (state.isRunning) {
                interval = setInterval(() => {
                    state.currentTime--;
                    if (state.currentTime < 0) {
                        clearInterval(interval);
                        notificationSound.play();
                        switchMode(state.mode === 'work' ? 'shortBreak' : 'work');
                        startPauseTimer();
                    } else {
                        updateDisplay();
                    }
                }, 1000);
            } else {
                clearInterval(interval);
                document.title = "Keyed In Peace";
            }
        };

        const resetTimer = () => {
            clearInterval(interval);
            state.isRunning = false;
            startPauseBtn.textContent = 'Start';
            switchMode('work');
        };

        startPauseBtn.addEventListener('click', startPauseTimer);
        resetBtn.addEventListener('click', resetTimer);
        settingsBtn.addEventListener('click', () => settingsPanel.classList.toggle('visible'));
        applyBtn.addEventListener('click', () => {
            localStorage.setItem('pomoSettings', JSON.stringify({
                workTime: workInput.value,
                shortBreakTime: shortBreakInput.value,
                longBreakTime: longBreakInput.value,
            }));
            settingsPanel.classList.remove('visible');
            loadSettings();
            alert('Timer settings updated!');
        });

        loadSettings();
    }

    function setupScenes() {
        const scenesList = document.getElementById('scenes-list');
        scenesList.innerHTML = '';
        scenes.forEach(scene => {
            const item = document.createElement('div');
            item.className = 'scene-item';
            item.textContent = scene.name;
            item.addEventListener('click', () => loadCombination(scene.config, true));
            scenesList.appendChild(item);
        });
    }

    function setupSavedMixes() {
        const saveBtn = document.getElementById('save-combination-btn');
        const nameInput = document.getElementById('combination-name');
        const listContainer = document.getElementById('combinations-list');

        const loadSaved = () => {
            listContainer.innerHTML = '';
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith('combination-')) {
                    const name = key.replace('combination-', '');
                    const item = document.createElement('div');
                    item.className = 'combination-item';
                    item.textContent = name;
                    item.addEventListener('click', () => loadCombination(name, false));
                    listContainer.appendChild(item);
                }
            }
        };

        saveBtn.addEventListener('click', () => {
            const name = nameInput.value.trim();
            if (!name) {
                alert("Please enter a name for your mix.");
                return;
            }
            const activeSounds = {};
            Object.entries(sources).forEach(([id, { audio, gainNode }]) => {
                if (!audio.paused) {
                    activeSounds[id] = gainNode.gain.value;
                }
            });
            if (Object.keys(activeSounds).length === 0) {
                alert("You must have at least one sound playing to save a mix.");
                return;
            }
            localStorage.setItem(`combination-${name}`, JSON.stringify(activeSounds));
            loadSaved();
            nameInput.value = '';
        });

        loadSaved();
    }

    function setupGlobalControls() {
        document.getElementById('mute-all-btn').addEventListener('click', () => {
            const isPlaying = Object.values(sources).some(({ audio }) => !audio.paused);
            Object.values(sources).forEach(({ audio }) => {
                if (isPlaying && !audio.paused) {
                    togglePlay(audio.id);
                }
            });
        });

        document.getElementById('set-timer-btn').addEventListener('click', () => {
            const minutes = parseInt(document.getElementById('sleep-timer').value, 10);
            if (minutes > 0) {
                setTimeout(() => {
                    Object.values(sources).forEach(({ audio }) => {
                        if (!audio.paused) togglePlay(audio.id);
                    });
                    alert('Sleep timer finished. Good night!');
                }, minutes * 60 * 1000);
                alert(`Sounds will stop in ${minutes} minutes.`);
            }
        });

        window.filterCards = function() {
            const category = document.getElementById("category-select").value;
            document.querySelectorAll(".Card").forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                card.style.display = (category === "all" || cardCategory === category) ? "flex" : "none";
            });
        }
    }

    function setupShortcutsModal() {
        const shortcutsBtn = document.getElementById('shortcuts-btn');
        const modal = document.getElementById('shortcuts-modal');
        const closeBtn = modal.querySelector('.modal-close-btn');

        if (!shortcutsBtn || !modal || !closeBtn) {
            console.error("Shortcuts modal elements not found!");
            return;
        }

        const openModal = () => modal.classList.add('visible');
        const closeModal = () => modal.classList.remove('visible');

        shortcutsBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    function setupKeyboardShortcuts() {
        const focusModeBtn = document.getElementById('focus-mode-btn');
        document.addEventListener('keydown', (e) => {
            if (e.target.matches('input[type="text"], input[type="number"]')) return;

            if (e.key === "Escape") {
                if (body.classList.contains('focus-mode')) {
                    body.classList.remove('focus-mode');
                    focusModeBtn.innerHTML = '<i class="fas fa-compress"></i>';
                }
                const modal = document.getElementById('shortcuts-modal');
                if(modal.classList.contains('visible')) {
                    modal.classList.remove('visible');
                }
            }

            switch(e.code) {
                case 'KeyM':
                    e.preventDefault();
                    document.getElementById('mute-all-btn').click();
                    break;
                case 'KeyP':
                    e.preventDefault();
                    document.getElementById('pomo-start-pause-btn').click();
                    break;
                case 'KeyT':
                    e.preventDefault();
                    document.getElementById('theme-switcher-btn').click();
                    break;
                case 'KeyF':
                    e.preventDefault();
                    focusModeBtn.click();
                    break;
                case 'Slash':
                    if(e.shiftKey) { // Corresponds to '?'
                        e.preventDefault();
                        document.getElementById('shortcuts-btn').click();
                    }
                    break;
            }
        });
    }
});
