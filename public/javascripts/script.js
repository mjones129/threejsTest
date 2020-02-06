
// import * as THREE from '/node_modules/three/build/three.module.js';

var camera, scene, renderer;
var geometry, material, mesh;


init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 3;

    scene = new THREE.Scene();

    // geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    // material = new THREE.MeshNormalMaterial();
    //
    // mesh = new THREE.Mesh( geometry, material );
    // scene.add( mesh );

    var light = new THREE.PointLight(0xFFFFFF, 1);
    light.position.set(0, 10, 0);
    scene.add(light);

    var loader = new THREE.GLTFLoader();
    loader.load('/3dobjects/suzanne.glb', function(gltf) {
      scene.add(gltf.scene);
    }, undefined, function(error) {
      console.error(error);
    });

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    window.addEventListener('resize', function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    controls = new THREE.OrbitControls(camera, renderer.domElement);


}

function animate() {

    requestAnimationFrame( animate );

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.05;

    renderer.render( scene, camera );

};
