function guess() {
  // first dice
  let ran = Math.floor(Math.random() * 5);

  if (ran === 0) {
    document.querySelector('.img1').setAttribute('src', '/images/dice1.png');
  } else if (ran === 1) {
    document.querySelector('.img1').setAttribute('src', '/images/dice2.png');
  } else if (ran === 2) {
    document.querySelector('.img1').setAttribute('src', '/images/dice3.png');
  } else if (ran === 3) {
    document.querySelector('.img1').setAttribute('src', '/images/dice4.png');
  } else if (ran === 4) {
    document.querySelector('.img1').setAttribute('src', '/images/dice5.png');
  } else {
    document.querySelector('.img1').setAttribute('src', '/images/dice6.png');
  }

  //   second dice
  let rand = Math.floor(Math.random() * 5);

  if (rand === 0) {
    document.querySelector('.img2').setAttribute('src', '/images/dice1.png');
  } else if (rand === 1) {
    document.querySelector('.img2').setAttribute('src', '/images/dice2.png');
  } else if (rand === 2) {
    document.querySelector('.img2').setAttribute('src', '/images/dice3.png');
  } else if (rand === 3) {
    document.querySelector('.img2').setAttribute('src', '/images/dice4.png');
  } else if (rand === 4) {
    document.querySelector('.img2').setAttribute('src', '/images/dice5.png');
  } else {
    document.querySelector('.img2').setAttribute('src', '/images/dice6.png');
  }

  //   winning condition
  if (ran > rand) {
    document.querySelector('h1').textContent = 'player 1 has won';
  } else if (rand > ran)
    document.querySelector('h1').textContent = 'player 2 has won';
  else document.querySelector('h1').textContent = "it's a draw";
}
