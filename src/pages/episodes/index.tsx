import { useEffect, useState, ReactElement } from 'react';
import { getEpisodes } from 'rickmortyapi';
import { Episode } from 'rickmortyapi/dist/interfaces';
import { Header, SubHeader } from '../../components';
import Episodes from './Episodes';
import Details from './Details';
import { showErrorCatch } from '../../utils/alerts';

const Index = (): ReactElement => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [episodeSelected, setEpisodeSelected] = useState<Episode | undefined>();

  const loadEpisodes = async () => {
    try {
      const { data: { results } } = await getEpisodes();

      setEpisodeSelected(results && results[0]);
      setEpisodes(results || []);
    } catch (error) {
      showErrorCatch(error);
    }
  };

  const searchEpisodesByName = async (name: string) => {
    try {
      const { data: { results } } = await getEpisodes({ name });
      setEpisodes(results || []);
    } catch (error) {
      showErrorCatch(error);
    }
  };

  useEffect(() => {
    loadEpisodes();
  }, []);

  return (
    <>
      <Header />
      <div
        className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body"
        style={{ backgroundColor: '#F2F3F7' }}
      >
        <div className="m-grid__item m-grid__item--fluid m-wrapper">
          <SubHeader title="Episodes" />
          <div className="m-content">
            <div className="row">
              <div className="col-xl-2" />
              <Episodes
                episodes={episodes}
                setEpisodeSelected={setEpisodeSelected}
                search={searchEpisodesByName}
              />
              <Details episode={episodeSelected} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
