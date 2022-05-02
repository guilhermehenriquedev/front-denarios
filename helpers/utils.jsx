export function render_valor(value) {
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    var data = formatter.format(value);
    return data;
}