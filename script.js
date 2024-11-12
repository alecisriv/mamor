function openGift() {
  const newWindow = window.open('', '', 'width=800,height=600');
  newWindow.document.write(`
    <html>
    <head>
      <title>¡Feliz Cumpleaños!</title>
      <style>
        body {
          background-color: #fce4ec;
          text-align: center;
          font-family: 'Arial', sans-serif;
        }
        h1 {
          color: #ff69b4;
          font-size: 2em;
          margin-top: 20px;
        }
        img {
          width: 200px;
          margin-top: 20px;
        }
        .lyrics {
          font-size: 1.2em;
          color: #555;
          margin: 20px auto;
          width: 80%;
          line-height: 1.6;
        }
        canvas {
          position: absolute;
          top: 0;
          left: 0;
        }
      </style>
    </head>
    <body>
      <h1>¡Feliz Cumpleaños, Mi amor 💗!</h1>
      <div class="lyrics">
         <p>Estas son las mañanitas<br>
        Que cantaba el rey David<br>
        Hoy por ser día de tu cumpleaños<br>
        Te las cantamos aquí</p>
        <p>Despierta, mi linda, despierta<br>
        Mira que ya amaneció<br>
        Ya los pajaritos cantan<br>
        La Luna ya se metió</p>
        <p>Qué linda está la mañana<br>
        En que vengo a saludarte<br>
        Venimos todos con gusto<br>
        Y placer a felicitarte</p>
        <p>El día en que tú naciste<br>
        Nacieron todas las flores<br>
        En la pilar del bautismo<br>
        Cantaron los Ruiseñores</p>
        <p>Ya viene amaneciendo<br>
        Ya la luz del día nos dio<br>
        Levántate de mañana<br>
        Mira que ya amaneció</p>
        <p>Si yo pudiera bajarte<br>
        Las estrellas y un lucero<br>
        Para poder demostrarte<br>
        Lo mucho que yo te quiero</p>
        <p>Con jazmines y flores<br>
        Este día quiero adornar<br>
        Hoy, por ser día de tu santo<br>
        Te venimos a cantar</p>
        <p>Te amo mucho mi amor, deseo mucho que pasemos muchos cumpleaños juntos, deseo este día sea para ti lleno de felicidad, estaré a tu lado siempre siempre!!</p>
        <h2>Sigue creciendo mi amor, no te detengas nunca, el exito te espera!!</h2>
        <h1>FELIZ CUMPLEAÑOS MI AMOR</h1>
        <h1>FELIZ CUMPLEAÑOS MI LINDA</h1>
        <h1>FELIZ CUMPLEAÑOS MI PRINCESA</h1>
        <h1>FELIZ CUMPLEAÑOS MI RENA</h1>
        <h8>Con mucho amor, atentamente tu noviecito</h8>
      </div>
      <img src="mamor.jpg" alt="amor">
      <canvas id="my-canvas"></canvas>
      <script src="https://cdn.jsdelivr.net/npm/confetti-js@0.0.18/dist/index.min.js"></script>
      <script>
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
      </script>
    </body>
    </html>
  `);
  newWindow.document.close();
}

// Fecha límite: 8 de septiembre de 2024 a las 00:00
const targetDate = new Date("2024-09-08T00:00:00").getTime();
const now = new Date().getTime();

// Duración total de 2 horas (en milisegundos)
const twoHours = 2 * 60 * 60 * 1000;

// Si faltan menos de 2 horas para el objetivo, ajusta la cuenta regresiva
let startTime = targetDate - twoHours;
if (now > startTime) {
  startTime = now;
}

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("thermometer").style.display = "none";
    document.getElementById("message").textContent = "¡Toma tu regalo mi vida !";
    document.getElementById("gift").style.display = "block";
    document.getElementById("countdown-timer").style.display = "none";
  } else {
    // Calcula el porcentaje del termómetro basado en el tiempo restante de las 2 horas
    const elapsed = now - startTime;
    const percentFilled = (elapsed / twoHours) * 100;
    document.getElementById("thermometer-fill").style.height = percentFilled + "%";

    // Calcula el tiempo restante en horas, minutos y segundos
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualiza el temporizador en pantalla
    document.getElementById("countdown-timer").textContent = 
      `Tiempo restante: ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);
