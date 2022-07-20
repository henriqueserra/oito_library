"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validaDocumento(documento) {
    if (documento == '') {
        return {
            status: false,
            documentoOriginal: '',
            documentoFormatado: '',
            type: '',
        };
    }
    documento = documento.replace(/[^\d]+/g, '');
    // Valida CPF
    if (documento.length == 14) {
        var result = isValidCnpj(documento);
        return {
            status: result,
            documentoOriginal: documento,
            documentoFormatado: cnpj(documento),
            type: 'cnpj',
        };
    }
    else if (documento.length == 11) {
        var result = isValidCpf(documento);
        return {
            status: result,
            documentoOriginal: documento,
            documentoFormatado: cpf(documento),
            type: 'cpf',
        };
    }
    else {
        return {
            status: false,
            type: '',
            documentoOriginal: documento,
            documentoFormatado: '',
        };
    }
}
exports.default = validaDocumento;
function isValidCpf(value) {
    if (typeof value !== 'string') {
        return false;
    }
    value = value.replace(/[^\d]+/g, '');
    if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
        return false;
    }
    const values = value.split('').map((el) => +el);
    const rest = (count) => ((values
        .slice(0, count - 12)
        .reduce((soma, el, index) => soma + el * (count - index), 0) *
        10) %
        11) %
        10;
    return rest(10) === values[9] && rest(11) === values[10];
}
function isValidCnpj(cnpj) {
    var tamanho = cnpj.length - 2;
    var numeros = cnpj.substring(0, tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
        if (pos < 2)
            pos = 9;
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != parseInt(digitos.charAt(0)))
        return false;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != parseInt(digitos.charAt(1)))
        return false;
    return true;
}
function cpf(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
function cnpj(cnpj) {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}
