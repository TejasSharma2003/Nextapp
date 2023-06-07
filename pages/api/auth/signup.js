//Utils / lib
import connectDb from "@/lib/connectDB";

//Models
import User from "@/models/userModel";
import AppError from "@/utils/AppError";

const handler = async (req, res) => {
  if (!req.method === "POST") return;

  try {
    await connectDb();

    const { name, email, password } = req.body;

    console.log(name, email, password);

    if (!name || !email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Please provide your credentials",
      });
    }

    const user = await User.create({ name, email, password });

    user.password = null;

    return res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    //Handler mongodb dublicate document error
    let error;
    if (err.code === 11000) {
      error = new AppError("Provided email address already exits.", 409);
    } else {
      error = new AppError();
    }

    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  }
};

export default handler;
