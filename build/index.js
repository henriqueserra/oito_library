"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formatters = exports.validanup = exports.validaDocumento = void 0;
const formataDocumento_1 = __importDefault(require("./formataDocumento"));
const formataNup_1 = __importDefault(require("./formataNup"));
function validaDocumento(documento) {
    return (0, formataDocumento_1.default)(documento);
}
exports.validaDocumento = validaDocumento;
function validanup(nup) {
    const nupValidacao = new formataNup_1.default(nup);
    return nupValidacao.validaNup();
}
exports.validanup = validanup;
class Formatters {
    // formata a data para o formato dd/MM/yyyy
    static formatDateFromString(date) {
        return Intl.DateTimeFormat('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            dateStyle: 'short',
        }).format(new Date(date));
    }
    // formata a data para o formato dd/MM/yyyy
    static formatDateFromDate(date) {
        return Intl.DateTimeFormat('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            dateStyle: 'short',
        }).format(date);
    }
    // formata a data para o formato dd/MM/yyyy HH:mm
    static formatDateAndHourFromString(date) {
        return Intl.DateTimeFormat('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            dateStyle: 'short',
            timeStyle: 'short',
        }).format(new Date(date));
    }
    // formata a data para o formato dd/MM/yyyy HH:mm
    static formatDateAndHourFromDate(date) {
        return Intl.DateTimeFormat('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            dateStyle: 'short',
            timeStyle: 'short',
        }).format(date);
    }
    static response(data, paginator, warning, error) {
        return {
            success: !!data,
            warning: !!warning ? warning : null,
            data: !!data ? data : null,
            error: {
                message: !!error ? error.message : null,
                stack: !!error ? error.stack : null,
                name: !!error ? error.name : null,
            },
            paginator,
        };
    }
}
exports.Formatters = Formatters;
