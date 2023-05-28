import { baseApi } from '../api';

export const GlassesService = {
  async getAll() {
    return baseApi({
      url: `glasses/frame/`,
      method: 'GET',
    });
  },

  async getOnePremade(id) {
    return baseApi({
      url: `glasses/premade-glasses/${id}/`,
      method: 'GET',
    });
  },

  async createPremadeOrder(data) {
    return baseApi({
      url: `user/order-premade/`,
      method: 'POST',
      data,
    });
  },

  async createCustomOrder(data) {
    return baseApi({
      url: `user/order-custom/`,
      method: 'POST',
      data,
    });
  },

  async searchPremadeGlasses(searchTerm) {
    return baseApi({
      url: `glasses/premade-glasses/?search=${searchTerm}`,
      method: 'GET',
    });
  },
};
