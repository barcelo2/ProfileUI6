const openNav = () => {
  document.getElementById('myNav').style.visibility = 'hidden';
  document.getElementById('closebtn').style.visibility = 'visible';
  document.getElementById('overlay-content').style.visibility = 'visible';
  document.getElementById('user').style.visibility = 'hidden';
  document.getElementById('stats').style.visibility = 'hidden';
};

const closeNav = () => {
  document.getElementById('myNav').style.visibility = 'visible';
  document.getElementById('closebtn').style.visibility = 'hidden';
  document.getElementById('overlay-content').style.visibility = 'hidden';
  document.getElementById('user').style.visibility = 'visible';
  document.getElementById('stats').style.visibility = 'visible';
};
