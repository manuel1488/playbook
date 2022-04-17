const explorers = [{
		name: "Explorer 1",
		exercises_completed: 10,
		rate: 99,
		city: "CDMX",
		stack: ["js", "c#"],
		missions: {
			onboarding: {
				isFinished: true,
				exercisesFinished: true,
			},
			frontend: {
				isFinished: true,
				exercisesFinished: true,
			},
		},
	},
	{
		name: "Explorer 2",
		exercises_completed: 9,
		city: "Veracruz",
		rate: 50,
		stack: ["js"],
		missions: {
			onboarding: {
				isFinished: false,
				exercisesFinished: false,
			},
			frontend: {
				isFinished: false,
				exercisesFinished: false,
			},
		},
	},
	{
		name: "Explorer 3",
		exercises_completed: 3,
		city: "Sonora",
		rate: 100,
		stack: ["elixir"],
		missions: {
			onboarding: {
				isFinished: true,
				exercisesFinished: true,
			},
			frontend: {
				isFinished: false,
				exercisesFinished: false,
			},
		},
	},
];

//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log('Names')
explorers.forEach((explorer) => {
	console.log(`Explorer name: ${explorer.name}`);
});
console.log('\n')


//Imprime el stack de cada explorer, usa FOR EACH
console.log("Stack's explorers")
explorers.forEach((explorer) => {
	explorer.stack.forEach((stack, index, array) => {
		console.log(`Stack #${index} de ${explorer.name}: ${stack}`)
	});
});
console.log('\n')


//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log('stacks_eplorers');
let stacks_eplorers = explorers.map(e => {
	return e.stack
})
console.log(stacks_eplorers);
console.log('\n')


//4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log('Filter stack')
let js_explorers = explorers.filter(e => {
	return e.stack.includes('js');
})
console.log(js_explorers)
console.log('\n')


//5. Busca el primer explorer que sea de la CDMX, usa FIND
console.log('CDMX explorers')
let cdmx_explorers = explorers.find(e => e.city == 'CDMX');
console.log(cdmx_explorers);
console.log('\n')



//6. Obtén la suma de todos los exercises_completed, usa REDUCE
console.log('reduce sum')
let sum = explorers.reduce((prev, curr) => prev + curr.rate, 0)
console.log(sum)
console.log('\n')


//7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log('some')
let some_finished = explorers.some(e => e.missions.frontend.exercisesFinished == true )
console.log(some_finished)
console.log('\n')


//8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log('every')
let every_finished = explorers.every(e => {
	e.missions.onboarding.isFinished == true}
)
console.log(every_finished)
console.log('\n')