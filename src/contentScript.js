const watchlistButtonContainer = document.querySelector('.ipc-split-button');

if (watchlistButtonContainer) {
  const traktButton = document.createElement('button');
  traktButton.textContent = 'Trakt';
  traktButton.style.marginLeft = '10px';
  traktButton.style.display = 'flex';
  traktButton.style.alignItems = 'center';
  traktButton.className = 'ipc-split-button__btn';
  traktButton.style.backgroundColor = '#fa9195';
  traktButton.style.borderRadius = '3px';
  traktButton.style.borderRight = '0px';
  traktButton.style.maxWidth = '90px';
  traktButton.style.padding = '6px 12px';

  const traktIcon = document.createElement('img');
  traktIcon.src = browser.runtime.getURL('icons/trakt-icon.png');
  traktIcon.style.width = '24px';
  traktIcon.style.height = '24px';
  traktIcon.style.marginRight = '5px';

  traktButton.prepend(traktIcon);
  watchlistButtonContainer.appendChild(traktButton);

  const imdbUrl = window.location.href;
  const imdbIdMatch = imdbUrl.match(/\/title\/(tt\d+)\//);
  if (imdbIdMatch) {
    const imdbId = imdbIdMatch[1];

    traktButton.addEventListener('click', () => {
      const traktUrl = `https://trakt.tv/search/imdb/${imdbId}?id_type=imdb`;

      browser.runtime.sendMessage({ url: traktUrl });
    });
  }
}
