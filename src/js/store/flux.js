const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters : [],
			planets : [],
			personaje: [],
			planeta: [],
			favoritos: [],
		},
		actions: {
			addFav:(item)=>{
				let aux = getStore().favoritos
				aux.push(item)
				setStore({favoritos:aux})
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://www.swapi.tech/api/people/")
					.then(resp => resp.json())
					.then(resp => setStore({ characters: resp.results }))
					.catch(error => console.log(true));
				/* Traemos a los planetas */
				fetch("https://www.swapi.tech/api/planets/")
					.then(resp => resp.json())
					.then(resp => setStore({ planets: resp.results }))
					.catch(error => console.log(true));
				
			},

			loadPersonaje: (id) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then((resp) => resp.json())
					.then((resp) => setStore({ personaje: resp.result.properties }))
					.catch(error => console.log(true));
				
			},

			loadPlaneta: (id) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then((resp) => resp.json())
					.then((resp) => setStore({ planeta: resp.result.properties }))
					.catch(error => console.log(true));
				
			},
		
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
