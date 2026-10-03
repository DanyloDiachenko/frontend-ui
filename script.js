document.addEventListener('DOMContentLoaded', () => {
  const tabContainers = document.querySelectorAll('.tab-container');

  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.tab-btn');
    const content = container.querySelector('.tab-content');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const tabText = button.getAttribute('data-tab-name') || button.textContent;
        if (content) {
          content.textContent = `Вміст вкладки: ${tabText}`;
        }
      });
    });
  });
});
