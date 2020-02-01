const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

const app = next({dev});
const handle = app.getRequestHandler();
dotenv.config();

app.prepare().then(()=>{
    const server = express();
    server.use(morgan('dev'));
    server.use('/image', express.static(path.join(__dirname,'img/mypage')));
    server.use('/', express.static(path.join(__dirname,'public')));
    server.use(express.json());
    server.use(express.urlencoded({extended:true}));
    server.use(cookieParser(process.env.COOKIE_SECRET));
    server.use(expressSession({
        resave:false,
        saveUninitialized:false,
        secret:process.env.COOKIE_SECRET,
        cookie:{
            httpOnly:true,
            secure:false,
        },
    }));

    server.get('/feedbackdetail/:id',(req,res)=>{
        const actualPage = '/feedbackdetail';
        const queryParams = {id:req.params.id};
        app.render(req,res,actualPage,queryParams);
    });
    
    server.get('*',(req,res)=>{
        return handle(req,res);
    });

    server.listen(prod?80:2323,()=>{
        console.log('서버 구동');
    });
});
