export default function formatCurrency(num) {
    return num === undefined ? ' ' : 'IDR ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

