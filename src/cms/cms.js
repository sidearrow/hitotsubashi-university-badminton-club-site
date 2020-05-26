import CMS from 'netlify-cms-app';

import CommonPreview from './CommonPreview';

CMS.registerPreviewTemplate('common', CommonPreview);
CMS.registerPreviewTemplate('league-result', CommonPreview);
