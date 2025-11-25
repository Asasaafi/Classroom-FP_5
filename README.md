# Classroom-FP_5

npm init -y
npm install three parcel
npm start
rm -rf .parcel-cache


cek blm posisi bagus
const wbLeft = createWhiteboard();
wbLeft.position.set(-3.0, 1.3, 3.99);
wbLeft.rotation.y = Math.PI;
scene.add(wbLeft);

const screen = createScreen();
screen.position.set(0, 1.5, 3.99); 
screen.rotation.y = Math.PI;
scene.add(screen);

const frame = createPhotoFrame();
scene.add(frame);

ini jelek acnya not fix
const ac = createAC();
ac.position.set(0, 2.2, -4.95);
scene.add(ac);