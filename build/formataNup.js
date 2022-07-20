"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NupValidacao {
    numerobrutoString;
    nup;
    numeroSequencial;
    digitoVerificador;
    anoAjuizamento;
    segmentoJustica;
    tribunal;
    unidadeOrigem;
    numeroPreCalculoDigitoVerificador;
    numeroPreCalculoDigitoVerificadorInt;
    digitoVerificadorCalculado;
    digitoVerificadorCalculadoInt;
    validado;
    constructor(numerobrutoString) {
        this.numerobrutoString = numerobrutoString.trim();
        this.nup = this.numerobrutoString.replaceAll('.', '').replaceAll('-', '');
        this.numeroSequencial = '';
        this.digitoVerificador = '';
        this.anoAjuizamento = '';
        this.segmentoJustica = '';
        this.tribunal = '';
        this.unidadeOrigem = '';
        this.numeroPreCalculoDigitoVerificador = '';
        this.numeroPreCalculoDigitoVerificadorInt = 0;
        this.digitoVerificadorCalculado = '';
        this.digitoVerificadorCalculadoInt = 0;
        this.validado = false;
    }
    validaNup() {
        if (this.nup.length != 20) {
            return {
                status: false,
                documentoOriginal: this.nup,
                documentoFormatado: '',
            };
        }
        this.numeroSequencial = this.nup.substring(0, 7);
        this.digitoVerificador = this.nup.substring(7, 9);
        this.anoAjuizamento = this.nup.substring(9, 13);
        this.segmentoJustica = this.nup.substring(13, 14);
        this.tribunal = this.nup.substring(14, 16);
        this.unidadeOrigem = this.nup.substring(16, 20);
        this.calculaDigitoVerificador();
        if (this.digitoVerificador === this.digitoVerificadorCalculado) {
            this.validado = true;
        }
        return {
            status: this.validado,
            documentoOriginal: this.nup,
            documentoFormatado: this.formataNup(this.nup),
        };
    }
    calculaDigitoVerificador() {
        this.numeroPreCalculoDigitoVerificador =
            this.numeroSequencial +
                this.anoAjuizamento +
                this.segmentoJustica +
                this.tribunal +
                this.unidadeOrigem;
        this.numeroPreCalculoDigitoVerificadorInt =
            BigInt(this.numeroPreCalculoDigitoVerificador) * BigInt(100);
        const modulo = BigInt(97);
        const divisor = BigInt(this.numeroPreCalculoDigitoVerificadorInt);
        this.digitoVerificadorCalculadoInt =
            98 - parseInt((divisor % modulo).toString()) + 100;
        this.digitoVerificadorCalculado = this.digitoVerificadorCalculadoInt
            .toString()
            .slice(-2);
        return this.digitoVerificadorCalculado;
    }
    formataNup(nup) {
        return nup.replace(/(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/, '$1-$2.$3.$4.$5.$6');
    }
}
exports.default = NupValidacao;
