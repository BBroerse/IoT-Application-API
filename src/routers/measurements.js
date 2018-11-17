import Models from '../models';
import Joi from 'joi'

const Measurement = Models.Measurement;
const path = '/measurements';

const columns = ['id', 'created_at', 'humidity', 'temperature', 'co2_ppm'];

async function getMeasurements (request, reply) {
  try {
    const measurements = await Measurement
      .query()
      .select(columns)
      .orderBy('created_at', 'desc')

    reply(measurements)
  } catch (error) {
    console.error(error);
  }
}

async function getLatestMeasurement (request, reply) {
  try {
    const columns = ['id', 'created_at', 'humidity', 'temperature', 'co2_ppm'];
    const measurement = await Measurement
      .query()
      .select(columns)
      .orderBy('created_at', 'desc')
      .first();

    reply(measurement)
  } catch (error) {
    console.error(error);
  }
}

async function postMeasurement (request, reply) {
  try {
    const measurement = await Measurement
      .query()
      .insert({
        humidity: request.payload.humidity, 
        co2_ppm: request.payload.co2_ppm, 
        temperature: request.payload.temperature
      });

    reply(measurement)
  } catch (error) {
    console.error(error);
  }
}

export default function (server) {
  server.route({
    path: path ,
    method: 'GET',
    handler: getMeasurements,
    config: {
      description: 'Get all measurements',
      notes: 'Returns all measurements',
      auth: false,
      tags: ['api']
    }
  });

  server.route({
    path: path + '/latest',
    method: 'GET',
    handler: getLatestMeasurement,
    config: {
      description: 'Get latest measurement',
      notes: 'Return latest measurement ordered by created at date',
      auth: false,
      tags: ['api']
    }
  });

  server.route({
    path: path,
    method: 'POST',
    handler: postMeasurement,
    config: {
      description: 'Create a new measurement',
      notes: 'Create a new measurement',
      validate: {
        payload: Joi.object({
            temperature: Joi.number().precision(2).required(),
            humidity: Joi.number().precision(2).required(),
            co2_ppm: Joi.number().required()
        })
    },
      auth: false,
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          payloadType: 'form'
        }
      }
    }
  });
};