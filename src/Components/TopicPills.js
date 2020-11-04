import React from "react";


const TopicPills = ({topics=[], createTopic, lessonId, moduleId, course}) =>
  <div>
    <h2>Topics ({lessonId})</h2>
    <ul>
      <li>
        <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/topic123`} className="nav-link">
          Topic 123
        </Link>
      </li>
      <li>
        <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/topic234`} className="nav-link">
          Topic 234
        </Link>
      </li>
      {/*{*/}
      {/*  topics.map(topic=>*/}
      {/*    <li key={topic._id}>*/}
      {/*      <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`} className="nav-link">*/}
      {/*      {topic.title}*/}
      {/*      </Link>*/}
      {/*    </li>*/}
      {/*  )*/}
      {/*}*/}
    </ul>
    <button onClick={() => createTopic(lessonId)}>
      Create
    </button>
  </div>

const stateToPropertyMapper = (state) => ({
  course: state.courseReducer.course,
  moduleId: state.lessonReducer.moduleId,
  topics: state.topicReducer.topics,
  lessonId: state.topicReducer.lessonId
})

const dispatchMapper = (dispatch) => ({
  createTopic: (lessonId) => topicService
    .createTopic(lessonId)
    .then(topic => dispatch({
      type: "CREATE_TOPIC",
      topic
    }))
})

export default connect
(stateToPropertyMapper, dispatchMapper)
(TopicPills)
