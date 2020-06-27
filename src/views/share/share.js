import React, { useState, useEffect } from 'react';
import Title from '../../components/title/title';
import Arrow from '../../components/arrow/arrow';
import Copy from '../../components/copy/copy';
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";
import './share.css';
import { Link } from 'react-router-dom';

function Share() {
  const [url, setUrl] = useState('');
  const quote = `If we don't make it out alive through 2020, what would be your last words for me?
    Send me anonymously on: `

  useEffect(() => {
    setUrl(`https://lastwordss.com/send/${localStorage.getItem('jd')}`);
  }, [])


  return (

    <div className="footer-setter">
      <div className="Share">
        <Title title1="Share" title2="link" />
        <div className="share-message paragraph"> There you go! So easy. Now share this with your friends and see what they have to say…. </div>
        <input type="text" placeholder={`https://lastwordss.com/send/${localStorage.getItem('jd')}`} readOnly />
        <div className="social-medias">
          <Copy url={url} />

          <FacebookShareButton url={url} quote={quote} >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <FacebookMessengerShareButton
            url={url}
            appId="521270401588372"
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>

          <TwitterShareButton
            url={url}
            title={quote}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <WhatsappShareButton
            url={url}
            title={quote}
            separator=":: "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

        </div>
      </div>
      <div className="footer">
        <div>Made In India</div>
        <div className="submit"><Link to="">Home Page <span className="submit-arrow"><Arrow /></span></Link></div>
      </div>
    </div>
  );
}

export default Share;
