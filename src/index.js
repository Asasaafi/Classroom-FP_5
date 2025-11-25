import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { createWhiteboard } from './objects/Whiteboard.js';
// import { createScreen } from './objects/Screen.js';
// import { createAC } from './objects/Ac';
// import { createPhotoFrame } from './objects/PhotoFrame.js';

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.style.margin = '0';
document.body.appendChild(renderer.domElement);

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 1.5, 4);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Classroom
const roomGeometry = new THREE.BoxGeometry(8, 3, 10);

const materials = [
    new THREE.MeshStandardMaterial({ color: 0xff00ff, side: THREE.BackSide }), // RIGHT - Magenta
    new THREE.MeshStandardMaterial({ color: 0x00ffff, side: THREE.BackSide }), // LEFT - Cyan
    new THREE.MeshStandardMaterial({ color: 0x0000ff, side: THREE.BackSide }), // TOP - Blue
    new THREE.MeshStandardMaterial({ color: 0xffff00, side: THREE.BackSide }), // BOTTOM - Yellow
    new THREE.MeshStandardMaterial({ color: 0xff0000, side: THREE.BackSide }), // FRONT - Red
    new THREE.MeshStandardMaterial({ color: 0x00ff00, side: THREE.BackSide }), // BACK - Green
];

const room = new THREE.Mesh(roomGeometry, materials);
scene.add(room);

// Lights
const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(5, 5, 5);
scene.add(light1);

const light2 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light2);

// Resize Handling
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();