import { ReactElement } from 'react';

interface Props {
  title: string;
}

const SubHeader = ({ title }: Props): ReactElement => (
  <div className="m-subheader ">
    <div className="d-flex align-items-center">
      <div className="mr-auto">
        <h3 className="m-subheader__title m-subheader__title--separator">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

export default SubHeader;
