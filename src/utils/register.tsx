const register = async (name: string, email: string, password?: string) => {
  try {
    const res = await fetch(
      'https://api.melnikovst.films.nomoredomainsclub.ru/signup',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

/* export const login = async (email: string, password?: string) => {
  const res = await fetch(
    'https://api.melnikovst.films.nomoredomainsclub.ru/signin',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    }
  );
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  Promise.reject('ошибка');
}; */

export default register;
