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

    var geometry = new THREE.SphereGeometry(1.5, 20, 10);
    var little = new THREE.SphereGeometry(.05, 10, 10);
    var mat = new THREE.MeshNormalMaterial({flatShading: true});
    
    var sphere = new THREE.Mesh(geometry, mat);
    var moon = new THREE.Mesh(little, mat);
    moon.position.x += 3;

    var axis = new THREE.Vector3(0, 1, 0).normalize();
    var center = new THREE.Vector3(0, 0, 0);

    scene.add(sphere);
    scene.add(moon);
    
    sphere.rotation.set(0, 0, Math.PI * 23.5 / 180);

    camera.position.z = 5;

    var animation = function (){
        setTimeout(function(){
            requestAnimationFrame(animation);
            sphere.rotateY(.1);
            var q = new THREE.Quaternion();
            q.setFromAxisAngle(axis, Math.PI * 2.5 / 180);
            moon.applyQuaternion(q);
            moon.position.sub(center);
            moon.rotateY(.5);
            moon.position.applyQuaternion(q);
            moon.position.add(center);
            renderer.render(scene, camera);
        }, 100/2)
    };

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