import faker from 'faker'

import {connect} from 'src/db'

const r = connect()
const now = new Date()

export default function define(factory) {
  factory.define('stat', r.table('stats'), {
    id: cb => cb(null, faker.random.uuid()),
    descriptor: factory.sequence(n => `stat${n}`),
    shortName: factory.sequence(n => `s${n}`),
    createdAt: cb => cb(null, now),
    updatedAt: cb => cb(null, now),
  })
}
