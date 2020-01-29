function arePointsNear(checkPoint, centerPoint, km) {
    const ky = 40000 / 360;
    const kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    const dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    const dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
}

const checkpoint = { lat: 11.0735946 , lng: 76.999573 };
const centrepoint = { lat: 11.0513315, lng: 76.9909741 };

const n = arePointsNear(checkpoint, centrepoint, 1);

console.log(n);
