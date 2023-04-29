function getItems(list: string[]) {
  return list
    .map(li => ({
      label: li,
    }))
    .concat({
      label: '其它',
    });
}

export const ioItems = [
  {
    title: '主动收入',
    items: getItems(['工资', '奖金', '公积金']),
  },
  {
    title: '被动收入',
    items: getItems(['房租', '投资收益', '分红', '利息']),
  },
  {
    title: '其它收入',
    items: getItems([]),
  },
  {
    title: '负债性支出',
    items: getItems(['房贷', '车贷', '信用贷']),
  },
  {
    title: '其它固定支出',
    items: getItems(['保险', '房租']),
  },
  {
    title: '生活开销',
    items: getItems(['吃', '穿', '用']),
  },
  {
    title: '特殊支出',
    items: getItems(['教育', '医疗', '投资性支出', '玩']),
  },
];

export const alItems = [
  {
    title: '自用实物资产',
    items: getItems(['自住房产', '汽车', '车位', '珠宝及收藏品']),
  },
  {
    title: '投资实物资产',
    items: getItems(['投资房产']),
  },
  {
    title: '金融资产',
    items: getItems(['债券', '基金', '期权期货等']),
  },
  {
    title: '流动资产',
    items: getItems(['现金', '银行存款', '货币基金含余额宝等', '玩']),
  },
  {
    title: '其它资产',
    items: getItems(['保险现金价值', '应收款', '公积金', '公司股权']),
  },
  {
    title: '实物抵押贷',
    items: getItems(['房贷', '车贷']),
  },
  {
    title: '金融信用贷',
    items: getItems(['信用贷', '信用卡']),
  },
  {
    title: '其它贷',
    items: getItems(['保险贷款', '其它贷款']),
  },
];

export function flatJson(d: object) {
  return Object.values(d).reduce((re, x) => Object.assign(re, x), {});
}

export function genSummaries(flatData: object, num = 7) {
  const keys = num === 7 ? ['A', 'B', 'C', 'D', 'E', 'F', 'G'] : ['M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U'];
  const map: Record<string, number> = {};

  keys.forEach(key => (map[key] = 0));

  Object.entries(flatData).forEach(([k, v]) => {
    const idx = +k[0];
    const key = keys[idx];

    if (v) {
      map[key] += +v;
    }
  });

  return map;
}

export function summary(items: number[]) {
  return items.reduce((re, x) => (re += x), 0);
}

export function getPercent(num1: number, num2: number) {
  if (!num2) return '';
  const percentage = ((num1 / num2) * 100).toFixed(2);

  return +percentage;
}
