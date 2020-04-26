import CMS from 'netlify-cms-app';

import CommonPreview from './preview-templates/CommonPreview';
import MemberPagePreview from './preview-templates/MemberPagePreview';

CMS.registerPreviewTemplate('about', CommonPreview);
CMS.registerPreviewTemplate('member', MemberPagePreview);
