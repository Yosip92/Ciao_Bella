var session = {
  'screens': [],
  'state': true
};
localStorage.setItem('session', JSON.stringify(session));

var restoredSession = JSON.parse(localStorage.getItem('session'));
console.log(restoredSession);