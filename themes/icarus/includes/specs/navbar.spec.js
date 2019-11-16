const { doc, type, defaultValue } = require('../common/utils').descriptors;

module.exports = {
    [type]: 'object',
    [doc]: 'Navigation bar link settings',
    menu: {
        [type]: 'object',
        [doc]: 'Navigation bar menu links',
        [defaultValue]: {
            首頁: '/',
            時間軸: '/archives',
            分類: '/categories',
            標籤: '/tags',
            關於鹿: '/about'
        },
        '*': {
            [type]: 'string',
            [doc]: 'Path or URL to the menu item'
        }
    },
    links: {
        ...require('./icon_link.spec'),
        [doc]: 'Navigation bar links to be shown on the right',
        [defaultValue]: {
            'Download on GitHub': {
                icon: 'fab fa-github',
                url: 'https://github.com/ppoffice/hexo-theme-icarus'
            }
        }
    }
};