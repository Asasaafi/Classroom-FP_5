import * as THREE from 'three';

export function createAC() {
    const group = new THREE.Group();

    // Badan utama AC
    const bodyGeometry = new THREE.BoxGeometry(2.4, 0.5, 0.3);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    group.add(body);

    // Kisi-kisi udara bawah
    const ventGeometry = new THREE.BoxGeometry(2.3, 0.05, 0.31);
    const ventMaterial = new THREE.MeshStandardMaterial({ color: 0xdddddd });
    const vent = new THREE.Mesh(ventGeometry, ventMaterial);
    vent.position.set(0, -0.25, 0);
    group.add(vent);

    // Louvers (bukaan arah angin)
    const louverMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    for (let i = 0; i < 5; i++) {
        const louver = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.01, 0.02), louverMaterial);
        louver.position.set(0, -0.26, -0.13 + i * 0.06);
        group.add(louver);
    }

    // Indikator LED kecil
    const ledGeometry = new THREE.BoxGeometry(0.1, 0.05, 0.01);
    const ledMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffff });
    const led = new THREE.Mesh(ledGeometry, ledMaterial);
    led.position.set(1.0, 0.15, 0.151);
    group.add(led);

    // Kotak kontrol di samping kanan
    const controlBoxGeometry = new THREE.BoxGeometry(0.2, 0.3, 0.05);
    const controlBoxMaterial = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
    const controlBox = new THREE.Mesh(controlBoxGeometry, controlBoxMaterial);
    controlBox.position.set(1.4, 0, 0); // di samping kanan AC
    group.add(controlBox);

    // Posisi default (bisa diubah saat ditambahkan ke scene)
    group.position.set(0, 2.2, -4.95);

    return group;
}