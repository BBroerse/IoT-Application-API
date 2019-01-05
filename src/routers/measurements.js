import Models from '../models';
import Joi from 'joi'

import { has } from 'ramda'
import moment from 'moment';

const Measurement = Models.Measurement;
const path = '/measurements';

const columns = ['id', 'created_at', 'humidity', 'temperature', 'co2_ppm'];

async function getMeasurements (request, h) {
  try {
    const measurements = Measurement.query()
      .select(columns)
      .orderBy('created_at', 'desc')
      .modify((queryBuilder) => {
        if(has('begin_date', request.query) && has('end_date', request.query)) {
          queryBuilder.whereBetween('created_at', [request.query.begin_date, request.query.end_date])
        }
    })   

    return measurements;
  } catch (error) {
    console.log('getMeasurements - ', error)
  }
}

async function getLatestMeasurement (request, h) {
  try {
    const measurement = await Measurement
      .query()
      .select(columns)
      .orderBy('created_at', 'desc')
      .first();

    return measurement;
  } catch (error) {
    console.log('getLatestMeasurement - ', error)
  }
}

async function postMeasurement (request, h) {
  try {
    const measurement = await Measurement
      .query()
      .insert({
        humidity: request.payload.humidity, 
        co2_ppm: request.payload.co2_ppm, 
        temperature: request.payload.temperature
      });

    return measurement;
  } catch (error) {
    console.log('postMeasurement - ', error)
  }
}

export default [

  {
    path: path ,
    method: 'GET',
    handler: getMeasurements,
    config: {
      description: 'Get all measurements',
      notes: 'Returns all measurements',
      validate: {
        query: {
            begin_date: Joi.date(),
            end_date: Joi.date()
        }
      },
      auth: false,
      tags: ['api']
    }
  },

  {
    path: path + '/latest',
    method: 'GET',
    handler: getLatestMeasurement,
    config: {
      description: 'Get latest measurement',
      notes: 'Return latest measurement ordered by created at date',
      auth: false,
      tags: ['api']
    }
  },
  
  {
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
  }

];