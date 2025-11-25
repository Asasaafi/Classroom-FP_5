import * as THREE from 'three';

export function createScreen() {
    const geometry = new THREE.PlaneGeometry(2.5, 1.5);
    const material = new THREE.MeshStandardMaterial({
        color: 0x0088ff,
        emissive: 0x0044aa,
        emissiveIntensity: 0.3,
        side: THREE.FrontSide
    });
    const screen = new THREE.Mesh(geometry, material);
    return screen;
}