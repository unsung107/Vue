// 외부에 요청을 보내서 그 결과를 출력하는 코드를 작성하고자 한다.
//   1. 몇초 뒤에 데이터가 응답되면
//   2. 데이터를 변수에 저장하여 출력!

// function getData() {
//   let data
  
//   setTimeout(() => {
//     console.log('INFO: 요청을 보냈습니다.')
//     data = {'data' : 'somedata'}
//   }, 100)
// }

// function printData() {
//   let response1 = getData()
//   console.log(response1)
// }

// printData()

// function getDataCallback(callback) { // 2. callback 으로 함수가 넘어옴. 즉, call = 저 익명함수
//   setTimeout(() => {
//     console.log('INFO: 요청을 보냈습니다.')
//     const data = {'data': 'somedata'}
//     callback(data) // 3. 다 끝나고 저 함수를 실행
//   }, 100);
// }

// // 1. 출력하는 작업을 하는 함수를 인수로 넘김
// getDataCallback(function(data){
//   console.log(data)
// })


// 1. 다짐을 반환한다. // Promise를 반환한다.
// 2. 어떤다짐? ==> 데이터를 요청한 뒤 어떻게 할거야! // Promis 안쪽의 함수에 표현한다
function getDataPromise() { // === axios.get
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (true) {
        console.log('INFO: 요청을 보냈습니다.')
        const data = {'data': 'somedata'}
        resolve(data) // .then 으로 꺼낼 수 있는 객체.
      }
      else {
        reject('조건에 통과하지 못했어요')
      }
    }, 100);
  })
}

// getDataPromise()
//   .then(response => {
//     console.log(response)
//     return response.data
//   })
//   .then(data =>{
//     console.log(data)
//   })
//   .catch(error => {
//     console.error(error)
//   })

// const handleData = async function() {
//   getDataPromise().then(response => {
//     console.log(response)
//     // 이후작업. 이상하다
//   })
// }

// const handleData = async function() {
//   const response = await getDataPromise() //await : 옆에애를 가지고올때까지 기다리겠다.
//   console.log(response)
// }

async function printData() {
  const data = getDataPromise()
  console.log(data)
}