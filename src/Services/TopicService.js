const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/rikkicao/lessons"
const topicsUrl = "https://wbdv-generic-server.herokuapp.com/api/rikkicao/topics"

const findTopicsForLesson = (lessonId) =>
  fetch(`${lessonUrl}/${lessonId}/topics`)
    .then(response => response.json())

const createTopic = (lessonId) =>
  fetch(`${lessonUrl}/${lessonId}/topics`, {
    method: "POST",
    body: JSON.stringify({
      title: "NEW TOPIC"
    }),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => response.json())

export default {
  findTopicsForLesson, createTopic
}