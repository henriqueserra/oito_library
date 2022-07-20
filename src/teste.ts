import { validaDocumento, validanup, Formatters } from './index'

console.log(JSON.stringify(validaDocumento('142.479.188-00')))

console.log(JSON.stringify(validanup('1512439-81.2021.8.26.0050')))

console.log(Formatters.formatDateAndHourFromString(new Date().toISOString()))
