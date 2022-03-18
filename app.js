const express = require("express");
 const app = express();  //함수처럼 express 실행 
 const port = 3000;

 const goodsRouter = require("./routes/goods")

// 이미 존재하는 미들웨어들은 expressjs 홈페이지에서 제공되고 있다
// npmjs 여기 홈페이지는 패키지들이 많음 express Middleware검색 ㄱ

const requestMiddleware = ((req, res, next) => {
    console.log("Request Url:", req.originalUrl, " - ", new Date()) 
    // 미들웨어가 처리될 때 현재 시간을 나타내는 함수
    next(); 
    // next있어야만 다음 미들웨어로 넘어간다. 여기서 next가 없으면 무한로딩이 걸린다.
}) 

app.use(requestMiddleware);

app.use("/api", [goodsRouter])

// Router : 서버?
app.get('/', (req, res)=>{  // /슬래시 뒤에 아무것도 안붙었을 때, req : request, res : respones
    res.send("Hello World")//next로 추출하지 않으려면 무조건 서버 응답을 해줘야됨
}) 

 app.listen(port, () => { // 서버를 켜는 (포트)
     console.log(port,"포트로 서버가 켜졌어요!!")// 서버에 호출 (함수)
 })

 //미들웨어 == 모듈   Request(요청) -> Middleware(서버에 추가적인 기능을 붙인다) -> Response(응답)
 //Ex) 미들웨어에 한국어를 이해할 수 있는 추가기능을 붙이면 한국말을 이해하고 말 할 수 있다


