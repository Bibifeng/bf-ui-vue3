
// import fs from "fs";
// import { baseParse } from "@vue/compiler-core";
// const sourceCode = {
//     name: "demo",
//     transform(code, id) {
//                 // 匹配拦截以demo-开头的vue文件
//         const arr = id.split('/');
//         const fileName = arr[arr.length - 1];
//         if (!(fileName.startsWith('demo-') && fileName.endsWith('.vue'))) {
//             return;
//         }
//
//         const file = fs.readFileSync(id).toString();
//         const parsed = baseParse(file).children.find((n) => n.tag === "demo");
//         const title = parsed.children[0].content;
//         const main = file.split(parsed.loc.source).join("").trim();
//
//         return `export default function (Component) {
//       Component.__sourceCode = ${JSON.stringify(main)}
//       Component.__sourceCodeTitle = ${JSON.stringify(title)}
//     }`.trim();
//     },
// };
//
// export default sourceCode;


import fs from "fs";
import { baseParse } from "@vue/compiler-core";
const sourceCode = {
    name: "preview",
    transform(code, id) {
        if (
            !/\/src\/views\/doc\/.*\.preview\.vue/.test(id) ||
            !/vue&type=preview/.test(id)
        ) {
            return;
        }
        let path = `.${id.match(/\/src\/views\/doc\/.*\.preview\.vue/)[0]}`;
        const file = fs.readFileSync(path).toString();
        const parsed = baseParse(file).children.find((n) => n.tag === "preview");
        const title = parsed.children[0].content;
        const main = file.split(parsed.loc.source).join("").trim();

        return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim();
    },
};

export default sourceCode;
