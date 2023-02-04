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

export function sendTemplateToEmail(email, myTemplate) {
}