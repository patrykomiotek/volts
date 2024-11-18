interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async () => {
  const data: Awaited<LukeSkywalker> = await fetch(
    'https://swapi.dev/api/people/1',
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('oh no!');
  });

  return data;
};
