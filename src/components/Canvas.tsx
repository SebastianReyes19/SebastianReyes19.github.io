import './Canvas.scss'

import * as THREE from "three"
import { RenderPass, EffectPass, EffectComposer, DotScreenEffect} from 'postprocessing';

function Canvas(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.outerWidth/window.outerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true //<- at deployment i will undo this...
    });
    var tilt = Math.PI * 23.5 / 180;    
    renderer.setSize(window.outerWidth, window.outerHeight);
    
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

    const composer = new EffectComposer(renderer);
    composer.addPass( new RenderPass( scene, camera ) );

    composer.addPass( new EffectPass(camera, new DotScreenEffect(
        {
            scale: 2.3
    })));
    var animation = function (){
        setTimeout(function(){
            requestAnimationFrame(animation);

            group.rotateY(.1);
            sphere.rotateY(.5);
            orbit.rotateZ(.01);
            innerO.rotateZ(-.01);
            
            composer.render();
            //renderer.render(scene, camera);
        }, 4)
    };

    setInterval(() => {
        dynamMat.color.setStyle('#' + Math.random().toString(16).slice(-6));
    }, 2000);

    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize(){
        camera.aspect = window.outerWidth /window.outerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.outerWidth, window.outerHeight);
        composer.setSize(window.outerWidth, window.outerHeight);
    }

    animation();

    return(
        <>{console.log("Rendered canvas")}</>
    )
}

export default Canvas;