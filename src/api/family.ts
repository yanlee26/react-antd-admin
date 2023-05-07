import type { PageData } from '@/interface';
import type { FamilyItem } from '@/interface/family';

import { request } from './request';

export const getFamilyIOList = (params: any) => request<PageData<FamilyItem>>('post', '/io/list', params);
export const getFamilyLAList = (params: any) => request<PageData<FamilyItem>>('post', '/la/list', params);
