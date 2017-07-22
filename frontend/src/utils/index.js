export default {
  today () {
    return new Date()
  },

  tomorrow () {
    let today = this.today()
    today.setDate(today.getDate() + 1)
    return today
  }
}
