export const claimReq = {
  adminOnly: (c: any) => c.role == 'Admin',
  adminOrTeacher: (c: any) => c.role == 'Admin' || c.role == 'Teacher',
  hasLibraryId: (c: any) => 'libraryId' in c,
  femaleTeacher: (c: any) => c.role == 'Teacher' && c.gender == 'Female',
  femaleAbove21: (c: any) => c.gender == 'Female' && parseInt(c.age) >= 21,
};
