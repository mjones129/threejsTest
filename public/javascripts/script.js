
// import * as THREE from './javascripts/three.module.js';

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
    renderer.setClearColor(new THREE.Color(0x000000));
    document.body.appendChild( renderer.domElement );


    window.addEventListener('resize', function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    // function updateCamera (ev) {
    //   camera.position.y = event.deltaY/50;
    // }
    //
    // window.addEventListener('wheel', updateCamera);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.screenSpacePanning = true;

}

function animate() {

    requestAnimationFrame( animate );

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.05;
    controls.update();
    renderer.render( scene, camera );

};
