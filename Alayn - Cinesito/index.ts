import { CinePolis, ComboAperitivo, Informacion } from "./Cinepolis";
import { Pelicula } from "./Cinepolis";
import { Usuario } from "./Cinepolis";
import { Alimentos } from "./Cinepolis";

// Código de prueba
const cine = new CinePolis();
const sala = cine.crearSala(50);
const pelicula = new Pelicula('Avengers');
const pelicula2= new Pelicula("Aladdin");
const pelicula3= new Pelicula("John Wick");
const cliente = new Usuario('Bruno Macias');
const comestible = new Alimentos('Hot dog');
const combo = new ComboAperitivo(comestible, 'Hamburguesa +  Gatorad + Canguil con Mantequilla');

// Agrega la película al cine
cine.agregarPelicula(pelicula);

// Asigna la película a la sala
sala.asignarPelicula(pelicula);

// Selecciona la película, sala, asiento y comestible para el cliente
cliente.seleccionarPelicula(pelicula);
cliente.seleccionarSala(sala);
cliente.seleccionarAsiento(5);
cliente.seleccionarComestible(comestible);

// Agrega el comestible y el combo a la lista de datos
const listaDeDatos = Informacion.getInstance();
listaDeDatos.agregarComestible(comestible);
listaDeDatos.agregarCombo(combo);

console.log("BIENVENIDO BRUNO, A LA SALA DONDE SE TRASMITIRA AVENGERS");
// Registra el cliente como observador de la película
cliente.actualizar(pelicula);

// Imprime la información del cliente
cliente.imprimirInformacion();

// Imprime la información del combo seleccionado
console.log(`Combo de Aperitivos seleccionado: ${combo.getNombre()}`);