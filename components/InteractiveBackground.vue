<template>
  <canvas ref="canvas" class="absolute inset-0 w-full h-full -z-10"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
let ctx;
let particles = [];
const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
let mouse = {
  x: null,
  y: null,
  radius: 100,
};
let animationFrameId;

class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    if (this.x + this.size > canvas.value.width || this.x - this.size < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.value.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
    }

    if (mouse.x !== null && mouse.y !== null) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.radius + this.size) {
        if (mouse.x < this.x && this.x < canvas.value.width - this.size * 10) {
          this.x += 3;
        }
        if (mouse.x > this.x && this.x > this.size * 10) {
          this.x -= 3;
        }
        if (mouse.y < this.y && this.y < canvas.value.height - this.size * 10) {
          this.y += 3;
        }
        if (mouse.y > this.y && this.y > this.size * 10) {
          this.y -= 3;
        }
      }
    }

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

function init() {
  particles = [];
  let numberOfParticles = (canvas.value.width * canvas.value.height) / 9000;

  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 2 + 1;
    let x =
      Math.random() * (canvas.value.width - size * 2 - size * 2) + size * 2;
    let y =
      Math.random() * (canvas.value.height - size * 2 - size * 2) + size * 2;
    let directionX = Math.random() * 0.4 - 0.2;
    let directionY = Math.random() * 0.4 - 0.2;
    let color = "rgb(56, 189, 248)";
    particles.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

function animate() {
  animationFrameId = requestAnimationFrame(animate);
  ctx.shadowBlur = 0;
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
  }
}

function handleMouseMove(event) {
  mouse.x = event.clientX * dpr;
  mouse.y = event.clientY * dpr;
}

function handleMouseOut() {
  mouse.x = null;
  mouse.y = null;
}

function handleResize() {
  canvas.value.width = window.innerWidth * dpr;
  canvas.value.height = window.innerHeight * dpr;
  canvas.value.style.width = window.innerWidth + "px";
  canvas.value.style.height = window.innerHeight + "px";
  init();
}

onMounted(() => {
  ctx = canvas.value.getContext("2d");
  handleResize();
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseout", handleMouseOut);
  window.addEventListener("resize", handleResize);
  animate();
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseout", handleMouseOut);
  window.removeEventListener("resize", handleResize);
  cancelAnimationFrame(animationFrameId);
});
</script>
