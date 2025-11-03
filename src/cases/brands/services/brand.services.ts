import { api } from "../../../lib/axios";
import type { BrandDTO } from "../dtos/brand.dto";

const ENDPOINT = "/brand";

export const BrandService = {
  async list(): Promise<BrandDTO[]> {
    const result = await api.get(ENDPOINT);
    return result.data;
  },

  async create(brand: BrandDTO): Promise<BrandDTO> {
    const result = await api.post(ENDPOINT, brand);
    return result.data;
  },

  async getById(id: string): Promise<BrandDTO> {
    const result = await api.get(`${ENDPOINT}/${id}`);
    return result.data;
  },

  async update(id: string, brand: BrandDTO): Promise<BrandDTO> {
    const result = await api.put(`${ENDPOINT}/${id}`, brand);
    return result.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`${ENDPOINT}/${id}`);
  },
};
