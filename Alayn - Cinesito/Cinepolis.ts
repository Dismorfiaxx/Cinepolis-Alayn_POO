
/* La clase CinePolis Proporciona métodos para agregar películas, 
obtener la lista de películas y crear salas.*/
export class CinePolis {
    private peliculas: Pelicula[];
    private salas: SaladeCine[];
  
    constructor() {
      this.peliculas = [];
      this.salas = [];
    }
  
    public agregarPelicula(pelicula: Pelicula): void {
      this.peliculas.push(pelicula);
    }
  
    public getPeliculas(): Pelicula[] {
      return this.peliculas;
    }
  
    public crearSala(asientosDisponibles: number): SaladeCine {
      const sala = new SaladeCine(asientosDisponibles);
      this.salas.push(sala);
      return sala;
    }
  }
  
  /*
  Esta clase representa una sala de cine y tiene información sobre 
  los asientos disponibles, 
  la película asignada y los aperitivos disponibles en la sala. 
  */
  export class SaladeCine {
    private asientosDisponibles: number;
    private pelicula: Pelicula | null;
    private aperitivos: Alimentos[];
  
    constructor(asientosDisponibles: number) {
      this.asientosDisponibles = asientosDisponibles;
      this.pelicula = null;
      this.aperitivos = [];
    }
  
    public getAsientosDisponibles(): number {
      return this.asientosDisponibles;
    }
  
    public asignarPelicula(pelicula: Pelicula): void {
      if (this.pelicula === null) {
        this.pelicula = pelicula;
      } else {
        console.log("Ya se ha asignado una película a esta sala.");
      }
    }
  
    public agregarAperitivo(aperitivo: Alimentos): void {
      this.aperitivos.push(aperitivo);
    }
  
    public getAperitivos(): Alimentos[] {
      return this.aperitivos;
    }
  }
  
  // Clase Pelicula
  export class Pelicula {
    public titulo: string;
  
    constructor(titulo: string) {
      this.titulo = titulo;
    }
  
    public getTitulo(): string {
      return this.titulo;
    }
  }
  export interface Observer {
    actualizar(pelicula: Pelicula): void;
    }
  
  /* Clase Cliente
  Implementacion del Patron de diseño Observer
  */
  export class Usuario implements Observer {
    private nombre: string;
    private peliculaSeleccionada: Pelicula | null;
    private sala: SaladeCine | null;
    private asiento: number | null;
    private comestibles: Alimentos[];
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.peliculaSeleccionada = null;
      this.sala = null;
      this.asiento = null;
      this.comestibles = [];
    }
    public actualizar(pelicula: Pelicula | null = null): void {
      if (pelicula !== null) {
        console.log(`La película "${pelicula.getTitulo()}" ha cambiado de estado.`);
      } else {
        console.log("La película ha cambiado de estado.");
      }
    }
  
    public seleccionarPelicula(pelicula: Pelicula): void {
      this.peliculaSeleccionada = pelicula;
    }
  
    public seleccionarSala(sala: SaladeCine ): void {
      this.sala = sala;
    }
  
    public seleccionarAsiento(asiento: number): void {
      this.asiento = asiento;
    }
  
    public seleccionarComestible(comestible: Alimentos): void {
      this.comestibles.push(comestible);
    }
  
    public imprimirInformacion(): void {
      console.log(`Nombre del cliente: ${this.nombre}`);
      console.log(`Pelicula seleccionada: ${this.peliculaSeleccionada ? this.peliculaSeleccionada.getTitulo() : 'Ninguna'}`);
      console.log(`Sala asignada: ${this.sala ? 'Sala ' + this.sala.getAsientosDisponibles() : 'Ninguna'}`);
      console.log(`Asiento seleccionado: ${this.asiento !== null ? this.asiento : 'Ninguno'}`);
      console.log(`Alimentos en la sala: ${this.sala ? this.sala.getAperitivos().map(aperitivo => aperitivo.getNombre()).join(', ') : 'Ninguno'}`);
      console.log(`Aperitivos seleccionados por el cliente: ${this.comestibles.length > 0 ? this.comestibles.map(comestible => comestible.getNombre()).join(', ') : 'Ninguno'}`);
    }
  }
  
  // Clase Comestible
  export class Alimentos {
    public nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    public getNombre(): string {
      return this.nombre;
    }
  }
  /* Clase Decoradora de Comestibles
  Implementacion patron de diseño Decorator
  */
  export class ComboAperitivo extends Alimentos {

    private comestible: Alimentos;
  
    constructor(comestible: Alimentos, nombre: string) {
      super(nombre);
      this.comestible = comestible;
    }
  
    public getNombre(): string {
      return `${this.comestible.getNombre()} + ${this.nombre}`;
    }
  }
  /* En esta clase llamada Informacion
  se ve implementado el patron de diseño
  Singleton, representa una lista de datos en el cine. 
  Tiene listas de películas, combos y comestibles 
  */
  export class Informacion {
    private static instance: Informacion;
    private peliculas: Pelicula[];
    private combos: ComboAperitivo[];
    private comestibles:Alimentos[];
  
    private constructor() {
      this.peliculas = [];
      this.combos = [];
      this.comestibles= [];
    }
  
    public static getInstance(): Informacion {
      if (!Informacion.instance) {
        Informacion.instance = new Informacion();
      }
      return Informacion.instance;
    }
    public agregarComestible(comestible: Alimentos): void {
      this.comestibles.push(comestible);
    }
    public agregarPelicula(pelicula: Pelicula): void {
      this.peliculas.push(pelicula);
    }
  
    public getPeliculas(): Pelicula[] {
      return this.peliculas;
    }
  
    public agregarCombo(combo: ComboAperitivo): void {
      this.combos.push(combo);
    }
  
    public getCombos(): ComboAperitivo[] {
      return this.combos;
    }
  }