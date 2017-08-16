// @flow

import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#394049',
    display: 'flex',
    padding: '15px 25px 15px 25px',
    borderRadius: '0 0 5px 5px',
  },
  buttonSection: {
    flex: 1,
  },
  date: {
    fontFamily: 'Helvetica Neue',
    color: '#DE9A82',
  },
};

type Props = {
  handleTodayClick: () => void;
  date: string;
}

export default function Footer({ handleTodayClick, date }: Props) {
  return (
    <div style={styles.footer}>
      <div style={styles.buttonSection}>
        <button>
          TODAY 1
        </button>
      </div>

      <span style={styles.date}>
        SEPTERMBER 9, 2017 9:00 PM
      </span>
    </div>
  );
}

Footer.defaultProps = {

};
