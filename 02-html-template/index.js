import { getToday } from "./utils.js";

function getWelcomeTemplate({name, age, school}) {
    const result = `
        <html>
            <body>
                <h1>Welcome to join</h1>
                <hr />
                <div>
                    name: ${name}
                    age: ${age}
                    school: ${school}
                    createdAt: ${getToday()}
                </div>
            </body>
        </html>
    `
    console.log(result);
    return result
}

const name = 'yong'
const age = 12
const school = 'rabbit school'

getWelcomeTemplate({name, age, school})