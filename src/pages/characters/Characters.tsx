/* eslint-disable no-unused-vars */
import { ChangeEvent, ReactElement } from 'react';
import { Character } from 'rickmortyapi/dist/interfaces';
import { Scroll } from '../../components';

interface Props {
  characters: Character[];
  setCharacterSelected: (c: Character) => void
  search: (name: string) => void
}

const Characters = ({ characters, setCharacterSelected, search }: Props): ReactElement => (
  <div className="col-xl-5 animated fadeInLeft">
    <div className="m-portlet">
      <div className="m-portlet__head">
        <div className="m-portlet__head-tools">
          <ul
            className="nav nav-pills nav-pills--brand m-nav-pills--align-left"
            role="tablist"
          >
            <li className="nav-item m-tabs__item">
              <div className="input-group m-input-group m-input-group--pill">
                <input
                  type="text"
                  className="form-control m-input"
                  placeholder="search character"
                  aria-describedby="basic-addon1"
                  onInput={(e: ChangeEvent<HTMLInputElement>) => (
                    search(e.target.value)
                  )}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="m-portlet__body">
        <div className="tab-content">
          <div className="tab-pane active" id="m_widget4_tab1_content">
            <div className="m-widget4">
              <Scroll width="100%" height={776}>
                {characters.map((character) => (
                  <div key={character.id} className="m-widget4__item">
                    <div className="m-widget4__img m-widget4__img--pic">
                      <img
                        src={character.image}
                        alt="Avatar"
                      />
                    </div>
                    <div className="m-widget4__info">
                      <span className="m-widget4__title">
                        {character.name}
                      </span>
                      <br />
                      <span className="m-widget4__sub">
                        {character.species}
                      </span>
                    </div>
                    <div className="m-widget4__ext">
                      <button
                        type="button"
                        className="btn btn-outline-primary m-btn m-btn--icon m-btn--icon-only m-btn--pill"
                        onClick={() => setCharacterSelected(character)}
                      >
                        <i className="flaticon-list" />
                      </button>
                    </div>
                  </div>
                ))}
              </Scroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Characters;
