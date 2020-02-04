var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innderWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create the shape
var geometry = new THREE.BoxGeometry(1, 1, 1);

//create a material, color, or image texture
var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

//game logic
var update = function() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.05;
};

//draw scene
var render = function() {
  renderer.render(scene, camera);
};

//run game loop
var GameLoop = function() {
    requestAnimationFrame(GameLoop);
    update();
    render();
};

GameLoop();
