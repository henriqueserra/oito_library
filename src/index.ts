import validaDocumentoController from './formataDocumento'
import NupValidacao from './formataNup'

export function validaDocumento(documento: string): {
  status: boolean
  documentoOriginal: string
  documentoFormatado: string
  type: string
} {
  return validaDocumentoController(documento)
}

export function validanup(nup: string): {
  status: boolean
  documentoOriginal: string
  documentoFormatado: string
} {
  const nupValidacao = new NupValidacao(nup)
  return nupValidacao.validaNup()
}

export class Formatters {
  // formata a data para o formato dd/MM/yyyy
  static formatDateFromString(date: string): string {
    return Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      dateStyle: 'short',
    }).format(new Date(date))
  }

  // formata a data para o formato dd/MM/yyyy
  static formatDateFromDate(date: Date): string {
    return Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      dateStyle: 'short',
    }).format(date)
  }

  // formata a data para o formato dd/MM/yyyy HH:mm
  static formatDateAndHourFromString(date: string): string {
    return Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date(date))
  }

  // formata a data para o formato dd/MM/yyyy HH:mm
  static formatDateAndHourFromDate(date: Date): string {
    return Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(date)
  }

  static response(data: any, paginator: any, warning: any, error: any) {
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
    }
  }
}
