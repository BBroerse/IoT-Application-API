import Models from '../models';

const Measurement = Models.Measurement;
const path = '/measurements';

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
    path: path + '/latest',
    method: 'GET',
    handler: getLatestMeasurement,
    config: {
      auth: false,
    }
  });

  server.route({
    path: path,
    method: 'POST',
    handler: postMeasurement,
    config: {
      auth: false,
    }
  });
};