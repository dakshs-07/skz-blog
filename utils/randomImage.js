const images = [
  "/assets/lee-know.jpg",
  "/assets/do-it.jpg",
  "/assets/skz-2.jpg",
  "/assets/skz-3.jpg",
  "/assets/maniac.jpg",
];
export function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}
