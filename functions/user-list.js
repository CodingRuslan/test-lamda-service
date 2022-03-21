const { DynamoDB } = require("aws-sdk")

const db = new DynamoDB.DocumentClient()
const TableName = "usersTable"

module.exports.list = async (event) => {
    // console.log('Received event:', JSON.stringify(event, null, 2));
    const users = await db
        .scan({
            TableName,
        })
        .promise()

    return { statusCode: 200, body: JSON.stringify(users) }
}