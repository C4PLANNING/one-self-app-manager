import Vuex from 'vuex'
import index from '../../app/store'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import axios from 'axios';

const localVue = createLocalVue()
localVue.use(Vuex)

// nuxtjs/axiosのモック
jest.mock('axios', () => ({
  $get: jest.fn(() => {
    const jsonData = {'test-key' : { name:'Yahoo Japan', link:'https://yahoo.co.jp/', job:'自社サービス(WEBサービス)' }}
    return Promise.resolve(jsonData);
  })
}))

describe('store/index.js', () => {
  
  // stateに指定の値を設定、かつ取得できること
  describe('getters', () => {
    let store
    beforeEach(() => {
      store = new Vuex.Store(cloneDeep(index))
    })
    test('setCompanys', () => {
      expect(store.getters['companys']).toStrictEqual([])
      const companys = [{address:'テスト'}]
      store.commit('setCompanys', { companys })
      expect(store.getters['companys']).toStrictEqual([{address:'テスト'}])
    }),
    test('setCompany', () => {
      expect(store.getters['company']).toStrictEqual(null)
      const company = {address:'テスト'}
      store.commit('setCompany', { company })
      expect(store.getters['company']).toStrictEqual({address:'テスト'})
    }),
    test('setTargetData', () => {
      expect(store.getters['targetData']).toStrictEqual(null)
      const targetData = {address:'テスト'}
      store.commit('setTargetData', { targetData })
      expect(store.getters['targetData']).toStrictEqual({address:'テスト'})
    }),
    test('setIndex', () => {
      expect(store.getters['index']).toStrictEqual(null)
      const index = 1
      store.commit('setIndex', { index })
      expect(store.getters['index']).toBe(1)
    })
  })

  // actionを受けてstateの値が正しく変更されること
  // mockの作成が必要(https://qiita.com/rhistoba/items/6e90e2c51e8ad1875ac0)
  describe('actions', () => {
    let store
    beforeEach(() => {
      store = new Vuex.Store(cloneDeep(index))
      store.$axios = axios
    })

    test('fetchCompanys', async () => {
      expect(store.getters['companys']).toStrictEqual([])
      await store.dispatch('fetchCompanys')
      expect(store.getters['companys']).toStrictEqual({'test-key' : { name:'Yahoo Japan', link:'https://yahoo.co.jp/', job:'自社サービス(WEBサービス)' }})
    }),
    test('fetchCompany', async () => {
      expect(store.getters['company']).toStrictEqual(null)
      await store.dispatch('fetchCompanys')
      store.dispatch('fetchCompany', { index : 'test-key' })
      expect(store.getters['company']).toStrictEqual({ name:'Yahoo Japan', link:'https://yahoo.co.jp/', job:'自社サービス(WEBサービス)' })
    }),
    test('createTargetData', () => {
      expect(store.getters['targetData']).toStrictEqual(null)
      store.dispatch('createTargetData', { company : { key1 : 'test1', key2 : 'test2'} })
      expect(store.getters['targetData']).toStrictEqual({ key1 : 'test1', key2 : 'test2'})
    }),
    test('clearCompany', async () => {
      expect(store.getters['company']).toStrictEqual(null)
      expect(store.getters['index']).toStrictEqual(null)
      await store.dispatch('fetchCompanys')
      store.dispatch('fetchCompany', { index : 'test-key' })
      store.dispatch('clearCompany')
      expect(store.getters['company']).toStrictEqual(null)
      expect(store.getters['index']).toStrictEqual(null)
    })
  })
})