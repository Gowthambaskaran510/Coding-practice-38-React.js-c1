// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import {
  TimelineContainer,
  ResponsiveContainer,
  HeadingContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = items => {
    if (items.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={items.id} projectDetails={items} />
    }
    return <CourseTimelineCard key={items.id} courseDetails={items} />
  }

  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeadingContainer>
          <Heading>
            MY JOURNEY OF <br />
            <CCBPHeading>CCBP 4.0</CCBPHeading>
          </Heading>
        </HeadingContainer>
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </ResponsiveContainer>
    </TimelineContainer>
  )
}
export default TimelineView
