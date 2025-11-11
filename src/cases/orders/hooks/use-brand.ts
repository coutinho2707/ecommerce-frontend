import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { BrandDTO } from "../dtos/brand.dto";
import { BrandService } from "../services/brand.services";

export function useBrand() {
  return useQuery({
    queryKey: ['brands'],
    queryFn: () => BrandService.list(),
  });
}

export function useBrandById(id: string) {
  return useQuery({
    queryKey: ['brands', id],
    queryFn: () => BrandService.getById(id),
    enabled: !!id,
  });
}

export function useCreateBrand() {
  const queryClient = useQueryClient();
  
  return useMutation<BrandDTO, Error, Omit<BrandDTO, 'id'>>({
    mutationFn: (brand) => BrandService.create(brand),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
}

export function useUpdateBrand() {
  const queryClient = useQueryClient();
  
  return useMutation<BrandDTO, Error, { id: string; brand: BrandDTO }>({
    mutationFn: ({ id, brand }) => BrandService.update(id, brand),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
      queryClient.invalidateQueries({ queryKey: ['brands', variables.id] });
    },
  });
}

export function useDeleteBrand() {
  const queryClient = useQueryClient();
  
  return useMutation<void, Error, string>({
    mutationFn: (id) => BrandService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
}
