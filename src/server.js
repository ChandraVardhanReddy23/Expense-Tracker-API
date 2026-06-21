const express=require('express');
const dotenv=require('dotenv');
const connectDB=require("./config/db");
const authRoutes=require("./routes/authRoutes")
const authMiddleware=require("./middleware/authMiddleware")
const expenseRoutes =require("./routes/expenseRoutes");
dotenv.config();

connectDB();

const app=express();
app.use(express.json());
app.use("/api/routes",authRoutes)
app.use("/api/expenses",expenseRoutes);
app.get("/",(req,res)=>{
    res.json({
        message:"Expense Tracker api is running"
    })
})
app.get("/api/protected",authMiddleware,(req,res)=>{
    res.json({
        message:"Protected Route",
        user:req.user
    })
})

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);   
})
