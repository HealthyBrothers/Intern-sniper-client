import React from 'react';

import User from '../../types/User';
import UserTitle from '../UserTitle';
import classes from './index.module.scss';

import { FiMinusCircle } from 'react-icons/fi';

type Props = {
  user: User;
};

function TopBar(props: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <FiMinusCircle className={classes.icon} />
        <UserTitle user={props.user} />
      </div>
    </div>
  );
}

export default TopBar;
