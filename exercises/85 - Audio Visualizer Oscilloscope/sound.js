import { hslToRgb } from './utils.js'

const WIDTH = 1200;
const HEIGHT = 1200;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;
let bufferLength;

function handleError(err) {
  console.log('release the mic');
}

async function getAudio() {
  const stream = await navigator.mediaDevices.getUserMedia({audio: true});
  const audioCtx = new AudioContext();
  analyzer = audioCtx.createAnalyser();
  const source = audioCtx.createMediaStreamSource(stream);
  source.connect(analyzer);
  analyzer.fftSize = 2 ** 10;
  bufferLength = analyzer.frequencyBinCount;
  const timeData = new Uint8Array(bufferLength);
  const frequencyData = new Uint8Array(bufferLength);
  drawTimeData(timeData);
  drawFrequency(frequencyData);
}

function drawTimeData(timeData) {
  analyzer.getByteTimeDomainData(timeData);
  ctx.clearRect(0,0,WIDTH,HEIGHT)
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#fe8300';
  ctx.beginPath();
  const sliceWidth = WIDTH / bufferLength;
  let x = 0;
  timeData.forEach((data, i) => {
    const v = data / 128;
    const y = (v * HEIGHT) / 2;
    if(i === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
    x += sliceWidth;
  });
  ctx.stroke();
  requestAnimationFrame(() => drawTimeData(timeData));
}

function drawFrequency(frequencyData) {
  analyzer.getByteFrequencyData(frequencyData);
  const barWidth = (WIDTH / bufferLength) * 2.5;
  let x = 0;
  frequencyData.forEach(amount => {
    const percent = amount / 255;
    const [h, s, l] = [ percent - 0.5, 1, 0.5]
    const barHeight = (HEIGHT * percent) / 2;
    const [r, g, b] = hslToRgb(h, s, l)
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(
      x,
      HEIGHT - barHeight,
      barWidth,
      barHeight);
      x = x + barWidth + 5;
  })
  requestAnimationFrame(() => drawFrequency(frequencyData));
}


getAudio();