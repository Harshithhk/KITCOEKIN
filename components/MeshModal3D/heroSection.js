import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function HeroSection() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create a new Three.js scene and renderer
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Load your GLB model
    const loader = new GLTFLoader();
    loader.load('/meshModels/mainBuilding.glb', (gltf) => {
      scene.add(gltf.scene);
    });

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Render your scene in the requestAnimationFrame loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Clean up the scene and renderer when the component unmounts
    return () => {
      scene.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero" ref={mountRef} />
  );
}

export default HeroSection;
