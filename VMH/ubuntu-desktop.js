document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const summaryCPU = document.querySelector('#summary-cpu');
    const summaryRAM = document.querySelector('#summary-ram');
    const summaryStorage = document.querySelector('#summary-storage');
    const summaryOS = document.querySelector('#summary-os');
    const summaryPrice = document.querySelector('#summary-price');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const cpu = document.querySelector('#cpu').value;
      const ram = document.querySelector('#ram').value;
      const storage = document.querySelector('#storage').value;
      const os = document.querySelector('#os').value;
  
      summaryCPU.textContent = cpu + ' vCPU';
      summaryRAM.textContent = ram + ' GB';
      summaryStorage.textContent = storage + ' GB';
      summaryOS.textContent = os;
      summaryPrice.textContent = '$' + calculatePrice(cpu, ram, storage);
    });
  
    function calculatePrice(cpu, ram, storage) {
      const cpuPrice = 4.50 * cpu;
      const ramPrice = 1 * ram;
      const storagePrice = 0.025 * storage;
      return (cpuPrice + ramPrice + storagePrice).toFixed(2);
    }
  });