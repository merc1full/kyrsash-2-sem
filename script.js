document.addEventListener('DOMContentLoaded', function () {
    const playerCards = document.querySelectorAll('.player-card');

    // Добавляем обработчики событий для каждой карточки
    playerCards.forEach(card => {
        // Эффект при наведении
        card.addEventListener('mouseenter', function () {
            this.style.cursor = 'pointer';
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
            this.style.transition = 'all 0.3s ease';
        });

        // Возврат к исходному состоянию при уходе курсора
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
        });


    });


});
