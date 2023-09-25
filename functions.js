/*1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"*/
function mensajeAlumno(nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio <= 3.9) {
      return "Estudie";
    } else {
      return "becado";
    }
  }
  
//2. Dado un número indicar si es par o impar y si es mayor de 10.

  function parImparMayorDe10(numero) {
    if (numero % 2 === 0) {
      if (numero > 10) {
        return "Es par y mayor de 10";
      } else {
        return "Es par pero no mayor de 10";
      }
    } else {
      return "Es impar";
    }
  }
  
/*3. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente.*/
  function calcularVoltaje(resistencia, corriente) {
    return resistencia * corriente;
  }
  
/*4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad.
*/
  function personaMayorEdad(personas) {
    let nombreMayor = "";
    let edadMayor = -1;
  
    for (const persona of personas) {
      if (persona.edad > edadMayor) {
        nombreMayor = persona.nombre;
        edadMayor = persona.edad;
      }
    }
  
    return nombreMayor;
  }
  
/*5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo */
  function operacionesConNumeros(num1, num2) {
    if (num1 > num2) {
      const suma = num1 + num2;
      const resta = num1 - num2;
      return { suma, resta };
    } else {
      const producto = num1 * num2;
      const division = num1 / num2;
      return { producto, division };
    }
  }
  
/*6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres.*/  
function procesarEstudiantes(estudiantes) {
    let estudianteMayorNota = null;
    let estudianteMenorNota = null;
    let cantidadHombres = 0;
    let cantidadMujeres = 0;
  
    for (const estudiante of estudiantes) {
      if (estudianteMayorNota === null || estudiante.nota > estudianteMayorNota.nota) {
        estudianteMayorNota = estudiante;
      }
  
      if (estudianteMenorNota === null || estudiante.nota < estudianteMenorNota.nota) {
        estudianteMenorNota = estudiante;
      }
  
      if (estudiante.sexo === "Hombre") {
        cantidadHombres++;
      } else {
        cantidadMujeres++;
      }
    }
  
    return {
      estudianteMayorNota,
      estudianteMenorNota,
      cantidadHombres,
      cantidadMujeres,
    };
  }
  

  /*7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura*/
 function calcularTotal(nombreArticulo, precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
  }
  
  
  /*8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo*/
  
function calcularArea(figura, base, altura=1) {
    let area = 0;
      if(figura == "cuadrado"){return area = base*base}
      if(figura == "rectangulo"){return area = base * altura};
  }
  
  /*9. N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros.*/ 
  function determinarCampeonaYRecord(atletas) {
    let campeona = "";
    let recordRoto = false;
  
    for (const atleta of atletas) {
      if (atleta.marca > 15.5) {
        recordRoto = true;
        campeona = atleta.nombre;
        break;
      }
    }
  
    return {
      campeona,
      recordRoto,
    };
  }
  
  /*10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR*/
  function calcularEstadisticasNumeros(valores) {
    let sumatoria = 0;
    let cantidad = 0;
    let mayor = Number.MIN_SAFE_INTEGER;
    let menor = Number.MAX_SAFE_INTEGER;
  
    for (const valor of valores) {
    if(valor === 0) break;
      sumatoria += valor;
      cantidad++;
      if (valor > mayor) {
        mayor = valor;
      }
      if (valor < menor) {
        menor = valor;
      }
    }
  
    const promedio = sumatoria / cantidad;
  
    return {
      sumatoria,
      promedio,
      cantidad,
      mayor,
      menor,
    };
  }
  

  export {
    mensajeAlumno,
    parImparMayorDe10,
    calcularVoltaje,
    personaMayorEdad,
    operacionesConNumeros,
    procesarEstudiantes,
    calcularTotal,
    calcularArea,
    determinarCampeonaYRecord,
    calcularEstadisticasNumeros,
};
  