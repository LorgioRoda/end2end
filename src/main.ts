import './style.css'
document.getElementById('test-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const testFile = (document.getElementById('test-select') as HTMLSelectElement).value;
  if (testFile) {
    try {
      const response = await fetch(' http://localhost:3001/run-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ testFile }),
      });
      const result = await response.text();
    } catch (error) {
      console.error('Error:', error);
    }
  }
});


