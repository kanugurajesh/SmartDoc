export type Session = {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
};

export type JType = {
  text: string;
  duration: number;
  offset: number;
  lang: string;
};
