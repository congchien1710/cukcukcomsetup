const { Builder } = require('@netlify/functions');
const fs = require('fs').promises;
const path = require('path');

const handler = async (event) => {
  const dataFilePath = path.join(__dirname, '..', 'data.json');

  if (event.httpMethod === 'GET') {
    try {
      const data = await fs.readFile(dataFilePath, 'utf-8');
      return {
        statusCode: 200,
        body: data
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Error reading data file'
      };
    }
  } else if (event.httpMethod === 'POST') {
    try {
      await fs.writeFile(dataFilePath, event.body);
      return {
        statusCode: 200,
        body: 'Data saved successfully'
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Error saving data'
      };
    }
  } else {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }
};

module.exports.handler = handler;
