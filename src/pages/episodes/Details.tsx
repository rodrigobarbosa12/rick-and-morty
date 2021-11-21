/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useEffect, useState, useCallback, ReactElement,
} from 'react';
import { getCharacter } from 'rickmortyapi';
import {
  Character,
  // Episode, Tipagem não condiz com o objeto real
} from 'rickmortyapi/dist/interfaces';
import { Scroll } from '../../components';
import { showErrorCatch } from '../../utils/alerts';

interface Props {
  episode: any | undefined
}

const Details = ({ episode }: Props): ReactElement => {
  const [characters, setCharacters] = useState<Character | Character[]>([]);

  const loadEpisodios = useCallback(async () => {
    try {
      if (!episode) {
        return;
      }

      const ids = episode.characters.map((e: string) => Number(e.replace(/\D/g, '')));
      const { data } = await getCharacter(ids);

      setCharacters(data);
    } catch (error) {
      showErrorCatch(error);
    }
  }, [episode]);

  useEffect(() => {
    loadEpisodios();
  }, [loadEpisodios]);

  return (
    <>
      {episode ? (
        <div
          className={`col-xl-3 animated ${episode.id % 2 === 0 ? 'fadeInDown' : 'fadeInRight'}`}
        >
          <div className="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
            <div className="m-portlet__head m-portlet__head--fit" />
            <div className="m-portlet__body">
              <div className="m-widget19">
                <div
                  className="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides"
                  style={{ padding: 15 }}
                >
                  <img
                    src="/images/logo.png"
                    alt={episode?.name}
                  />
                </div>
                <div className="m-widget19__content">
                  <div className="m-widget19__header">
                    <div className="m-widget19__info">
                      <span className="m-widget19__username">
                        {episode?.name}
                      </span>
                      <br />
                      <span className="m-widget19__time">
                        {episode.air_date}
                      </span>
                    </div>
                  </div>
                  <div className="m-widget19__body">
                    <span className="m-widget4__text">
                      List of characters
                    </span>
                    <div className="tab-content">
                      <div className="tab-pane active" id="m_widget4_tab1_content">
                        <div className="m-list-timeline m-list-timeline--skin-light">
                          <div className="m-list-timeline__items">
                            <Scroll width="107%" height={313}>
                              {Array.isArray(characters) ? characters.map((character) => (
                                <div key={character.id} className="m-list-timeline__item">
                                  <span className="m-list-timeline__badge m-list-timeline__badge--info" />
                                  <span className="m-list-timeline__text">
                                    {character.name}
                                  </span>
                                  <span className="m-list-timeline__time">
                                    {character.origin.name}
                                  </span>
                                </div>
                              )) : (
                                <div key={characters.id} className="m-list-timeline__item">
                                  <span className="m-list-timeline__badge m-list-timeline__badge--brand" />
                                  <span className="m-list-timeline__text">
                                    {characters.name}
                                  </span>
                                  <span className="m-list-timeline__time">
                                    {characters.origin.name}
                                  </span>
                                </div>
                              )}
                            </Scroll>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Details;
