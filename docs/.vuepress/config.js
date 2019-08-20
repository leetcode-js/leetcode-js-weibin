const easy = [
    '',
    './1.two-sum/two-sum',
    './7.reverse-integer/reverse-integer',
    './9.palindrome-number/palindrome-number'
]
const medium = [
    ''
]
const hard = [
    ''
]

module.exports = {
    title: 'Weibin\'s LeetCode',
    description: 'Weibin 的 LeetCode 题解 -- Javascript 题解',
    base: '/leetcode-js-weibin/',
    themeConfig: {
        nav: [
            { text: '简单', link: '/easy/' },
            { text: '中等', link: '/medium/' },
            { text: '困难', link: '/hard/' },
            { text: 'GitHub', link: 'https://github.com/leetcode-js/leetcode-js-weibin' }
        ],
        sidebar: {
            '/easy/': [
                {
                    title: '简单难度',
                    collapsable: false,
                    children: easy
                }
            ],
            '/medium/': [
                {
                    title: '中等难度',
                    collapsable: false,
                    children: medium
                }
            ],
            '/hard/': [
                {
                    title: '困难难度',
                    collapsable: false,
                    children: hard
                }
            ]
        }
    }
}