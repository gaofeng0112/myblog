module.exports = {
  title: 'gaofeng-blog',
  
  description: 'myblog',
  head: [// 注入到当前页面的 HTML <head> 中的标签
    ['link', {rel: 'icon', href:'/cat.png'}],
    ['link', { rel: 'manifest', href: '/cat.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/cat.png' }],
    ['link', { rel: 'mask-icon', href: '/cat.png', color: '#3eaf7c' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache, must-revalidate' }]
  ],
  plugins:[
    
    
  ],
  base: '/',
  markdown: {
    lineNubers: true 
  },
  themeConfig: {
    nav: require('./nav.js'),
    sidebar: require('./sidebar.js')
  }
}