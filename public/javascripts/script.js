// import * as THREE from '/node_modules/three/build/three.module.js';

var camera, renderer;
var geometry, material, mesh;
var renderer = new THREE.WebGLRenderer( { antialias: true } );
var loader = new THREE.GLTFLoader();
var controls = new THREE.OrbitControls(camera, renderer.domElement);
var light = new THREE.PointLight(0xFFFFFF, 1);
var scene = new THREE.Scene();


init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );

    camera.position.z = 3;




    // geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    // material = new THREE.MeshNormalMaterial();
    //
    // mesh = new THREE.Mesh( geometry, material );
    // scene.add( mesh );


    light.position.set(0, 10, 0);
    scene.add(light);


    loader.load('/3dobjects/suzanne.glb', function(gltf) {
      scene.add(gltf.scene);
    }, undefined, function(error) {
      console.error(error);
    });


    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );


    controls.update();
}

function animate() {

    requestAnimationFrame( animate );

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.05;

    controls.update();
    renderer.render( scene, camera );
};
