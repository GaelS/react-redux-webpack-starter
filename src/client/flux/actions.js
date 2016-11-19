function initScene(dispatchEvents){
	return {
		type : 'INIT',
		value : {
			dispatchEvents,
		},
	};
};

function createGuy( value ){
	return {
		type : 'CREATE_GUY',
		value,
	};
};

function select(idsMesh){
	return {
		type : 'START_SELECTION',
		value : idsMesh,
	};
};

function moveSelection(x,z){
	return {
		type : 'MOVE_SELECTION',
		value : {
			x,
			z,
		},
	};
}

function deselectAll(){
	return {
		type : 'DESELECT_ALL',
		value : null,
	};

}

export default {
	initScene,
	createGuy,
	select,
	moveSelection,
	deselectAll,
};