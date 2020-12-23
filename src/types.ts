export type NavButtonProps = {
  buttonText: string;
};

export type StackGroupProps = {
  group: {
    name: string;
    technologies: String[];
  };
};

export type Button = {
  name: string;
  link: string;
};
export type ProjectProps = {
  image: string;
  title: string;
  stack: string[];
  description: string[];
  buttons: Button[];
};

export type ExperienceProps = {
  content: {
    type: string;
    period: string;
    title: string;
    company?: string;
    location?: string;
    flag?: string;
    description: string;
    tags: string[];
    responsibilities?: string[];
  };
};

export type ExperienceDetailsProps = {
  tags: string[];
  description: string;
  responsibilities?: string[];
  type: string;
};

export type HobbyProps = {
  hobby: {
    title: string;
    description: string;
    image: string;
  };
};
