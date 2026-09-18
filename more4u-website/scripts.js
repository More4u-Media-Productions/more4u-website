document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const nav = document.querySelector('.main-nav');
      if (!nav) return;
      nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
    });
  }
});

function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){
    alert('Please complete all fields.');
    return false;
  }
  const subject = encodeURIComponent('Contact from More4u website: ' + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:contact@more4uproductions.dedyn.io?subject=${subject}&body=${body}`;
  return false;
}
