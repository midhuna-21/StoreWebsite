const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const nocache = require('nocache'); 
const connectDB = require("./config/connection");


const userRouter = require("./routes/userRoute");
const adminRouter = require("./routes/adminRoute");

const app = express();
connectDB();
app.use(nocache());
app.use(
    session({
        secret: 'your secret key',
        resave: false,
        saveUninitialized: true,
    })
);

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

// app.use(logger("dev"));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/admin", adminRouter);
app.use("/", userRouter);


// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });
app.use((req, res, next) => {
    console.log('g');
    res.status(404).render('error'); 
    });

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
});

app.listen(7000, () => {
    console.log("server started.");
});
