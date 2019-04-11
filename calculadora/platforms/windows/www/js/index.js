/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var calculado=false;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.getElementById("boton").addEventListener("click", calcular, false);
        document.getElementById("botonlimpiar").addEventListener("click", limpiar, false);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

    
};
function limpiar(){
    document.getElementById('agente').innerHTML="Sumas: ";
    document.getElementById('cheque').innerHTML="Valor de Cheque: ";
    document.getElementById('iva').innerHTML="+ 13% IVA: ";
    document.getElementById('retencion').innerHTML="- 1% Retención: ";
    document.getElementById('total').innerHTML="Total: ";
    document.getElementById('valorconiva').innerHTML="Subtotal: ";
    document.getElementById('valor').value="";
}
function calcular(){
    if(document.getElementById('valor').value!=""){
        
    if(calculado){
    document.getElementById('agente').innerHTML="Sumas: ";
    document.getElementById('cheque').innerHTML="Valor de Cheque: ";
    document.getElementById('iva').innerHTML="+ 13% IVA: ";
    document.getElementById('retencion').innerHTML="- 1% Retención: ";
    document.getElementById('total').innerHTML="Total: ";
    document.getElementById('valorconiva').innerHTML="Subtotal: ";
    }
    var agente= parseFloat(document.getElementById('valor').value);
    var iva = parseFloat((agente*0.13).toFixed(2));
    var valorconiva = parseFloat((agente+iva).toFixed(2));
    var retencion = parseFloat((agente*0.01).toFixed(2));
    var total = parseFloat((agente+iva-retencion).toFixed(2));
    var renta = parseFloat((agente*0.1).toFixed(2));
    var cheque = parseFloat((total- renta).toFixed(2));
    document.getElementById('agente').innerHTML+= agente.toString();
    document.getElementById('cheque').innerHTML+=cheque.toString();
    document.getElementById('iva').innerHTML+=iva.toString();
    document.getElementById('retencion').innerHTML+=retencion.toString();
    // document.getElementById('renta').value=renta.toString();
    document.getElementById('total').innerHTML+=total.toString();
    document.getElementById('valorconiva').innerHTML+=valorconiva.toString();
    calculado=true;
    
}else{
    limpiar();
}
}
app.initialize();