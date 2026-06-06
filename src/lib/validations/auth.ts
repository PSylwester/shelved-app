import * as z from "zod";

export const registerSchema = z
  .object({
    username: z.string().min(3, "Nazwa użytkownika musi mieć min. 3 znaki"),
    email: z.string().email("Wprowadź poprawny adres email"),
    password: z.string().min(12, "Hasło musi mieć co najmniej 12 znaków"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hasła nie są identyczne",
    path: ["confirmPassword"], // Błąd pokaże się przy polu powtórz hasło
  });

export type RegisterInput = z.infer<typeof registerSchema>;
