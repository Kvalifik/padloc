import { BaseElement, element, html } from "./base.js";

@element("pl-logo")
export class Logo extends BaseElement {
    render() {
        return html`

        <style>
            :host {
                position: relative;
                display: block;
                width: 200px;
                height: 50px;
            }

            svg {
                width: 100%;
                height: 100%;
                fill: currentColor;
            }
        </style>

        <svg viewBox="0 0 376 105" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>

                <path d="M27.5 23.9c5.1 0 9.8 1.2 14 3.7 4.3 2.4 7.6 5.7 10 10 2.4 4.2 3.6 8.9 3.6 14.1 0 5.2-1.1 10-3.4 14.1a24.4 24.4 0 0 1-22.3 13.6 24.6 24.6 0 0 1-19.2-9.1v27a5 5 0 0 1-1.4 3.7 5 5 0 0 1-3.7 1.4 5 5 0 0 1-3.6-1.4A5 5 0 0 1 0 97.3V51.7a27.9 27.9 0 0 1 13.6-24.2c4.1-2.4 8.8-3.6 13.9-3.6zm0 46.5A17.1 17.1 0 0 0 43 61.2c1.5-2.8 2.3-6 2.3-9.5s-.8-6.7-2.3-9.6a17.6 17.6 0 0 0-24.6-6.8 17.2 17.2 0 0 0-6.3 6.8 20 20 0 0 0-2.3 9.6c0 3.5.8 6.7 2.3 9.5a17.3 17.3 0 0 0 15.4 9.2zm72.6-46.5a27.1 27.1 0 0 1 27.5 27.8V74a5 5 0 0 1-5.1 5.1 5 5 0 0 1-5.1-5.1v-3.7a24.5 24.5 0 0 1-19.3 9.1 24.4 24.4 0 0 1-22.3-13.6c-2.2-4.2-3.3-8.9-3.3-14.1 0-5.2 1.2-10 3.6-14.2a27.7 27.7 0 0 1 24-13.6zm0 46.5a17.1 17.1 0 0 0 15.4-9.2c1.5-2.8 2.3-6 2.3-9.5a20 20 0 0 0-2.3-9.6 17.2 17.2 0 0 0-15.4-9.2 17.1 17.1 0 0 0-15.4 9.2c-1.6 2.9-2.4 6-2.4 9.6 0 3.5.8 6.7 2.4 9.5a17.1 17.1 0 0 0 15.4 9.2zM195 .9a5 5 0 0 1 3.7 1.4 5 5 0 0 1 1.4 3.7v45.6a27.9 27.9 0 0 1-13.5 24.1 27.1 27.1 0 0 1-14 3.7c-5.1 0-9.8-1.2-14-3.7a26.3 26.3 0 0 1-10-10c-2.4-4.2-3.6-8.9-3.6-14.1 0-5.2 1.1-10 3.3-14.1 2.3-4.3 5.3-7.6 9.3-10 3.9-2.4 8.2-3.6 13-3.6a24.6 24.6 0 0 1 19.3 9.1V6a5 5 0 0 1 1.4-3.7A5 5 0 0 1 195 .9zm-22.4 69.5a17.1 17.1 0 0 0 15.4-9.2 20 20 0 0 0 2.3-9.6c0-3.5-.8-6.7-2.3-9.6a17.3 17.3 0 0 0-15.4-9.1 17.1 17.1 0 0 0-15.4 9.1c-1.6 2.9-2.4 6-2.4 9.6 0 3.5.8 6.7 2.3 9.6a17.6 17.6 0 0 0 15.5 9.2zm51.5-64.3a5 5 0 0 1 1.5-3.7c1-1 2.2-1.5 3.7-1.5a5 5 0 0 1 3.8 1.5 5 5 0 0 1 1.4 3.7v67.7c0 1.5-.5 2.7-1.4 3.7a5 5 0 0 1-3.8 1.5 5 5 0 0 1-3.7-1.5 5 5 0 0 1-1.5-3.7V6.1zm59.2 17.8c5.3 0 10 1.2 14.1 3.6 4.2 2.3 7.5 5.6 9.9 9.8 2.3 4.2 3.5 9 3.5 14.4a29 29 0 0 1-3.5 14.3 25.2 25.2 0 0 1-9.8 9.8c-4.1 2.4-8.9 3.6-14.2 3.6-5.3 0-10.1-1.2-14.3-3.6a25 25 0 0 1-9.8-9.8 29 29 0 0 1-3.5-14.3c0-5.4 1.2-10.2 3.5-14.4a25 25 0 0 1 9.8-9.8c4.2-2.4 9-3.6 14.3-3.6zm0 9a16.9 16.9 0 0 0-15.5 9.1 20.2 20.2 0 0 0-2.3 9.7c0 3.6.8 6.8 2.3 9.6a17 17 0 0 0 15.5 9.1c3.4 0 6.4-.8 9.1-2.4 2.8-1.6 4.8-3.8 6.4-6.6 1.5-2.9 2.2-6.1 2.2-9.7 0-3.6-.7-6.8-2.3-9.7a16.5 16.5 0 0 0-6.3-6.7 17.6 17.6 0 0 0-9.1-2.4zm72-9c7.9 0 14.4 3 19.6 9 .7.7 1 1.6 1 2.6 0 1.5-.7 2.7-2.2 3.7a4 4 0 0 1-2.3.7 5 5 0 0 1-3.9-1.8 16 16 0 0 0-5.4-4c-2-.8-4.3-1.2-6.8-1.2-5.1 0-9.3 1.7-12.5 5.1-3.2 3.5-4.8 8-4.8 13.7 0 3.6.7 6.8 2.3 9.6 1.5 2.9 3.5 5.1 6.3 6.7 2.7 1.6 5.7 2.4 9.2 2.4 4.5 0 8.2-1.2 11-3.5 1.3-1 2.5-1.4 3.7-1.4 1 0 1.8.3 2.6.9 1.3 1 1.9 2.3 1.9 3.6 0 1-.4 1.9-1.2 2.7a25.4 25.4 0 0 1-18 6.7c-5.3 0-10-1.2-14.2-3.6a25.7 25.7 0 0 1-9.9-10c-2.3-4.2-3.5-8.9-3.5-14.1 0-5.3 1.1-10.1 3.4-14.4 2.4-4.2 5.6-7.5 9.7-9.8 4.1-2.4 8.8-3.6 14-3.6z" id="type"/>

                <filter x="-.3%" y="-1%" width="100.5%" height="103.9%" filterUnits="objectBoundingBox" id="shadow">
                    <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0" in="shadowOffsetOuter1"/>
                </filter>

            </defs>

            <g>
                <use filter="url(#shadow)" xlink:href="#type"/>
                <use xlink:href="#type"/>
            </g>
        </svg>
`;
    }
}