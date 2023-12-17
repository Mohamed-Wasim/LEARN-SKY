export const COMMONAPI = {
  INST: '/domain-mapping/search-institute',
  LOGIN: '/login.do',
  ENTERPISES: '/getEnterprise',
  MENUS: '/resources/getMenuResource/',
  GETINSTLST: '/institute/List',
  GETPROGLST: '/program/getprogramlist',
  GETCMPSLIST: '/campus',
  CREATECAMP: '/campus',
  EDITCAMP: '/campus/edit/',
  UPDATECAMP: '/campus/edit/',
  GETSECTIONLIST: '/section',
  GETLOCATION: '/Location',
  GETCREATELOCATION: '/location',
  GETFILTERLOCATION: '/location/filter_location'
};
export const types = {
  1: 'one'
};

export const COMMONLABEL = {
  InId: 'INSTITUTION',
  PrID: 'PRG_DEG_NAME',
  CrID: 'CRSE_PRG_NAME',
  AcYr: 'ACADEMIC_YEAR',
  DeptID: 'DEP_SCG_NAME',
  SemID: 'TRM_STD_NAME',
  SecID: 'SECTION'
};

export const ENTERPRISEKEYMATCH = {
  "Institute":"InId",
  "Program":"PrID",
  "Course":"CrID",
  "Department":"DeptID",
  "Semester":"SemID",
  "AcYr":"AcYr",
  "Section":"SecID"
};
