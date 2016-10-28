import {connect} from 'src/db'

const r = connect()
export const chaptersTable = r.table('chapters')

export function getChapterById(chapterId) {
  return chaptersTable.get(chapterId)
}

export function findChapters() {
  return chaptersTable
}
