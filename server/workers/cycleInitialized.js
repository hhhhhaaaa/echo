import {getQueue} from '../util'
import ChatClient from '../../server/clients/ChatClient'
import r from '../../db/connect'

export function start() {
  const cycleInitialized = getQueue('cycleInitialized')
  cycleInitialized.process(({data: cycle}) => processNewCycle(cycle))
}

export async function processNewCycle(cycle, chatClient = new ChatClient()) {
  console.log(`Initializing cycle ${cycle.cycleNumber} of chapter ${cycle.chapterId}`)
  await sendVotingAnnouncement(cycle, chatClient)
}

function sendVotingAnnouncement(cycle, chatClient) {
  return r.table('chapters').get(cycle.chapterId).run()
    .then(chapter => {
      const banner = `🗳 *Voting is now open for cycle ${cycle.cycleNumber}*.`
      const votingInstructions = `Have a look at [the goal library](${chapter.goalRepositoryURL}/issues), then to get started check out \`/vote --help.\``
      const announcement = [banner, votingInstructions].join('\n')
      return chatClient.sendMessage(chapter.channelName, announcement)
    })
}