const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format
const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    /**** Set camera and light *****/
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    // Load the sound and play it automatically once ready
    // const music = new BABYLON.Sound("cello", "sounds/cellolong.wav", scene, null, { loop: true, autoplay: true });

    // Load the sound, give it time to load and play it every 3 seconds
    // const bounce = new BABYLON.Sound("bounce", "sounds/bounce.wav", scene);
    // setInterval(() => bounce.play(), 3000);
    
    const box1 = BABYLON.MeshBuilder.CreateBox("box1", {width: 2, height: 1.5, depth: 3});
    box1.position.y = 0.75;
    box1.rotation.y = Math.PI / 4;

    const box2 = BABYLON.MeshBuilder.CreateBox("box2", {});
    box2.scaling.x = 2;
    box2.scaling.y = 1.5;
    box2.scaling.z = 3;
    box2.position = new BABYLON.Vector3(-3, 0.75, 0);

    const box3 = BABYLON.MeshBuilder.CreateBox("box3", {});
    box3.scaling = new BABYLON.Vector3(2, 1.5, 3);
    box3.position.x  = 3;
    box3.position.y  = 0.75;
    box3.position.z  = 0;

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});

    return scene;
}

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
        engine.resize();
});