
/*
  var array1 = [5,6,98,22,1];
  var array2 = [2,8,33,1,4,6];
	for(var  i = 0; i < array2.length; i ++) {
		array1.push(array2[i]);
}

	for(var i = 0; i < array1.length-1; i ++) {
		for( var j = i+1; j < array1.length; j++ ) {
			if(array1[i] > array1[j] ) {
				var a = array1[j];
				array1[j] = array1[i];
				array1[i] = a;

			}

		}
	}

	alert(array1);*/
	

  var array1 = [5,6,98,22,1];
  var array2 = [2,8,33,1,4,6];
	for(var  i = 0; i < array2.length; i ++) {
		array1.push(array2[i]);
}

	for(var k = 0; k < array1.length; k ++  )
	{

	    for(var i = 0, j = 1; j < array1.length; i ++, j ++) 
	    {
		
			if(array1[i] > array1[j] )
			 {
				var a = array1[j];
				array1[j] = array1[i];
				array1[i] = a;

			}
		}
	}

	alert(array1);
	