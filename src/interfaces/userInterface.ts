export const gender = ['male', 'female', 'other'] as const;
export type genderT = typeof gender[number];

export const role = ['admin', 'company', 'intern'] as const;
export type roleT = typeof role[number];
