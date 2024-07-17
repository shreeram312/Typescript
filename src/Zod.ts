import z from "zod";
import express from "express";

const app = express();

app.use(express.json());
const Profile = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "please provide valid email" }),
  age: z
    .number()
    .min(18, { message: "Age should be greater than 18" })
    .optional(),
});

app.put("/users", (req, res) => {
  const { name, email, age } = req.body;
  const { success } = Profile.safeParse({ name, email, age });
  const updatedBody = req.body;

  if (!success) {
    return res.json({
      msg: "No Inputs Provided",
    });
  }

  return res.json({
    msg: updatedBody,
  });

  return res.json({});
});

app.listen(3000);
