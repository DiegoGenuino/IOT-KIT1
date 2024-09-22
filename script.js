
// Mostrar o campo de Broker quando o modo Cliente (MQTT) for selecionado
document.getElementsByName('modo').forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.value === 'cliente') {
            document.getElementById('broker-div').style.display = 'block';
        } else {
            document.getElementById('broker-div').style.display = 'none';
        }
    });
});

// Mostrar ou esconder os campos do Firebase quando "Sim" ou "Não" forem selecionados
document.getElementsByName('usar-firebase').forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.value === 'sim') {
            document.getElementById('firebase-auth').style.display = 'block';
        } else {
            document.getElementById('firebase-auth').style.display = 'none';
        }
    });
});

// Mostrar o campo de Broker quando o modo Cliente (MQTT) for selecionado
document.getElementsByName('ToggleDinamico').forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.value === 'cliente') {
            document.getElementById('broker-div').style.display = 'block';
        } else {
            document.getElementById('broker-div').style.display = 'none';
        }
    });
});