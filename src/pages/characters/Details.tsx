import {
  useEffect, useState, useCallback, ReactElement,
} from 'react';
import { getEpisode } from 'rickmortyapi';
import { Character, Episode } from 'rickmortyapi/dist/interfaces';
import { Scroll } from '../../components';
import { showErrorCatch } from '../../utils/alerts';

interface Props {
  character: Character | undefined
}

const Details = ({ character }: Props): ReactElement => {
  const [episodes, setEpisodes] = useState<Episode | Episode[]>([]);

  const loadEpisodios = useCallback(async () => {
    try {
      if (!character) {
        return;
      }

      const ids = character.episode.map((e) => Number(e.replace(/\D/g, '')));
      const { data } = await getEpisode(ids);

      setEpisodes(data);
    } catch (error) {
      showErrorCatch(error);
    }
  }, [character]);

  useEffect(() => {
    loadEpisodios();
  }, [loadEpisodios]);

  return (
    <>
      {character ? (
        <div
          className={`col-xl-3 animated ${character.id % 2 === 0 ? 'fadeInDown' : 'fadeInRight'}`}
        >
          <div className="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
            <div className="m-portlet__head m-portlet__head--fit" />
            <div className="m-portlet__body">
              <div className="m-widget19">
                <div
                  className="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides"
                >
                  <img
                    src={character?.image}
                    alt={character?.name}
                  />
                  <h3 className="m-widget19__title m--font-light">
                    {character?.name}
                  </h3>
                </div>
                <div className="m-widget19__content">
                  <div className="m-widget19__header">
                    <div className="m-widget19__info">
                      <span className="m-widget19__username">
                        Origin
                      </span>
                      <br />
                      <span className="m-widget19__time">
                        {character.origin.name}
                      </span>
                    </div>
                    <div>
                      <span className="m-widget3__status m--font-boldest m--font-brand">
                        {character.status}
                      </span>
                      <br />
                      <span className="m-widget19__comment">
                        {character.gender}
                      </span>
                    </div>
                  </div>
                  <div className="m-widget19__body">
                    <span className="m-widget4__text">
                      List of episodes
                    </span>
                    <div className="tab-content">
                      <div className="tab-pane active" id="m_widget4_tab1_content">
                        <div className="m-list-timeline m-list-timeline--skin-light">
                          <div className="m-list-timeline__items">
                            <Scroll width="107%" height={313}>
                              {Array.isArray(episodes) ? episodes.map((episode) => (
                                <div key={episode.id} className="m-list-timeline__item">
                                  <span className="m-list-timeline__badge m-list-timeline__badge--info" />
                                  <span className="m-list-timeline__text">
                                    {episode.name}
                                  </span>
                                  <span className="m-list-timeline__time">
                                    {episode.air_date}
                                  </span>
                                </div>
                              )) : (
                                <div key={episodes.id} className="m-list-timeline__item">
                                  <span className="m-list-timeline__badge m-list-timeline__badge--brand" />
                                  <span className="m-list-timeline__text">
                                    {episodes.name}
                                  </span>
                                  <span className="m-list-timeline__time">
                                    {episodes.air_date}
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
