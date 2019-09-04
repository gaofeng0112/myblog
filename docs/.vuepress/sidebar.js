module.exports = {
  '/blog/': getSidebar('blog'),
  // '/frame/': getSidebar('frame'),
  // '/basis/': getSidebar('basis')
}
// [
//   {
//     title: 'JavaScript', // 侧边栏名称
//     collapsable: true, // 可折叠
//     children: [
//       '/blog/JavaScript', // 你的md文件地址
//     ]
//   }
// ]
function getSidebar(barName) {
  const sidebar = {
      blog: [
          '/blog/'
      ]
  }
  return sidebar[barName]
}