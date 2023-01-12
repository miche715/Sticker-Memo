/*global naver*/
class Marker
{
    static createMarker(mapContainer, position)
    {
        return new naver.maps.Marker({
            position: position, 
            map: mapContainer
        });
    }
}

export default Marker;