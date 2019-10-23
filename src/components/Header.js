import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

export default () => (
    <div className="w-100 d-flex  align-items-center justify-content-between p-2 bg-blue-Netaware">
        <div>
            <img className="pl-2" src="./logox30.png" />
        </div>
        <div className="text-white d-flex  align-items-center">
            <div className="pr-3 pl-3 netaware-pointer">
                ABOUT US
            </div>
            <div className="pr-3 pl-3 netaware-pointer">
                PRODUCTS & SERVICES
            </div>
            <div className="pr-3 pl-3 netaware-pointer">
                CONTACT
            </div>
        </div>
        <div>
            <a class="btn btn-sm rounded border bg-dark text-white d-flex  align-items-center justify-content-between" title="Quick Support" href="./public/resources/TeamViewer.exe">
                <FontAwesomeIcon icon={faDesktop} /> <div className="pl-3"> Quick Support</div>
            </a>
        </div>
    </div>
)
