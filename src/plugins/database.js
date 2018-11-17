
import Knex from 'knex';
import { Model } from 'objection';
import config from '../../config';

export default () => {
  // Setup database
  Model.knex(Knex(config.database[config.env]));
}
