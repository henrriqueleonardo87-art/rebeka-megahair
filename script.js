/**
 * Rebeka | Mega Hair - Scripts & Interatividade
 */

// Centralized WhatsApp Configuration
// O número fornecido foi: 33 9920-1219
// Em formato internacional: DDI (55) + DDD (33) + 99201219
// Caso o seu número possua o nono dígito adicional (99920-1219), basta alterar abaixo para: '5533999201219'
const WHATSAPP_PHONE = '553399201219';

// Pre-defined customized messages for each action
const WHATSAPP_MESSAGES = {
  agendamento: 'Olá Rebeka! Gostaria de agendar um horário para Mega Hair.',
  procedimentos: 'Olá Rebeka! Gostaria de saber mais sobre os procedimentos e técnicas de Mega Hair.',
  localizacao: 'Olá Rebeka! Gostaria de saber a localização e endereço do seu espaço.',
  aprenda: 'Olá Rebeka! Tenho interesse nos seus cursos e mentorias de Mega Hair. Pode me passar mais informações?',
  geral: 'Olá Rebeka! Vim pelo site e gostaria de tirar algumas dúvidas.'
};

/**
 * Helper to build WhatsApp links
 */
function getWhatsAppUrl(type = 'geral') {
  const message = WHATSAPP_MESSAGES[type] || WHATSAPP_MESSAGES.geral;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for hero chevron
  const scrollBtn = document.querySelector('.scroll-down-btn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('#links');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Staggered entrance animation for cards
  const cards = document.querySelectorAll('.action-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
    
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 150 + index * 120);
  });

  // Haptic feedback simulation & click ripples for mobile
  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(20);
      }
    });
  });
});

