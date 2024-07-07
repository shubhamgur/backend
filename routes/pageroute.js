const express = require('express');
const route = express.Router();
const {getmethod,Postmethod,Postmethod1,Postmethod2,Postmethod3,Postmethod4,Postmethod5,
  getmethod1,getmethod2,getmethod3,getmethod4,getmethod5}=require('../database/method')


route.get('/', async (req, res) => {
    let datas = await getmethod()
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.get('/may', async (req, res) => {
    let datas = await getmethod1()
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.get('/jan', async (req, res) => {
    let datas = await getmethod2()
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.get('/feb', async (req, res) => {
    let datas = await getmethod3()
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.get('/jun', async (req, res) => {
    let datas = await getmethod5()
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.get('/apr', async (req, res) => {
    let datas = await getmethod4()
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.post('/', async (req, res) => {
    let datas = await Postmethod(req.body)
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.post('/may', async (req, res) => {
    let datas = await Postmethod1(req.body)
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.post('/jan', async (req, res) => {
    let datas = await Postmethod2(req.body)
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.post('/feb', async (req, res) => {
    let datas = await Postmethod3(req.body)
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.post('/apr', async (req, res) => {
    let datas = await Postmethod4(req.body)
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.post('/jun', async (req, res) => {
    let datas = await Postmethod5(req.body)
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  module.exports = route;