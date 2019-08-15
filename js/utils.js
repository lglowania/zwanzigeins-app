export default class Utils{
		
	static addPressHandler(elem, handler) {

	    function processEvent(elem, evt) {
	        //Füge für Berührungsfeedback touching-Klasse hinzu
	        elem.classList.add('touching');
	        handler(evt);
	        //Entferne Berührungsfeedback nach 100ms
	        setTimeout(function() {
	            elem.classList.remove('touching');
	        }, 100);
	    }

	    elem.addEventListener('touchstart', function(evt) {
	        processEvent(elem, evt);
	        evt.preventDefault();
	        evt.stopPropagation();
	        elem.touchFired = true;

	    }, true);

	    elem.addEventListener('mousedown', function(evt) {
	        if (!elem.touchFired) {
	            processEvent(elem, evt);
	            elem.touchFired = false;
	        }

	    }, true);
	}
}
