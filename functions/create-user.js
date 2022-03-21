const { DynamoDB } = require("aws-sdk")

const db = new DynamoDB.DocumentClient()
const TableName = "usersTable"

module.exports.create = async (event) => {
    console.log(event.body)
    console.log(event.body["email"])
    console.log(event.body.name)
    const newUser = {
        email: "dillan2@test.com",
        name: "dillan2",
        isProcessed: false,
        createAt: new Date().toISOString()
    }

    await db
        .put({
            TableName,
            Item: newUser,
        })
        .promise()

    return { statusCode: 200, body: JSON.stringify(newUser) }
}