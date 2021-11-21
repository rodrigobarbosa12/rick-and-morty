import { ReactElement } from 'react';
import Spinner from './Spinner';
import './scroll.css';

interface Props {
  height: number,
  width: string,
  children: ReactElement | ReactElement[],
  loading?: boolean,
}

const Scroll = ({
  height,
  width,
  children,
  loading = false,
}: Props): ReactElement => (
  <div
    className="scrollbar"
    id="scroll-component"
    style={{ height, width }}
    data-scroll="true"
  >
    <div style={{ paddingRight: 10 }}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          { children }
        </>
      )}
    </div>
  </div>
);

Scroll.defaultProps = {
  loading: undefined,
};

export default Scroll;
