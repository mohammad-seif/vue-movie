import { defineStore } from 'pinia';
import Service from '../apis/index';
import { base_URL } from '../config/axios';
import AxiosApi from '../libs/axios';
import { IApi } from '../libs/axios';

export const useApiStore = defineStore({
  id: 'api',
  state: () => ({
    apiExecuter
  }),
  getters: {
    
  },
  actions: {
    setExecuter() {
      const service = new Service();

      this.apiExecuter = service
        .setBaseUrl(base_URL)
        .setHeaders({"Content-type": "application/json"})
        .setApiExecuter(new AxiosApi())
        .buildApi();

      console.log(api)
    }
  }
})
