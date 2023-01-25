import * as THREE from "three"

function Canvas(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({
        antialias: true,
        //alpha: true <- at deployment i will undo this...
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.SphereGeometry(1.5, 20, 10);
    var mat = new THREE.MeshNormalMaterial({flatShading: true});
    
    var sphere = new THREE.Mesh(geometry, mat);
    scene.add(sphere);
    sphere.rotation.set(0, 0, Math.PI * 23.5 / 180);

    camera.position.z = 5;

    var animation = function (){
        setTimeout(function(){
            requestAnimationFrame(animation);
            sphere.rotateY(.1);
            renderer.render(scene, camera);
        }, 1000/2)
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