let myAry = [0, 1, 2, 3, 4, 5];
myAry.push(6);
// myAry.pop();
// console.log(myAry);

const jptString = ["anish", "anup", "nishan"];
const jptString1 = ["susmit", "bijen", "rabindra"];

// jptString1.push(jptString);
// console.log(jptString1);

// const alljptString = jptString.concat(jptString1);
// console.log(alljptString);

// SPREAD OPERATOR

const allnewjptString = [...jptString, ...jptString1];
// console.log(allnewjptString);

const num = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10]];
// const num1 = [
//   11,
//   12,
//   13,
//   [14, 15, 16],
//   17,
//   18,
//   [
//     19,
//     20,
//     [
//       21,
//       22,
//       23,
//       [
//         24,
//         25,
//         (26)[
//           (27,
//           28,
//           29,
//           30,
//           [
//             31,
//             32,
//             33,
//             34,
//             [
//               35,
//               36,
//               37,
//               [
//                 38,
//                 39,
//                 [
//                   40,
//                   41,
//                   42,
//                   [43, 44, [45, 46, [47, 48, [49, 50, [51, [52, [53]]]]]]],
//                 ],
//               ],
//             ],
//           ])
//         ],
//       ],
//     ],
//   ],
// ];
const num2 = [
  11,
  12,
  [
    13,
    14,
    [
      15,
      16,
      [
        17,
        17,
        [
          19,
          20,
          [
            21,
            22,
            [
              [23, 24],
              [
                (25,
                26,
                [
                  27,
                  28,
                  [
                    29,
                    30,
                    [31, 32, [33, [34, 35, [36, [37], [[38, 39, [40]]]]]]],
                  ],
                ]),
              ],
            ],
          ],
        ],
      ],
    ],
  ],
];
const numnum = console.log(num.flat(Infinity).concat(num2.flat(Infinity)));
console.log(numnum);

console.log(Array.from("Anish Shrestha"));
console.log(
  Array.from({ name: "Anish" })
); /*will return empty array because we havent asigned which 
should be converted into array */
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
