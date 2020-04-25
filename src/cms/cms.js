import CMS from 'netlify-cms-app';

import AboutPreview from './preview-templates/AboutPreview';
import MemberPagePreview from './preview-templates/MemberPagePreview';

CMS.registerPreviewTemplate('about', AboutPreview);
CMS.registerPreviewTemplate('member', MemberPagePreview);
