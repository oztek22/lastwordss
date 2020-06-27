import React, { useState } from 'react';
import './copy.css';

function Copy(props) {
    const [isCopied, setIsCopied] = useState(false);

    const copyUrl = () => {
        if (isCopied) {
            return;
        }

        setIsCopied(true);
        const el = document.createElement('textarea');
        el.value = props.url;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);


        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    }

    return (
        <div onClick={copyUrl}>
            <svg _ngcontent-jlg-c67="" viewBox="0 0 30 30" height="30px" width="30px" className={'fill-copy' + (isCopied ? ' copied' : '')}>
                <g _ngcontent-jlg-c67="" transform="translate(-1236 -471)">
                    <g _ngcontent-jlg-c67="" transform="translate(569 -1935)">
                        <rect _ngcontent-jlg-c67="" width="30" height="30" rx="5" transform="translate(667 2406)"></rect>
                    </g>
                    <path _ngcontent-jlg-c67="" d="M12.636,1h-9A1.641,1.641,0,0,0,2,2.636V13.273a.818.818,0,1,0,1.636,0V3.455a.821.821,0,0,1,.818-.818h8.182a.818.818,0,1,0,0-1.636Zm.483,3.755,3.952,3.952a1.635,1.635,0,0,1,.475,1.154v7.5A1.641,1.641,0,0,1,15.909,19H6.9a1.634,1.634,0,0,1-1.628-1.636L5.281,5.909A1.634,1.634,0,0,1,6.909,4.273h5.048A1.641,1.641,0,0,1,13.119,4.755ZM12.636,10h3.682l-4.5-4.5V9.182A.821.821,0,0,0,12.636,10Z" transform="translate(1241 476)" className="page-border"></path>
                </g>
            </svg>
            {isCopied ?
                <div className="copied-text">Copied</div> : null
            }
        </div>

    )
}

export default Copy;
