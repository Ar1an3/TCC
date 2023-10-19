document.addEventListener('DOMContentLoaded', function () {
    // Verifique se o usuário está em um dispositivo móvel
    if (isMobileDevice()) {
        // Se for um dispositivo móvel, exiba o h2
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.style.display = 'block';
    } else {
        // Caso contrário, oculte o h2
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.style.display = 'none';
    }

    // Função para verificar se o dispositivo é móvel
    function isMobileDevice() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        console.log('É um dispositivo móvel?', isMobile);
        return isMobile;
    }
    
});

