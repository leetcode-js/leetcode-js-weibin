const easy = [
    '',
    './1.two-sum/two-sum',
    './7.reverse-integer/reverse-integer',
    './9.palindrome-number/palindrome-number',
    './13.roman-to-integer/roman-to-integer',
    './14.longest-common-prefix/longest-common-prefix',
    './21.merge-two-sorted-lists/merge-two-sorted-lists',
    './83.remove-duplicates-from-sorted-list/remove-duplicates-from-sorted-list'
]
const medium = [
    '',
    './2.add-two-numbers/add-two-numbers',
    './3.longest-substring-without-repeating-characters/longest-substring-without-repeating-characters',
    './5.longest-palindromic-substring/longest-palindromic-substring',
    './6.zig-zag-conversion/zig-zag-conversion',
    './8.string-to-Integer/string-to-Integer',
    './11.container-with-most-water/container-with-most-water',
    './12.integer-to-roman/integer-to-roman',
    './15.3-sum/3-sum',
    './19.remove-nth-node-from-end-of-list/remove-nth-node-from-end-of-list',
    './24.wap-nodes-in-pairs/wap-nodes-in-pairs',
    './61.rotate-list/rotate-list',
    './82.remove-duplicates-from-sorted-list-ii/remove-duplicates-from-sorted-list-ii',
    './86.partition-list/partition-list'
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