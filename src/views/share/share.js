import React, { useState } from 'react';
import Title from '../../components/title/title';
import Arrow from '../../components/arrow/arrow';

function Share() {
  const [copyLabel, setCopyLabel] = useState('Copy Link');

  const onSubmit = () => {
    if (copyLabel === 'Copied') {
      return;
    }

    setCopyLabel('Copied');
    const el = document.createElement('textarea');
    el.value = `https://lastwordss.com/send/${localStorage.getItem('jd')}`;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);


    setTimeout(() => {
      setCopyLabel('Copy Link');
    }, 3000);
  }

  return (

    <div className="footer-setter">
      <div className="Share">
        <Title title1="Share" title2="link" />
        <div className="share-message paragraph"> There you go! So easy. Now share this with your friends and see what they have to say…. </div>
        <input type="text" placeholder={`https://lastwordss.com/send/${localStorage.getItem('jd')}`} readOnly />
        <div className="submit" onClick={onSubmit}> {copyLabel} <span className="submit-arrow"><Arrow /></span></div>

      </div>
      <div className="footer">
        Made In India
      </div>
    </div>
  );
}

export default Share;
