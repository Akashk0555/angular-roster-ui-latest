export interface Comment {
  id: number;
  author: string;
  text: string;
  employeeId: number;
  commentDate: string;
  createdAt: string;
}

export interface Employee {
  id: number;
  name: string;
  comments: Comment[];
}
