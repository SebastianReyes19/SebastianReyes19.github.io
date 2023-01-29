import * as THREE from "three"

function Canvas(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({
        antialias: true,
        //alpha: true <- at deployment i will undo this...
    });
    var tilt = Math.PI * 23.5 / 180;    
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);

    var planet = new THREE.SphereGeometry(1.5, 20, 10);
    var little = new THREE.SphereGeometry(.375, 10, 10);

    var circle = new THREE.RingGeometry(6.5, 7, 32, 1, 0, Math.PI * 2);
    var innerC = new THREE.RingGeometry(5, 5.5);
    
    var mat = new THREE.MeshNormalMaterial({flatShading: true});
    var dynamMat = new THREE.MeshBasicMaterial();
    
    var sphere = new THREE.Mesh(planet, mat);
    var moon = new THREE.Mesh(little, mat);

    var orbit = new THREE.Mesh(circle, dynamMat);
    var innerO = new THREE.Mesh(innerC, dynamMat);

    moon.position.x += 3;

    var group = new THREE.Group();

    group.add(sphere);
    group.add(moon);

    scene.add(group);
    scene.add(orbit);
    scene.add(innerO);

    group.rotation.set(0, 0, tilt);
    camera.position.z = 7.5;

    var animation = function (){
        setTimeout(function(){
            requestAnimationFrame(animation);

            group.rotateY(.1);
            sphere.rotateY(.5);
            orbit.rotateZ(.01);
            innerO.rotateZ(-.01);

            renderer.render(scene, camera);
        }, 2)
    };

    setInterval(() => {
        dynamMat.color.setStyle('#' + Math.random().toString(16).slice(-6));
    }, 2000);

    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize(){
        camera.aspect = window.innerWidth /window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    animation();

    return(
        <>{console.log("Hey I rendered...")}</>
    )
}

export default Canvas;