import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    nextUsername: '',
    username: 'default user'
  });

  const updateUsername = (e) => {
    setState({
      ...state,
      nextUsername: e.target.value
    });
  }

  const setUsername = () => {
    setState({
      ...state,
      username: state.nextUsername
    })
  }
  const { username } = state;
  return (
    <div className='body'>
      <p>{t('welcome', { username: username })}</p>
      <div>
        <label>{t('change-username')}:</label>
        <input type='text' onChange={updateUsername} />
        <button onClick={setUsername}>{t('submit')}</button>
      </div>
      <p>
        <Trans i18nKey='go-to-page2'>
          <Link to='/page2'></Link>
          {{ username }}
        </Trans>
      </p>
    </div>
  );
}

export default Home;
