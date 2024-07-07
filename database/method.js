const user=require('../model/data')
const user1=require('../model/data1')
const user2=require('../model/data2')
const user3=require('../model/data3')
const user4=require('../model/data4')
const user5=require('../model/data5')


const getmethod = () => {
    return user.find()
  }

  const getmethod1 = () => {
    return user1.find()
  }

  const getmethod2 = () => {
    return user2.find()
  }

  const getmethod3 = () => {
    return user3.find()
  }

  const getmethod4 = () => {
    return user4.find()
  }

  const getmethod5 = () => {
    return user5.find()
  }

  const Postmethod = (data) => {
    let users = user(data);
    return users.save()
  }

  const Postmethod1 = (data) => {
    let users = user1(data);
    return users.save()
  }

  const Postmethod2 = (data) => {
    let users = user2(data);
    return users.save()
  }

  const Postmethod3 = (data) => {
    let users = user3(data);
    return users.save()
  }

  const Postmethod4 = (data) => {
    let users = user4(data);
    return users.save()
  }

  const Postmethod5 = (data) => {
    let users = user5(data);
    return users.save()
  }

  module.exports = {
    getmethod,
    Postmethod,
    Postmethod1,
    Postmethod2,
    Postmethod3,
    Postmethod4,
    Postmethod5,
    getmethod1,
    getmethod2,
    getmethod3,
    getmethod4,
    getmethod5
  }