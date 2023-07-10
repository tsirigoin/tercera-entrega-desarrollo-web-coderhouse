let OutOfStockNotification = document.getElementById('buy-btn');
OutOfStockNotification.addEventListener('click',OutOfStockFunction);

function OutOfStockFunction(){
    Swal.fire({
        title: 'Sin stock',
        text: "El libro solicitado se encuentra sin stock actualmente.",
        icon: 'info',
        confirmButtonText: 'Aceptar',
    })
}