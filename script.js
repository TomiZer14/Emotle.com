const emotes = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
    '😍', '🥰', '😘', '😗', '😋', '😛', '😜', '🤪', '😝', '🤑'
];

const emotesContainer = document.getElementById('emotes-container');
const folderIcon = document.getElementById('folder-icon');
const favoritesSection = document.getElementById('favorites-section');

function displayEmotes() {
    emotesContainer.innerHTML = '';
    emotes.forEach(emote => {
        const emoteDiv = document.createElement('div');
        emoteDiv.classList.add('emote');
        emoteDiv.textContent = emote;
        emoteDiv.addEventListener('click', () => {
            saveEmoteToFolder(emote);
        });
        emotesContainer.appendChild(emoteDiv);
    });
}

function saveEmoteToFolder(emote) {
    localStorage.setItem('favoriteEmote', emote);
    folderIcon.textContent = emote;
    addToFavorites(emote);
}

function addToFavorites(emote) {
    const favoriteEmoteDiv = document.createElement('div');
    favoriteEmoteDiv.classList.add('favorite-emote');
    favoriteEmoteDiv.textContent = emote;
    favoritesSection.appendChild(favoriteEmoteDiv);
}

displayEmotes();

