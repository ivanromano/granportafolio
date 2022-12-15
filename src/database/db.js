import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecetas = defineStore("recetas", () => {
  const RecetasDBs = ref([{
    id: 0,
    products: {
        product1: {
            nombre: 'Pizza a la Fugazza',
            cantidadPasos: 5,
            autor: 'George'
        },
        product2: {
            nombre: 'Pizza a la Francesa',
            cantidadPasos: 2,
            autor: 'Laura'
        },
    },
  },
  {
    id: 1,
    products: {
        product1: {
            nombre: 'Pizza a la Mariana',
            cantidadPasos: 5,
            autor: 'Richard'
        },
        product2: {
            nombre: 'Pizza con Carne',
            cantidadPasos: 2,
            autor: 'Marcos'
        },
    },
  },
  {
    id: 2,
    products: {
        product1: {
            nombre: 'Pizza familiar grande',
            cantidadPasos: 1,
            autor: 'Laura'
        },
        product2: {
            nombre: 'Pizza Gigante',
            cantidadPasos: 5,
            autor: 'Jose'
        },
        product3: {
            nombre: 'Pizza 2 kilometros',
            cantidadPasos: 8,
            autor: 'Mirta'
        },
    },
  },
  {
    id: 3,
    products: {
        product1: {
            nombre: 'Hamburgesa de Pollo',
            cantidadPasos: 5,
            autor: 'Natalia'
        },
        product2: {
            nombre: 'Hamburgesa de Pollo con Papas',
            cantidadPasos: 2,
            autor: 'Nerea'
        },
        product3: {
            nombre: 'Hamburgesa de Pollo con Gigante',
            cantidadPasos: 2,
            autor: 'Martin'
        },
    },
  },
  {
    id: 4,
    products: {
        product1: {
            nombre: 'Hamburgesa de Carne',
            cantidadPasos: 5,
            autor: 'Floria'
        },
        product2: {
            nombre: 'Hamburgesa de Pollo con Papas',
            cantidadPasos: 2,
            autor: 'Raul'
        },
        product3: {
            nombre: 'Hamburgesa de Pollo Gigante',
            cantidadPasos: 2,
            autor: 'Victor'
        },
    },
  },
  {
    id: 5,
    products: {
        product1: {
            nombre: 'Tostados',
            cantidadPasos: 5,
            autor: 'Guillermo'
        },
        product2: {
            nombre: 'Tostados con Jamon y Queso',
            cantidadPasos: 2,
            autor: 'Laura'
        },
        product3: {
            nombre: 'Tostados con Jugo',
            cantidadPasos: 2,
            autor: 'Basques'
        },
    },
  },
  {
    id: 6,
    products: {
        product1: {
            nombre: 'Agua',
            cantidadPasos: 5,
            autor: 'Guillermo'
        },
        product2: {
            nombre: 'Jugo exprimido',
            cantidadPasos: 2,
            autor: 'Jonathan'
        },
        product3: {
            nombre: 'Jugo de Manzana',
            cantidadPasos: 2,
            autor: 'Irwin'
        },
        product4: {
          nombre: 'Chocolatada',
          cantidadPasos: 2,
          autor: 'Rodriguez'
      },
    },
  },
  {
    id: 7,
    products: {
        product1: {
            nombre: 'Muffin',
            cantidadPasos: 5,
            autor: 'George'
        },
        product2: {
            nombre: 'Muffin Gigante',
            cantidadPasos: 2,
            autor: 'Laura'
        },
        product3: {
            nombre: 'Muffin Frances',
            cantidadPasos: 2,
            autor: 'Natalia'
        },
    },
        
  },
  {
    id: 8,
    products: {
        product1: {
            nombre: 'Chocolate Blanco',
            cantidadPasos: 5,
            autor: 'Leonardo'
        },
        product2: {
            nombre: 'Chocolate en Barra',
            cantidadPasos: 2,
            autor: 'Martin'
        },
        product3: {
            nombre: 'Galletas con Chocolate',
            cantidadPasos: 2,
            autor: 'Pablo'
        },
    },
  },
  {
    id: 9,
    products: {
        product1: {
            nombre: 'Helado de Frutilla',
            cantidadPasos: 5,
            autor: 'Rodriguez'
        },
        product2: {
            nombre: 'Helado de Frutilla Granizado',
            cantidadPasos: 2,
            autor: 'Mirta'
        },
        product3: {
            nombre: 'Helado de Frutilla con Menta',
            cantidadPasos: 2,
            autor: 'Maria'
        },
    },
  },
  {
    id: 10,
    products: {
        product1: {
            nombre: 'Helado de Menta',
            cantidadPasos: 5,
            autor: 'Bastian'
        },
        product2: {
            nombre: 'Helado de Menta Granizado',
            cantidadPasos: 2,
            autor: 'Laura'
        },
        product3: {
            nombre: 'Helado de Menta Cono',
            cantidadPasos: 2,
            autor: 'Laura'
        },
    },
  },
  {
    id: 11,
    products: {
        product1: {
            nombre: 'Crema del Cielo',
            cantidadPasos: 5,
            autor: 'George'
        },
        product2: {
            nombre: 'Menta Granizada',
            cantidadPasos: 2,
            autor: 'Diego'
        },
        product3: {
            nombre: 'Menta con Vainilla',
            cantidadPasos: 2,
            autor: 'Martin'
        },
    },
  },
  ]);

  return {
    RecetasDBs,
  };
});




