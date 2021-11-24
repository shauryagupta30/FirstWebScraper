let minimist = require("minimist");
let fs = require("fs");


let args = minimist(process.argv);

let teams = [
    {
        name:"India",
        rank:1,
        matches:[
            {
                opponent:"England",
                result:"win"
            },
            {
                opponent:"Australia",
                result:"win"
            }
        ]
    },
    {
        name:"Australia",
        rank:2,
        matches:[
            {
                opponent:"England",
                result:"win"
            },
            {
                opponent:"India",
                result:"win"
            }
        ]
    },
    {
        name:"England",
        rank:3,
        matches:[
            {
                opponent:"India",
                result:"win"
            },
            {
                opponent:"Australia",
                result:"win"
            }
        ]
    }
];

let json = JSON.stringify(teams);
fs.writeFileSync(args.dest, json,"utf-8");
