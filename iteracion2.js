/*
 * Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad 
 * isApproved a true o false en consecuencia. 
 * Una vez lo tengas compruébalo con un console.log.
 */

 const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
    ]

	/*let isApproved = true;
	  for (let i = 0; i < alumns.length; i++) {
		if ((alumns[i].T1 && alumns[i].T2) || (alumns[i].T2 && alumns[i].T3) || (alumns[i].T3 && alumns[i].T1)) {
		  isApproved = true;
		}else {
		   isApproved= false;
		} 
		console.log(alumns[i].name, isApproved);
	  }*/

	 let isApproved = true;
	  alumns.forEach((alumn, index)=> {
		if ((alumn.T1 && alumn.T2) || (alumn.T2 && alumn.T3) || (alumn.T3 && alumns.T1)) {
			isApproved = true;
		  }else {
			 isApproved= false;
		  } 
		console.log(alumn.name, isApproved);

	   })
	
	
	

