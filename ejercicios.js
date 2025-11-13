// ========================================================
// TALLER DE LÓGICA SECUENCIAL - JAVASCRIPT
// 20 Ejercicios Didácticos para Estudiantes
// ========================================================

// Definimos todos los ejercicios en un arreglo
const ejercicios = [
    // ========== EJERCICIO 1 ==========
    // Total de compra en supermercado
    {
        numero: 1,
        titulo: "Total de Compra en Supermercado 🛒",
        descripcion: "Calcular el total de tres productos",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>💰 Precio del Producto 1:</label>
                    <input type="number" id="ej1-precio1" placeholder="Ej: 5000" step="0.01">
                </div>
                <div class="grupo-entrada">
                    <label>💰 Precio del Producto 2:</label>
                    <input type="number" id="ej1-precio2" placeholder="Ej: 3500" step="0.01">
                </div>
                <div class="grupo-entrada">
                    <label>💰 Precio del Producto 3:</label>
                    <input type="number" id="ej1-precio3" placeholder="Ej: 2000" step="0.01">
                </div>
            </div>
        `,
        calcular: function() {
            // Traemos los valores del HTML
            const precio1 = parseFloat(document.getElementById('ej1-precio1').value);
            const precio2 = parseFloat(document.getElementById('ej1-precio2').value);
            const precio3 = parseFloat(document.getElementById('ej1-precio3').value);

            // Validar que los valores sean números
            if (isNaN(precio1) || isNaN(precio2) || isNaN(precio3)) {
                return { error: "Por favor ingresa números válidos en todos los campos" };
            }

            // Sumar los tres precios (esto es una suma secuencial básica)
            const total = precio1 + precio2 + precio3;

            return {
                resultado: `
                    <strong>💵 Desglose de la compra:</strong><br>
                    Producto 1: $${precio1.toFixed(2)}<br>
                    Producto 2: $${precio2.toFixed(2)}<br>
                    Producto 3: $${precio3.toFixed(2)}<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Total a pagar: $${total.toFixed(2)}
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 2 ==========
    // Área de una pared para un banner
    {
        numero: 2,
        titulo: "Área de Pared para Banner 📐",
        descripcion: "Calcular el área de una pared rectangular",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>📏 Ancho de la pared (metros):</label>
                    <input type="number" id="ej2-ancho" placeholder="Ej: 5" step="0.1">
                </div>
                <div class="grupo-entrada">
                    <label>📏 Alto de la pared (metros):</label>
                    <input type="number" id="ej2-alto" placeholder="Ej: 3" step="0.1">
                </div>
            </div>
        `,
        calcular: function() {
            const ancho = parseFloat(document.getElementById('ej2-ancho').value);
            const alto = parseFloat(document.getElementById('ej2-alto').value);

            if (isNaN(ancho) || isNaN(alto) || ancho <= 0 || alto <= 0) {
                return { error: "Por favor ingresa números positivos válidos" };
            }

            // Fórmula del área: ancho × alto
            const area = ancho * alto;

            return {
                resultado: `
                    <strong>🏗️ Dimensiones de la pared:</strong><br>
                    Ancho: ${ancho} metros<br>
                    Alto: ${alto} metros<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Área: ${area} m²
                    </strong><br>
                    <small>Necesitarás ${area} metros cuadrados de material</small>
                `
            };
        }
    },

    // ========== EJERCICIO 3 ==========
    // Perímetro de un potrero rectangular
    {
        numero: 3,
        titulo: "Perímetro de Potrero Rectangular 🌾",
        descripcion: "Calcular el perímetro de un rectángulo",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>📏 Largo del potrero (metros):</label>
                    <input type="number" id="ej3-largo" placeholder="Ej: 100" step="0.1">
                </div>
                <div class="grupo-entrada">
                    <label>📏 Ancho del potrero (metros):</label>
                    <input type="number" id="ej3-ancho" placeholder="Ej: 50" step="0.1">
                </div>
            </div>
        `,
        calcular: function() {
            const largo = parseFloat(document.getElementById('ej3-largo').value);
            const ancho = parseFloat(document.getElementById('ej3-ancho').value);

            if (isNaN(largo) || isNaN(ancho) || largo <= 0 || ancho <= 0) {
                return { error: "Por favor ingresa números positivos válidos" };
            }

            // Fórmula del perímetro: 2 × (largo + ancho)
            const perimetro = 2 * (largo + ancho);

            return {
                resultado: `
                    <strong>📏 Medidas del potrero:</strong><br>
                    Largo: ${largo} metros<br>
                    Ancho: ${ancho} metros<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Perímetro: ${perimetro} metros
                    </strong><br>
                    <small>Necesitarás ${perimetro} metros de cerca</small>
                `
            };
        }
    },

    // ========== EJERCICIO 4 ==========
    // Convertir Fahrenheit a Celsius
    {
        numero: 4,
        titulo: "Conversión °F a °C 🌡️",
        descripcion: "Convertir temperatura de Fahrenheit a Celsius",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>🌡️ Temperatura en Fahrenheit (°F):</label>
                    <input type="number" id="ej4-fahrenheit" placeholder="Ej: 98.6" step="0.1">
                </div>
            </div>
        `,
        calcular: function() {
            const fahrenheit = parseFloat(document.getElementById('ej4-fahrenheit').value);

            if (isNaN(fahrenheit)) {
                return { error: "Por favor ingresa un número válido" };
            }

            // Fórmula: (°F - 32) × 5/9
            const celsius = (fahrenheit - 32) * 5 / 9;

            return {
                resultado: `
                    <strong>🌡️ Conversión de temperatura:</strong><br>
                    Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Temperatura en Celsius: ${celsius.toFixed(2)} °C
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 5 ==========
    // Calcular edad de un usuario
    {
        numero: 5,
        titulo: "Cálculo de Edad 👤",
        descripcion: "Calcular la edad actual del usuario",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>📅 Año de nacimiento:</label>
                    <input type="number" id="ej5-año" placeholder="Ej: 2008" min="1900" max="2024">
                </div>
            </div>
        `,
        calcular: function() {
            const año = parseInt(document.getElementById('ej5-año').value);

            if (isNaN(año) || año < 1900 || año > 2024) {
                return { error: "Por favor ingresa un año válido" };
            }

            // Restar el año de nacimiento del año actual (2024)
            const edad = 2024 - año;

            return {
                resultado: `
                    <strong>👤 Información de edad:</strong><br>
                    Año de nacimiento: ${año}<br>
                    Año actual: 2024<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Edad: ${edad} años
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 6 ==========
    // Saludo formal a un cliente
    {
        numero: 6,
        titulo: "Saludo Formal 👋",
        descripcion: "Crear un saludo personalizado",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>✍️ Nombre del cliente:</label>
                    <input type="text" id="ej6-nombre" placeholder="Ej: Juan">
                </div>
                <div class="grupo-entrada">
                    <label>✍️ Apellido del cliente:</label>
                    <input type="text" id="ej6-apellido" placeholder="Ej: García">
                </div>
            </div>
        `,
        calcular: function() {
            const nombre = document.getElementById('ej6-nombre').value.trim();
            const apellido = document.getElementById('ej6-apellido').value.trim();

            if (nombre === "" || apellido === "") {
                return { error: "Por favor ingresa nombre y apellido" };
            }

            // Concatenar nombre completo (unir strings)
            const nombreCompleto = nombre + " " + apellido;

            return {
                resultado: `
                    <strong>🎯 Mensaje de Bienvenida:</strong><br>
                    <div style="
                        background: #667eea;
                        color: white;
                        padding: 15px;
                        border-radius: 5px;
                        margin-top: 10px;
                        text-align: center;
                        font-size: 18px;
                        font-weight: bold;
                    ">
                    Bienvenido, ${nombreCompleto} 👋
                    </div>
                `
            };
        }
    },

    // ========== EJERCICIO 7 ==========
    // Promedio de notas
    {
        numero: 7,
        titulo: "Promedio de Notas 📚",
        descripcion: "Calcular el promedio de 3 notas",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>📖 Nota 1 (0-5):</label>
                    <input type="number" id="ej7-nota1" placeholder="Ej: 4.5" step="0.1" min="0" max="5">
                </div>
                <div class="grupo-entrada">
                    <label>📖 Nota 2 (0-5):</label>
                    <input type="number" id="ej7-nota2" placeholder="Ej: 3.8" step="0.1" min="0" max="5">
                </div>
                <div class="grupo-entrada">
                    <label>📖 Nota 3 (0-5):</label>
                    <input type="number" id="ej7-nota3" placeholder="Ej: 4.2" step="0.1" min="0" max="5">
                </div>
            </div>
        `,
        calcular: function() {
            const nota1 = parseFloat(document.getElementById('ej7-nota1').value);
            const nota2 = parseFloat(document.getElementById('ej7-nota2').value);
            const nota3 = parseFloat(document.getElementById('ej7-nota3').value);

            if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
                return { error: "Por favor ingresa números válidos" };
            }

            if (nota1 < 0 || nota1 > 5 || nota2 < 0 || nota2 > 5 || nota3 < 0 || nota3 > 5) {
                return { error: "Las notas deben estar entre 0 y 5" };
            }

            // Calcular promedio: suma de notas / cantidad de notas
            const promedio = (nota1 + nota2 + nota3) / 3;

            // Determinar calificación
            let calificacion = "Insuficiente";
            if (promedio >= 4.5) calificacion = "Excelente";
            else if (promedio >= 4) calificacion = "Muy Bueno";
            else if (promedio >= 3) calificacion = "Bueno";

            return {
                resultado: `
                    <strong>📊 Notas del estudiante:</strong><br>
                    Nota 1: ${nota1.toFixed(1)}<br>
                    Nota 2: ${nota2.toFixed(1)}<br>
                    Nota 3: ${nota3.toFixed(1)}<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Promedio: ${promedio.toFixed(2)}
                    </strong><br>
                    Calificación: ${calificacion}
                `
            };
        }
    },

    // ========== EJERCICIO 8 ==========
    // Salario semanal de un empleado
    {
        numero: 8,
        titulo: "Salario Semanal 💼",
        descripcion: "Calcular el salario de un empleado",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>⏰ Horas trabajadas en la semana:</label>
                    <input type="number" id="ej8-horas" placeholder="Ej: 40" step="0.1">
                </div>
                <div class="grupo-entrada">
                    <label>💰 Precio por hora:</label>
                    <input type="number" id="ej8-preciohora" placeholder="Ej: 25000" step="0.1">
                </div>
            </div>
        `,
        calcular: function() {
            const horas = parseFloat(document.getElementById('ej8-horas').value);
            const precioHora = parseFloat(document.getElementById('ej8-preciohora').value);

            if (isNaN(horas) || isNaN(precioHora) || horas < 0 || precioHora < 0) {
                return { error: "Por favor ingresa números válidos y positivos" };
            }

            // Salario = horas × precio por hora
            const salario = horas * precioHora;

            return {
                resultado: `
                    <strong>💵 Cálculo de Salario:</strong><br>
                    Horas trabajadas: ${horas} horas<br>
                    Precio por hora: $${precioHora.toFixed(2)}<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Salario Total: $${salario.toFixed(2)}
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 9 ==========
    // Convertir millas a kilómetros
    {
        numero: 9,
        titulo: "Conversión Millas a km 🗺️",
        descripcion: "Convertir distancia de millas a kilómetros",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>📏 Distancia en millas:</label>
                    <input type="number" id="ej9-millas" placeholder="Ej: 10" step="0.1">
                </div>
            </div>
        `,
        calcular: function() {
            const millas = parseFloat(document.getElementById('ej9-millas').value);

            if (isNaN(millas) || millas < 0) {
                return { error: "Por favor ingresa un número válido y positivo" };
            }

            // Convertir millas a km: millas × 1.60934
            const kilometros = millas * 1.60934;

            return {
                resultado: `
                    <strong>🗺️ Conversión de distancia:</strong><br>
                    Distancia en millas: ${millas} millas<br>
                    Factor de conversión: 1 milla = 1.60934 km<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Distancia en kilómetros: ${kilometros.toFixed(2)} km
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 10 ==========
    // Convertir minutos a horas y minutos
    {
        numero: 10,
        titulo: "Conversión de Tiempo ⏱️",
        descripcion: "Convertir minutos totales a horas y minutos",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>⏱️ Total de minutos trabajados:</label>
                    <input type="number" id="ej10-minutos" placeholder="Ej: 130" step="1">
                </div>
            </div>
        `,
        calcular: function() {
            const minutosTotal = parseInt(document.getElementById('ej10-minutos').value);

            if (isNaN(minutosTotal) || minutosTotal < 0) {
                return { error: "Por favor ingresa un número válido y positivo" };
            }

            // Dividir minutos totales entre 60 para obtener horas
            const horas = Math.floor(minutosTotal / 60);
            // Los minutos restantes son el módulo de 60
            const minutos = minutosTotal % 60;

            return {
                resultado: `
                    <strong>⏱️ Conversión de tiempo:</strong><br>
                    Total de minutos: ${minutosTotal} minutos<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Equivale a: ${horas} horas y ${minutos} minutos
                    </strong><br>
                    <small>Ejemplo: 130 minutos = 2 horas y 10 minutos</small>
                `
            };
        }
    },

    // ========== EJERCICIO 11 ==========
    // Precio final con descuento
    {
        numero: 11,
        titulo: "Precio Final con Descuento 🏷️",
        descripcion: "Calcular precio final después de aplicar descuento",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>💰 Precio original:</label>
                    <input type="number" id="ej11-precio" placeholder="Ej: 100000" step="0.1">
                </div>
                <div class="grupo-entrada">
                    <label>📉 Porcentaje de descuento (%):</label>
                    <input type="number" id="ej11-descuento" placeholder="Ej: 20" step="0.1">
                </div>
            </div>
        `,
        calcular: function() {
            const precio = parseFloat(document.getElementById('ej11-precio').value);
            const descuento = parseFloat(document.getElementById('ej11-descuento').value);

            if (isNaN(precio) || isNaN(descuento) || precio < 0 || descuento < 0 || descuento > 100) {
                return { error: "Por favor ingresa valores válidos (descuento 0-100%)" };
            }

            // Calcular el monto del descuento
            const montoDescuento = precio * (descuento / 100);
            // Precio final = precio original - descuento
            const precioFinal = precio - montoDescuento;

            return {
                resultado: `
                    <strong>🏷️ Cálculo de descuento:</strong><br>
                    Precio original: $${precio.toFixed(2)}<br>
                    Descuento: ${descuento}% = $${montoDescuento.toFixed(2)}<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Precio final: $${precioFinal.toFixed(2)}
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 12 ==========
    // Calcular IVA (19%)
    {
        numero: 12,
        titulo: "Cálculo de IVA (19%) 🧾",
        descripcion: "Calcular IVA y precio total",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>💰 Precio base (sin IVA):</label>
                    <input type="number" id="ej12-precio" placeholder="Ej: 100000" step="0.1">
                </div>
            </div>
        `,
        calcular: function() {
            const precio = parseFloat(document.getElementById('ej12-precio').value);

            if (isNaN(precio) || precio < 0) {
                return { error: "Por favor ingresa un número válido y positivo" };
            }

            // IVA = precio × 0.19 (19%)
            const iva = precio * 0.19;
            // Total = precio + IVA
            const total = precio + iva;

            return {
                resultado: `
                    <strong>🧾 Cálculo de IVA:</strong><br>
                    Precio base: $${precio.toFixed(2)}<br>
                    IVA (19%): $${iva.toFixed(2)}<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Precio total: $${total.toFixed(2)}
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 13 ==========
    // Interés simple en inversión
    {
        numero: 13,
        titulo: "Interés Simple 💰",
        descripcion: "Calcular capital final con interés simple",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>💵 Capital inicial:</label>
                    <input type="number" id="ej13-capital" placeholder="Ej: 1000000" step="0.1">
                </div>
                <div class="grupo-entrada">
                    <label>📊 Tasa de interés anual (%):</label>
                    <input type="number" id="ej13-tasa" placeholder="Ej: 5" step="0.1">
                </div>
                <div class="grupo-entrada">
                    <label>📅 Número de años:</label>
                    <input type="number" id="ej13-años" placeholder="Ej: 3" step="0.1">
                </div>
            </div>
        `,
        calcular: function() {
            const capital = parseFloat(document.getElementById('ej13-capital').value);
            const tasa = parseFloat(document.getElementById('ej13-tasa').value);
            const años = parseFloat(document.getElementById('ej13-años').value);

            if (isNaN(capital) || isNaN(tasa) || isNaN(años) || capital < 0 || tasa < 0 || años < 0) {
                return { error: "Por favor ingresa números válidos y positivos" };
            }

            // Fórmula de interés simple: Capital × (Tasa/100) × Años
            const interes = capital * (tasa / 100) * años;
            // Capital final = capital inicial + interés
            const capitalFinal = capital + interes;

            return {
                resultado: `
                    <strong>💰 Cálculo de inversión:</strong><br>
                    Capital inicial: $${capital.toFixed(2)}<br>
                    Tasa de interés: ${tasa}% anual<br>
                    Años: ${años}<br>
                    Interés generado: $${interes.toFixed(2)}<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Capital final: $${capitalFinal.toFixed(2)}
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 14 ==========
    // Área de un triángulo
    {
        numero: 14,
        titulo: "Área de Triángulo 📐",
        descripcion: "Calcular el área de un triángulo",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>📏 Base del triángulo:</label>
                    <input type="number" id="ej14-base" placeholder="Ej: 10" step="0.1">
                </div>
                <div class="grupo-entrada">
                    <label>📏 Altura del triángulo:</label>
                    <input type="number" id="ej14-altura" placeholder="Ej: 8" step="0.1">
                </div>
            </div>
        `,
        calcular: function() {
            const base = parseFloat(document.getElementById('ej14-base').value);
            const altura = parseFloat(document.getElementById('ej14-altura').value);

            if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
                return { error: "Por favor ingresa números válidos y positivos" };
            }

            // Área del triángulo = (base × altura) / 2
            const area = (base * altura) / 2;

            return {
                resultado: `
                    <strong>📐 Cálculo de área:</strong><br>
                    Base: ${base} unidades<br>
                    Altura: ${altura} unidades<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Área: ${area.toFixed(2)} unidades²
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 15 ==========
    // Intercambiar nombre y apellido
    {
        numero: 15,
        titulo: "Intercambiar Datos 🔄",
        descripcion: "Intercambiar nombre y apellido",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>✍️ Nombre:</label>
                    <input type="text" id="ej15-nombre" placeholder="Ej: Carlos">
                </div>
                <div class="grupo-entrada">
                    <label>✍️ Apellido:</label>
                    <input type="text" id="ej15-apellido" placeholder="Ej: López">
                </div>
            </div>
        `,
        calcular: function() {
            const nombre = document.getElementById('ej15-nombre').value.trim();
            const apellido = document.getElementById('ej15-apellido').value.trim();

            if (nombre === "" || apellido === "") {
                return { error: "Por favor ingresa nombre y apellido" };
            }

            // Intercambiar: usar temporal o simplemente mostrar al revés
            const nombreIntercambiado = apellido;
            const apellidoIntercambiado = nombre;

            return {
                resultado: `
                    <strong>🔄 Datos intercambiados:</strong><br>
                    Datos originales:<br>
                    Nombre: ${nombre}<br>
                    Apellido: ${apellido}<br>
                    <br>
                    Datos intercambiados:<br>
                    <strong style="color: #28a745;">
                    Nombre: ${nombreIntercambiado}<br>
                    Apellido: ${apellidoIntercambiado}
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 16 ==========
    // Conversor de divisas (USD a COP)
    {
        numero: 16,
        titulo: "Conversor de Divisas 💱",
        descripcion: "Convertir dólares a pesos colombianos",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>💵 Cantidad en dólares (USD):</label>
                    <input type="number" id="ej16-dolares" placeholder="Ej: 100" step="0.01">
                </div>
            </div>
        `,
        calcular: function() {
            const dolares = parseFloat(document.getElementById('ej16-dolares').value);

            if (isNaN(dolares) || dolares < 0) {
                return { error: "Por favor ingresa un número válido y positivo" };
            }

            // Tasa de cambio: 1 USD = 3900 COP
            const tasaCambio = 3900;
            // Convertir dólares a pesos
            const pesos = dolares * tasaCambio;

            return {
                resultado: `
                    <strong>💱 Conversión de divisas:</strong><br>
                    Cantidad en USD: $${dolares.toFixed(2)}<br>
                    Tasa de cambio: 1 USD = ${tasaCambio} COP<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Cantidad en COP: $${pesos.toFixed(2)} pesos
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 17 ==========
    // Convertir libras a kilogramos
    {
        numero: 17,
        titulo: "Conversión lb a kg ⚖️",
        descripcion: "Convertir peso de libras a kilogramos",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>⚖️ Peso en libras (lb):</label>
                    <input type="number" id="ej17-libras" placeholder="Ej: 150" step="0.1">
                </div>
            </div>
        `,
        calcular: function() {
            const libras = parseFloat(document.getElementById('ej17-libras').value);

            if (isNaN(libras) || libras < 0) {
                return { error: "Por favor ingresa un número válido y positivo" };
            }

            // Convertir libras a kg: libras × 0.453592
            const kilogramos = libras * 0.453592;

            return {
                resultado: `
                    <strong>⚖️ Conversión de peso:</strong><br>
                    Peso en libras: ${libras} lb<br>
                    Factor de conversión: 1 lb = 0.453592 kg<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Peso en kilogramos: ${kilogramos.toFixed(2)} kg
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 18 ==========
    // Suma de dígitos de un número
    {
        numero: 18,
        titulo: "Suma de Dígitos 🔢",
        descripcion: "Sumar los dígitos de un número de dos cifras",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>🔢 Número de dos cifras:</label>
                    <input type="number" id="ej18-numero" placeholder="Ej: 47" min="10" max="99">
                </div>
            </div>
        `,
        calcular: function() {
            const numero = parseInt(document.getElementById('ej18-numero').value);

            if (isNaN(numero) || numero < 10 || numero > 99) {
                return { error: "Por favor ingresa un número entre 10 y 99" };
            }

            // Obtener dígitos: dividir entre 10 y usar módulo
            const primerDigito = Math.floor(numero / 10);    // Decenas
            const segundoDigito = numero % 10;                // Unidades
            // Sumar los dígitos
            const suma = primerDigito + segundoDigito;

            return {
                resultado: `
                    <strong>🔢 Suma de dígitos:</strong><br>
                    Número: ${numero}<br>
                    Dígitos: ${primerDigito} + ${segundoDigito}<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Suma: ${suma}
                    </strong><br>
                    <small>Ejemplo: 47 = 4 + 7 = 11</small>
                `
            };
        }
    },

    // ========== EJERCICIO 19 ==========
    // Calcular refrescos para un evento
    {
        numero: 19,
        titulo: "Cálculo de Refrescos 🥤",
        descripcion: "Calcular total de refrescos para un evento",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>👥 Número de asistentes:</label>
                    <input type="number" id="ej19-asistentes" placeholder="Ej: 50" step="1">
                </div>
            </div>
        `,
        calcular: function() {
            const asistentes = parseInt(document.getElementById('ej19-asistentes').value);

            if (isNaN(asistentes) || asistentes <= 0) {
                return { error: "Por favor ingresa un número válido y positivo" };
            }

            // Cada asistente toma 3 refrescos
            const refrescosXPersona = 3;
            const totalRefrescos = asistentes * refrescosXPersona;

            return {
                resultado: `
                    <strong>🥤 Cálculo de refrescos:</strong><br>
                    Número de asistentes: ${asistentes} personas<br>
                    Refrescos por persona: ${refrescosXPersona}<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Total de refrescos necesarios: ${totalRefrescos}
                    </strong>
                `
            };
        }
    },

    // ========== EJERCICIO 20 ==========
    // Velocidad promedio
    {
        numero: 20,
        titulo: "Velocidad Promedio 🚗",
        descripcion: "Calcular la velocidad promedio de un auto",
        html: `
            <div class="formulario">
                <div class="grupo-entrada">
                    <label>🛣️ Distancia recorrida (km):</label>
                    <input type="number" id="ej20-distancia" placeholder="Ej: 150" step="0.1">
                </div>
                <div class="grupo-entrada">
                    <label>⏱️ Tiempo (horas):</label>
                    <input type="number" id="ej20-tiempo" placeholder="Ej: 2.5" step="0.1">
                </div>
            </div>
        `,
        calcular: function() {
            const distancia = parseFloat(document.getElementById('ej20-distancia').value);
            const tiempo = parseFloat(document.getElementById('ej20-tiempo').value);

            if (isNaN(distancia) || isNaN(tiempo) || distancia < 0 || tiempo <= 0) {
                return { error: "Por favor ingresa valores válidos (tiempo mayor a 0)" };
            }

            // Velocidad = distancia / tiempo
            const velocidad = distancia / tiempo;

            return {
                resultado: `
                    <strong>🚗 Cálculo de velocidad:</strong><br>
                    Distancia recorrida: ${distancia} km<br>
                    Tiempo empleado: ${tiempo} horas<br>
                    <strong style="color: #28a745; font-size: 16px;">
                    Velocidad promedio: ${velocidad.toFixed(2)} km/h
                    </strong>
                `
            };
        }
    }
];

// ========================================================
// FUNCIONES PRINCIPALES DE LA APLICACIÓN
// ========================================================

// Función para crear dinámicamente los botones de los ejercicios
function crearBotones() {
    const contenedor = document.getElementById('botonesEjercicios');
    
    ejercicios.forEach(ejercicio => {
        const boton = document.createElement('button');
        boton.className = 'btn-ejercicio';
        boton.textContent = `Ej. ${ejercicio.numero}`;
        boton.addEventListener('click', () => mostrarEjercicio(ejercicio.numero - 1));
        contenedor.appendChild(boton);
    });
}

// Función para mostrar un ejercicio específico
function mostrarEjercicio(indice) {
    const ejercicio = ejercicios[indice];
    const contenedor = document.getElementById('ejerciciosContenedor');
    
    // Limpiar contenedor anterior
    contenedor.innerHTML = '';
    
    // Crear HTML para el ejercicio
    const div = document.createElement('div');
    div.className = 'contenedor-ejercicio';
    div.innerHTML = `
        <div class="titulo-ejercicio">${ejercicio.titulo}</div>
        <p>${ejercicio.descripcion}</p>
        ${ejercicio.html}
        <div class="botones-acciones">
            <button class="btn-calcular" onclick="ejecutarEjercicio(${indice})">
                ✅ Calcular
            </button>
            <button class="btn-limpiar" onclick="limpiarEjercicio(${indice})">
                🗑️ Limpiar
            </button>
        </div>
        <div id="resultado-${indice}" class="resultado"></div>
        <div id="error-${indice}" class="error"></div>
    `;
    
    contenedor.appendChild(div);
}

// Función para ejecutar un ejercicio
function ejecutarEjercicio(indice) {
    const ejercicio = ejercicios[indice];
    const respuesta = ejercicio.calcular();
    
    // Obtener elementos de resultado y error
    const divResultado = document.getElementById(`resultado-${indice}`);
    const divError = document.getElementById(`error-${indice}`);
    
    // Limpiar mensajes previos
    divResultado.classList.remove('mostrar');
    divError.classList.remove('mostrar');
    
    if (respuesta.error) {
        // Mostrar error
        divError.innerHTML = `⚠️ ${respuesta.error}`;
        divError.classList.add('mostrar');
    } else {
        // Mostrar resultado
        divResultado.innerHTML = `<h3>✅ Resultado:</h3><p>${respuesta.resultado}</p>`;
        divResultado.classList.add('mostrar');
    }
}

// Función para limpiar los inputs y resultados
function limpiarEjercicio(indice) {
    // Limpiar todos los inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => input.value = '');
    
    // Limpiar mensajes
    const divResultado = document.getElementById(`resultado-${indice}`);
    const divError = document.getElementById(`error-${indice}`);
    divResultado.classList.remove('mostrar');
    divError.classList.remove('mostrar');
}

// ========================================================
// INICIAR LA APLICACIÓN
// ========================================================

// Crear botones cuando carga la página
window.addEventListener('DOMContentLoaded', function() {
    crearBotones();
    // Mostrar el primer ejercicio por defecto
    mostrarEjercicio(0);
});
