export const FAKE_USER = {
  firstName: 'Omar',
  lastName: 'Sucapuca',
  username: 'suca',
  avatar:
    'https://s.gravatar.com/avatar/bd53a2a21f768a15110b37403a3395d5?s=80'
};

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'omar' && password === 'pass') {
        resolve(FAKE_USER);
      } else {
        reject({ message: 'Invalid username or password' });
      }
    }, 300);
  });
}
