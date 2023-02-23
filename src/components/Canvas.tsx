import './Canvas.scss'

import * as THREE from "three"
import { RenderPass, EffectPass, EffectComposer, DotScreenEffect} from 'postprocessing';

function createStar(group:THREE.Group){
    const geo = new THREE.SphereGeometry(0.075, 24, 24);
    const material = new THREE.MeshBasicMaterial();

    const star = new THREE.Mesh(geo, material);

    const [x, y, z] = Array(3).fill(3).map(() => THREE.MathUtils.randFloatSpread(20)); 
    star.position.set(x, y, z);

    group.add(star);
}

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

    var tetra = new THREE.TetrahedronGeometry(2);
    
    var mat = new THREE.MeshNormalMaterial({flatShading: true});
    var dynamMat = new THREE.MeshBasicMaterial();
    
    var tr1 = new THREE.Mesh(tetra, mat);
    var tr2 = new THREE.Mesh(tetra, mat);

    const halfpi = Math.PI * .5;

    tr2.setRotationFromEuler(new THREE.Euler(halfpi, halfpi, halfpi));

    var group = new THREE.Group();
    var stars = new THREE.Group();

    for (var i = 0; i < 75; i++){
        createStar(stars);
    }
    
    scene.add(stars);

    group.add(tr1, tr2);
    group.position.x += 3;

    scene.add(group);

    group.rotation.set(0, 0, tilt);
    stars.rotation.set(0, 0, tilt);
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
            
            stars.rotation.z += .01;
            stars.rotation.y += .01;
            stars.rotation.x += .01;

            group.rotateY(.01);
            group.rotateZ(.02);
            group.rotateX(-.01);
            
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