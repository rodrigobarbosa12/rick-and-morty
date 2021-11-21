import { useEffect, useState, ReactElement } from 'react';
import { getCharacters } from 'rickmortyapi';
import { Character } from 'rickmortyapi/dist/interfaces';
import { Header, SubHeader } from '../../components';
import Characters from './Characters';
import Details from './Details';
import { showErrorCatch } from '../../utils/alerts';

const Index = (): ReactElement => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [characterSelected, setCharacterSelected] = useState<Character | undefined>();

  const loadCharacters = async () => {
    try {
      const { data: { results } } = await getCharacters();

      setCharacterSelected(results && results[0]);
      setCharacters(results || []);
    } catch (error) {
      showErrorCatch(error);
    }
  };

  const searchCharactersByName = async (name: string) => {
    try {
      const { data: { results } } = await getCharacters({ name });
      setCharacters(results || []);
    } catch (error) {
      showErrorCatch(error);
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <>
      <Header />
      <div
        className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body"
        style={{ backgroundColor: '#F2F3F7' }}
      >
        <div className="m-grid__item m-grid__item--fluid m-wrapper">
          <SubHeader title="Characters" />
          <div className="m-content">
            <div className="row">
              <div className="col-xl-2" />
              <Characters
                characters={characters}
                setCharacterSelected={setCharacterSelected}
                search={searchCharactersByName}
              />
              <Details character={characterSelected} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
