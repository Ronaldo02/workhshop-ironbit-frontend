angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController", function($scope, localStorageService){
	$scope.todo = [];
	/*


	*/
	$scope.addActv = function(){
		if(!$scope.newActv){
			alert("Sin Descripcion de Tarea");
		}else{
			parent.document.getElementById("coffe").style.display = "none";
			$scope.todo.push($scope.newActv);
			$scope.newActv = {};
		}
	}

	    // Modelo que permite eliminar tarea
    $scope.eliminarTarea = function (dato) {
        // Al modelo le hemos pasado "dato" que es el texto que contiene el elemento donde se hizo "click"
        // guardamos en la variable pos el index del array que tiene el texto que hemos recogido del elemento donde se hizo click
        var pos = $scope.todo.indexOf(dato);
        // removemos del array tareas el indice que guarda al elemento donde se hizo click
        $scope.todo.splice(pos,1);

    }

    	    // Modelo que permite eliminar todas las tareas
    $scope.limpiarTareas = function (dato) {
        // Al modelo le hemos pasado "dato" que es el texto que contiene el elemento donde se hizo "click"
        // guardamos en la variable pos el index del array que tiene el texto que hemos recogido del elemento donde se hizo click
        //var pos = $scope.todo.indexOf(dato);
        // removemos del array tareas el indice que guarda al elemento donde se hizo click
       
        $scope.todo.splice(dato);
        parent.document.getElementById("coffe").style.display = "block";
    }
});