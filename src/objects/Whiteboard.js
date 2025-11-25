import * as THREE from 'three';

export function createWhiteboard() {
    const boardGeometry = new THREE.BoxGeometry(3, 1.5, 0.05);
    const boardMaterial = new THREE.MeshStandardMaterial({
        color: 0xcccccc
    });
    const whiteboard = new THREE.Mesh(boardGeometry, boardMaterial);

    // Frame
    const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 }); // abu-abu gelap

    // Frame atas
    const frameTop = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.05, 0.05), frameMaterial);
    frameTop.position.set(0, 0.775, 0.03);

    // Frame bawah
    const frameBottom = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.05, 0.05), frameMaterial);
    frameBottom.position.set(0, -0.775, 0.03);

    // Frame kiri
    const frameLeft = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.6, 0.05), frameMaterial);
    frameLeft.position.set(-1.525, 0, 0.03);

    // Frame kanan
    const frameRight = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.6, 0.05), frameMaterial);
    frameRight.position.set(1.525, 0, 0.03);

    // Penghapus papan tulis
    const eraserGeometry = new THREE.BoxGeometry(0.25, 0.1, 0.05);
    const eraserMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // biru
    const eraser = new THREE.Mesh(eraserGeometry, eraserMaterial);
    eraser.position.set(0, -0.725, 0.055); // bawah tengah, menempel ke papan

    const group = new THREE.Group();
    group.add(whiteboard, frameTop, frameBottom, frameLeft, frameRight, eraser);

    // Tempel ke dinding
    group.position.set(0, 1.5, -3.9);

    return group;
}