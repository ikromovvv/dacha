import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Employee {
  id: string | number;
  firstName: string;
  lastName: string;
  role: string;
  photo: string;
  description: string;
  experience: number; // yillarda
  rating: number; // ish samaradorligi
  shift: string; // smena
  email: string;
  phone: string;
  status: boolean
}

interface EmployeesState {
  employees: Employee[];
  currentEmployee: Employee | null;
}

 const initialEmployees: Employee[] = [
  {
    id: "1",
    firstName: "Ali",
    lastName: "Karimov",
    role: "Ofitsiant",
    photo: "https://images.unsplash.com/photo-1592847038692-304be1a9b399?auto=format&fit=crop&w=400&q=80",
    description: "Tezkor va xushmuomala ofitsiant, mijozlar bilan aloqada a'lo darajada.",
    experience: 3,
    rating: 9.2,
    shift: "09:00 - 18:00",
    email: "ali.karimov@example.com",
    phone: "+998901234567",
    status: true
  },
  {
    id: "2",
    firstName: "Bekzod",
    lastName: "Mirzayev",
    role: "Ofitsiant",
    photo: "https://images.pexels.com/photos/23025178/pexels-photo-23025178.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Mijozlarga samimiy va tezkor xizmat ko‘rsatadi.",
    experience: 4,
    rating: 9.0,
    shift: "10:00 - 19:00",
    email: "bekzod.mirzayev@example.com",
    phone: "+998901234570",
    status: false
  },
  {
    id: "3",
    firstName: "Dilorom",
    lastName: "Saidova",
    role: "Ofitsiant",
    photo: "https://images.unsplash.com/photo-1555992336-03a23c2d25c3?auto=format&fit=crop&w=400&q=80",
    description: "Har doim mijozlar bilan iliq muomala qiladi.",
    experience: 2,
    rating: 8.8,
    shift: "09:00 - 17:00",
    email: "dilorom.saidova@example.com",
    phone: "+998901234571",
    status: true
  },
  {
    id: "12",
    firstName: "Bekzod",
    lastName: "Rahmatov",
    role: "Ofitsiant",
    photo: "https://images.pexels.com/photos/3029019/pexels-photo-3029019.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Mijozlarga doimo xushmuomala xizmat ko‘rsatadi.",
    experience: 3,
    rating: 8.9,
    shift: "08:00 - 17:00",
    email: "bekzod.rahmatov@example.com",
    phone: "+998901234572",
    status: true
  },
  {
    id: "15",
    firstName: "Sardor",
    lastName: "Akbarov",
    role: "Ofitsiant",
    photo: "https://images.unsplash.com/photo-1603415526960-f3dbe2f1e1f0?auto=format&fit=crop&w=400&q=80",
    description: "Mijozlarga tezkor va do‘stona xizmat ko‘rsatadi.",
    experience: 5,
    rating: 9.3,
    shift: "09:00 - 18:00",
    email: "sardor.akbarov@example.com",
    phone: "+998901234573",
    status: false
  },
  {
    id: "16",
    firstName: "Laylo",
    lastName: "Rashidova",
    role: "Ofitsiant",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
    description: "Doimo mijozlar ehtiyojlarini birinchi o‘ringa qo‘yadi.",
    experience: 4,
    rating: 9.1,
    shift: "10:00 - 19:00",
    email: "laylo.rashidova@example.com",
    phone: "+998901234574",
    status: true
  },
  {
    id: "17",
    firstName: "Jasur",
    lastName: "Islomov",
    role: "Ofitsiant",
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    description: "Tezkor xizmat va do‘stona muomala bilan mashhur.",
    experience: 3,
    rating: 8.9,
    shift: "08:00 - 17:00",
    email: "jasur.islomov@example.com",
    phone: "+998901234575",
    status: false
  },
  {
    id: "18",
    firstName: "Nigora",
    lastName: "Yusupova",
    role: "Ofitsiant",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    description: "Mijozlarga iliq va samimiy xizmat ko‘rsatadi.",
    experience: 4,
    rating: 9.0,
    shift: "09:00 - 18:00",
    email: "nigora.yusupova@example.com",
    phone: "+998901234576",
    status: true
  },
  {
    id: "19",
    firstName: "Davron",
    lastName: "Rahmonov",
    role: "Ofitsiant",
    photo: "https://images.unsplash.com/photo-1595152772835-219674b2a8a5?auto=format&fit=crop&w=400&q=80",
    description: "Doim mijozlar ehtiyojini birinchi o‘ringa qo‘yadi.",
    experience: 5,
    rating: 9.2,
    shift: "09:00 - 18:00",
    email: "davron.rahmonov@example.com",
    phone: "+998901234577",
    status: true
  },
  {
    id: "20",
    firstName: "Sevara",
    lastName: "Abdullayeva",
    role: "Ofitsiant",
    photo: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&fit=crop&w=400&q=80",
    description: "Samimiy va tezkor xizmat ko‘rsatadi, mijozlarni xursand qiladi.",
    experience: 4,
    rating: 9.1,
    shift: "10:00 - 19:00",
    email: "sevara.abdullayeva@example.com",
    phone: "+998901234578",
    status: false
  }
];


const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: initialEmployees,
    currentEmployee: null,
  } as EmployeesState,
  reducers: {
      setCurrentEmployee: (state, action: PayloadAction<Employee | null>) => {
      state.currentEmployee = action.payload;
    },
  },
});

export const { setCurrentEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
