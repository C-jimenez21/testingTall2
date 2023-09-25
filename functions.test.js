import { mensajeAlumno, parImparMayorDe10, calcularVoltaje, personaMayorEdad, operacionesConNumeros, procesarEstudiantes, calcularTotal, calcularArea, determinarCampeonaYRecord, calcularEstadisticasNumeros,} from './functions.js'; 

describe('Pruebas para las funciones del taller 2 de JS', () => {
    test('mensajeAlumno', () => {
        expect(mensajeAlumno(2, 3, 4)).toBe("Estudie");
        expect(mensajeAlumno(5, 5, 5)).toBe("becado");
    });

    test('parImparMayorDe10', () => {
        expect(parImparMayorDe10(7)).toBe("Es impar");
        expect(parImparMayorDe10(12)).toBe("Es par y mayor de 10");
        expect(parImparMayorDe10(8)).toBe("Es par pero no mayor de 10");
    });

    test('calcularVoltaje', () => {
        expect(calcularVoltaje(10, 2)).toBe(20);
        expect(calcularVoltaje(5, 3)).toBe(15);
    });

    test('personaMayorEdad', () => {
        const personas = [
            { nombre: "Juan", edad: 25 },
            { nombre: "Ana", edad: 30 },
            { nombre: "Luis", edad: 20 },
        ];
        expect(personaMayorEdad(personas)).toBe("Ana");
    });

    test('operacionesConNumeros', () => {
        expect(operacionesConNumeros(7, 3)).toEqual({ suma: 10, resta: 4 });
        expect(operacionesConNumeros(5, 10)).toEqual({ producto: 50, division: 0.5 });
    });

    test('procesarEstudiantes', () => {
        const estudiantes = [
            { nombre: "Juan", sexo: "Hombre", nota: 90 },
            { nombre: "Ana", sexo: "Mujer", nota: 80 },
            { nombre: "Luis", sexo: "Hombre", nota: 70 },
            { nombre: "María", sexo: "Mujer", nota: 85 },
        ];
        expect(procesarEstudiantes(estudiantes)).toEqual({
            estudianteMayorNota: { nombre: "Juan", sexo: "Hombre", nota: 90 },
            estudianteMenorNota: { nombre: "Luis", sexo: "Hombre", nota: 70 },
            cantidadHombres: 2,
            cantidadMujeres: 2,
        });
    });

    test('calcularTotal', () => {
        expect(calcularTotal("CocaCola", 10, 2)).toBe(20);
        expect(calcularTotal("Pescado", 52, 4)).toBe(208);
        expect(calcularTotal("Carne de RES", 40, 76)).toBe(3040);
    });

    test('calcularArea', () => {
        expect(calcularArea("cuadrado", 5)).toBe(25);
        expect(calcularArea("rectangulo", 20, 5)).toBe(100);
    });



    test('determinarCampeonaYRecord', () => {
        const atletas = [
            { nombre: "Usaint Bolt", marca: 16 },
            { nombre: "el bicho", marca: 15.6 },
            { nombre: "Federer", marca: 15.7 },
        ];
        expect(determinarCampeonaYRecord(atletas)).toEqual({
            campeona: "Usaint Bolt",
            recordRoto: true,
        });
    });

    test('calcularEstadisticasNumeros', () => {
        const valores = [5, 10, 15, 20, 25];
        expect(calcularEstadisticasNumeros(valores)).toEqual({
            sumatoria: 75,
            promedio: 15,
            cantidad: 5,
            mayor: 25,
            menor: 5,
        });
  
    const valores2 = [5, 10, 0, 20, 25];
    expect(calcularEstadisticasNumeros(valores2)).toEqual({
        sumatoria: 15,
        promedio: 7.5,
        cantidad: 2,
        mayor: 10,
        menor: 5,
    });
});
});
