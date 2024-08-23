const apiKey = '';

async function obtenerIntercambios() {
    const Response= await fetch('https://rest.coinapi.io/v1/exchanges', {
        headers: {
            'X-CoinAPI-Key': apiKey
        }
    });

    const datos = await Response.json();  
    mostrarIntercambios(datos);  
}

function mostrarIntercambios(intercambios) {
    const listaIntercambios = document.getElementById('lista-intercambios');


    intercambios.slice(0, 16).forEach(intercambio => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = `${intercambio.name}: Volumen (1hr): $${intercambio.volume_1hrs_usd.toFixed(2)}, Volumen (1día): $${intercambio.volume_1day_usd.toFixed(2)}`;
        listaIntercambios.appendChild(elementoLista);
    });
}

obtenerIntercambios();

