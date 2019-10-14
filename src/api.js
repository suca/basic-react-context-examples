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

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: 'Hey Dave',
    body: 'Yo, just wanted to say hey.'
  },
  {
    id: 1,
    subject: 'React is great',
    body: 'I thought I should let you know.'
  },
  {
    id: 2,
    subject: 'REQUEST FOR ASSISTANCE',
    body:
      'If you send me your bank account number I will reward you with $10 million whole US dollars.'
  }
];

// Generate a preview
FAKE_EMAILS.forEach(
  email => (email.preview = email.body.substr(0, 46))
);

export function fetchEmails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(FAKE_EMAILS);
    }, 300);
  });
}
