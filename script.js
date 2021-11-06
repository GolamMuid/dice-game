function roll() {
  let a = Math.floor(Math.random() * 6) + 1;
  let b = Math.floor(Math.random() * 6) + 1;

  let gambler1 =
    'Gambler 1 wins <img src="images/flag.png" width="70" height="70"/>';
  let gambler2 =
    '<img src="images/flag.png" width="70" height="70"/> Gambler 2 wins';

  let images = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];

  //   if (a > b) document.getElementById("winner").innerHTML = " Gambler 1 wins";
  //   else if (b > a)
  //     document.getElementById("winner").innerHTML = "Gambler 2 wins ";
  //   else document.getElementById("winner").innerHTML = "Draw";
  if (a > b) document.getElementById("winner").innerHTML = gambler1;
  else if (b > a) document.getElementById("winner").innerHTML = gambler2;
  else document.getElementById("winner").innerHTML = "Draw";

  let image1 = document.getElementById("d1");
  let image2 = document.getElementById("d2");

  image1.src = images[a - 1];
  image2.src = images[b - 1];
}
