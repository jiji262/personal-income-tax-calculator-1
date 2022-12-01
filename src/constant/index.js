let id = 0;
function createData(minIncome, maxIncome, taxRate, deduction) {
  id += 1;
  let income;
  if (!minIncome) {
    income = `超过${maxIncome},000的部分`;
  } else if (!maxIncome) {
    income = `不超过${minIncome},000的部分`;
  } else {
    income = `超过${minIncome},000至${maxIncome},000的部分`;
  }
  return { id, income, taxRate, deduction };
}

export const RANGE = [
  createData(36, 0, 3, 0),
  createData(36, 144, 10, 2520),
  createData(144, 300, 20, 16920),
  createData(300, 420, 25, 31920),
  createData(420, 660, 30, 52920),
  createData(660, 960, 35, 85920),
  createData(0, 960, 45, 181920)
];

export const MONTH_RANGE = [
  createData(3, 0, 3, 0),
  createData(3, 12, 10, 210),
  createData(12, 25, 20, 1410),
  createData(25, 35, 25, 2660),
  createData(35, 55, 30, 4410),
  createData(55, 80, 35, 7160),
  createData(0, 80, 45, 15160)
];

export const HAC_RATE = [
  [0.05, '5%'],
  [0.06, '6%'],
  [0.07, '7%'],
  [0.08, '8%'],
  [0.09, '9%'],
  [0.1, '10%'],
  [0.11, '11%'],
  [0.12, '12%']
];
/**
 *  endowment insurance（养老保险) EI
 *  medical insurance（医疗保险） MI
 *  unemployment insurance（失业保险） UI
 *  work-related injury insurance（工伤保险） WII
 *  childbirth insurance（生育保险） CI
 *  housing accumulation funds（住房公积金） HAC
 */
export const INSURANCE = [
  {
    city: '北京',
    IBases: [5869, 31884],
    MIBases: [5869, 31884],
    EIBases: [5869, 31884],
    UIBases: [5869, 31884],
    CIBase: [5869, 31884],
    WIIBase: [5869, 31884],
    HACBases: [5869, 31884],
    addMI: 3, // 大病
    HACRates: [0.12, 0.12],
    EIRates: [0.08, 0.16], // （养老保险) EI
    MIRates: [0.02, 0.09],  // （医疗保险） MI
    UIRates: [0.005, 0.005],//（失业保险） UI
    WIIRates: [0, 0.004], //  （工伤保险） WII
    CIRates: [0, 0.008]  //   （生育保险） CI
  },
  {
    city: '西安',
    IBases: [3632, 24212], // 社保基数
    MIBases: [4618, 23089], // 医保基数
    EIBases: [4711, 23556], // 养老基数
    UIBases: [4618, 23089], // 失业险基数
    HACBases: [1950, 27770], // 公积金基数
    addMI: 1.6, // 大病
    HACRates: [0.12, 0.12],
    EIRates: [0.08, 0.16],
    MIRates: [0.02, 0.08],
    UIRates: [0.003, 0.007]
  },
  {
    city: '杭州',
    IBases: [3957, 19783],
    MIBases: [3957, 19783],
    EIBases: [3957, 19783],
    UIBases: [3957, 19783],
    CIBase: [3957, 19783],
    WIIBase: [3957, 19783],
    HACBases: [2280, 36675],
    addMI: 0, // 大病
    HACRates: [0.12, 0.12],
    EIRates: [0.08, 0.16],
    MIRates: [0.02, 0.99],
    UIRates: [0.005, 0.005],
    WIIRates: [0, 0.002],
    CIRates: [0, 0]
  },
  {
    city: '上海',
    IBases: [6520, 34188],
    MIBases: [6520, 34188],
    EIBases: [6520, 34188],
    UIBases: [6520, 34188],
    CIBase: [6520, 34188],
    WIIBase: [6520, 34188],
    HACBases: [2590, 34188],
    addMI: 0, // 大病
    HACRates: [0.07, 0.07],
    EIRates: [0.08, 0.16],
    MIRates: [0.02, 0.1],
    UIRates: [0.005, 0.005],
    WIIRates: [0, 0.01],
    CIRates: [0, 0]
  },
  {
    city: '广州',
    IBases: [4588, 24930], // 社保基数
    MIBases: [7214, 36072], // 医保基数
    EIBases: [4588, 24930], // 养老基数
    UIBases: [2300, 36072], // 失业险基数
    HACBases: [2300, 36072], // 公积金基数
    addMI: 0, // 大病
    HACRates: [0.05, 0.12],
    EIRates: [0.08, 0.14],
    MIRates: [0.02, 0.0545],
    UIRates: [0.002, 0.0048],
    WIIRates: [0, 0.004], 
  },
  {
    city: '深圳',
    IBases: [2360, 27927],
    MIBases: [5585, 27927],
    EIBases: [2200, 19014],
    UIBases: [2200, 2200],
    CIBase: [2200, 27927],
    WIIBase: [2200, 19014],
    HACBases: [2200, 38892],
    addMI: 0, // 大病
    HACRates: [0.05, 0.12],
    EIRates: [0.08, 0.15],
    MIRates: [0.02, 0.062],
    UIRates: [0.003, 0.007],
    WIIRates: [0, 0.0014],
    CIRates: [0, 0.0045]
  },
  {
    city: '宁波',
    IBases: [3539, 17694], // 社保基数
    MIBases: [3539, 17694], // 医保基数
    EIBases: [3539, 17694], // 养老基数
    UIBases: [3539, 17694], // 失业险基数
    CIBase: [3539, 17694], // 生育险基数
    WIIBase: [3539, 17694], // 工伤险基数
    HACBases: [2010, 27237], // 公积金基数
    addMI: 0, // 大病
    HACRates: [0.08, 0.08],
    EIRates: [0.08, 0.14],
    MIRates: [0.02, 0.08],
    UIRates: [0.005, 0.005],
    WIIRates: [0, 0.0014],
    CIRates: [0, 0.0067]
  },
  {
    city: '苏州',
    IBases: [3368, 16842], // 社保基数
    MIBases: [3368, 16842], // 医保基数
    EIBases: [3368, 16842], // 养老基数
    UIBases: [3368, 16842], // 失业险基数
    HACBases: [3030, 23700], // 公积金基数
    addMI: 5, // 大病
    HACRates: [0.08, 0.08],
    EIRates: [0.08, 0.16],
    MIRates: [0.02, 0.07],
    UIRates: [0.005, 0.005]
  },
  {
    city: '无锡',
    IBases: [2788, 18171], // 社保基数
    MIBases: [2788, 18171], // 医保基数
    EIBases: [2788, 18171], // 养老基数
    UIBases: [2788, 18171], // 失业险基数
    HACBases: [2020, 23100], // 公积金基数
    addMI: 0, // 大病
    HACRates: [0.08, 0.08],
    EIRates: [0.08, 0.19],
    MIRates: [0.02, 0.079],
    UIRates: [0.005, 0.005]
  },

  {
    city: '成都',
    IBases: [2697, 16179], // 社保基数
    MIBases: [3236, 16179], // 医保基数
    EIBases: [2697, 16179], // 养老基数
    UIBases: [3236, 16179], // 失业险基数
    HACBases: [1780, 21498], // 公积金基数
    addMI: 0, // 大病
    HACRates: [0.06, 0.06],
    EIRates: [0.08, 0.16],
    MIRates: [0.02, 0.065],
    UIRates: [0.004, 0.006]
  },
  {
    city: '南京',
    IBases: [3368, 16842], // 社保基数
    MIBases: [3368, 16842], // 医保基数
    EIBases: [3368, 16842], // 养老基数
    UIBases: [3368, 16842], // 失业险基数
    HACBases: [2020, 27700], // 公积金基数
    addMI: 0, // 大病
    HACRates: [0.06, 0.06],
    EIRates: [0.08, 0.16],
    MIRates: [0.02, 0.09],
    UIRates: [0.005, 0.005]
  }
];

export const CITY = [
  '北京',
  '西安',
  '杭州',
  '上海',
  '广州',
  '深圳',
  '宁波',
  '苏州',
  '无锡',
  '成都',
  '南京'
];
