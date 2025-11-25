import * as THREE from 'three';

export function createPhotoFrame() {
    const group = new THREE.Group();

    // Foto (bagian dalam)
    const photoGeometry = new THREE.PlaneGeometry(0.4, 0.6);
    const photoMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const photo = new THREE.Mesh(photoGeometry, photoMaterial);
    group.add(photo);

    // Bingkai (sedikit lebih besar dari foto)
    const frameThickness = 0.02;
    const outerWidth = 0.4 + frameThickness * 2;
    const outerHeight = 0.6 + frameThickness * 2;
    const frameGeometry = new THREE.PlaneGeometry(outerWidth, outerHeight);
    const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const frame = new THREE.Mesh(frameGeometry, frameMaterial);
    frame.position.set(0, 0, -0.01); // sedikit di belakang foto
    group.add(frame);

    // Tempel ke dinding kiri (warna cyan)
    group.rotation.y = Math.PI / 2; // menghadap ke kanan
    group.position.set(-3.95, 1.2, 0); // dekat dinding kiri, agak tengah

    return group;
}