// تحديد عناصر الصفحة الأساسية
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({canvas});

// إنشاء كاميرا ثلاثية الأبعاد
const fov = 75;
const aspect = 2;
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// إنشاء مشهد ثلاثي الأبعاد
const scene = new THREE.Scene();

// إضافة مظلي إلى المشهد
const radius = 0.5;
const widthSegments = 10;
const heightSegments = 10;
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

// تعيين الخامة وتطبيقها على المظلي
const material = new THREE.MeshBasicMaterial({color: 0xffff00, wireframe: true});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// إضافة الإضاءة
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);

// تحديث عرض الإطارات
function render(time) {
  time *= 0.001;  // تحويل الوقت إلى ثواني

  mesh.rotation.x = time;
  mesh.rotation.y = time;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);