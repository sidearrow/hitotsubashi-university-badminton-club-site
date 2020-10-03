import { config } from '../config';

export const GTAG_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${config.gtagId}');
`;
