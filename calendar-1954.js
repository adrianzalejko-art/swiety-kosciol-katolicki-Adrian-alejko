/* Drobne zabezpieczenia strony głównej — autor */
document.addEventListener('DOMContentLoaded', function () {
  const authorImage = document.querySelector('.author-card img');
  const authorBio = document.querySelector('.author-card-bio');

  if (authorImage) {
    authorImage.src = 'autor-adrian-zalejko.jpg?v=20260916';
    authorImage.alt = 'Adrian Żalejko — autor strony';
    authorImage.loading = 'eager';
    authorImage.decoding = 'async';
  }

  if (authorBio) {
    authorBio.textContent =
      'Od 15. roku życia zajmuje się Pismem Świętym i teologią. Prowadzi kanały poświęcone obronie katolickiej Tradycyjnej Wiary, apologetyce i przedstawianiu nauki Kościoła w oparciu o Pismo Święte, Ojców Kościoła i Magisterium.';
  }
});
