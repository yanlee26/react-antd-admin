import type { PageData } from '@/interface';
import type { FamilyItem } from '@/interface/family';

import { request } from './request';

export const getFamilyIOList = (params: any) => request<PageData<FamilyItem>>('post', '/io/users', params);
export const getFamilyIODetail = (params: { mobile: string }) =>
  request<PageData<FamilyItem>>('get', '/io/users/detail', params);
export const getFamilyLAList = (params: any) => request<PageData<FamilyItem>>('post', '/la/users', params);
