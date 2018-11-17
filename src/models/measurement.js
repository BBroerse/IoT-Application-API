import { Model } from 'objection';

export default class Measurement extends Model {
  
  static get tableName() {
    return 'measurements';
  }

  $beforeInsert () {
    this.created_at = new Date().toISOString();
  };
}