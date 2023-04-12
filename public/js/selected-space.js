const selectedid = document.querySelector('#').value; 

const selectedspaceHandler = async (event) => {
    event.preventDefault();

const unknown = document.querySelector('#').value.trim();
const unknown2 = document.querySelector('#').value.trim();

    if (unknown && unknown2) {
      const response = await fetch(`/api/select/${selectedid}`, {
        method: 'GET',
        unknown,
        unknown2,
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/selected-space');
      } else {
        alert('Response Failed');
      }
    }
  };

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);